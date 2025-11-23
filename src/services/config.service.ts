import { Injectable, signal, computed } from '@angular/core';
import { weddingConfig } from '../config/wedding.config';
import { LoveStoryItem, WeddingConfig } from '../models/config.model';
import env from '../environment'
interface ConfigState {
  config: WeddingConfig;
  loading: boolean;
  error: any;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private state = signal<ConfigState>({
    config: weddingConfig, // Start with default config
    loading: true,
    error: null
  });

  // Public readonly signals
  public readonly config = computed(() => this.state().config);
  public readonly isLoading = computed(() => this.state().loading);
  public readonly error = computed(() => this.state().error);

  constructor() {
    this.fetchConfig();
  }

  // private fetchConfig() {
  //   this.state.update(value => ({ ...value, loading: true }));

  //   // Simulate an API call
  //   setTimeout(() => {
  //     try {
  //       // In a real app, you would fetch from an API:
  //       // const fetchedConfig = await fetch('/api/config').then(res => res.json());
  //       // For now, we'll just use the local config successfully.
  //       const fetchedConfig = weddingConfig; 

  //       this.state.set({
  //         config: fetchedConfig,
  //         loading: false,
  //         error: null
  //       });
  //     } catch (e) {
  //       console.error("Failed to fetch remote config, using default.", e);
  //       this.state.update(value => ({
  //           ...value,
  //           loading: false,
  //           error: e
  //       }));
  //     }
  //   }, 1500); // Simulate 1.5 second network delay
  // }

  private async fetchConfig() {
  this.state.update(value => ({ ...value, loading: true }));
  
  try {
    
    const response = await fetch(env.apiUrl + '/wedding-data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const fetchedConfig = await response.json();
    const mergedConfig = this.deepMerge(weddingConfig, fetchedConfig);
    console.log("fetchedConfig:", fetchedConfig);

        // Sau đó xử lý riêng cho milestones
        if (fetchedConfig.loveStory?.milestones && weddingConfig.loveStory?.milestones) {
      console.log('🎯 Special handling for milestones');
      mergedConfig.loveStory.milestones = this.mergeMilestones(
        weddingConfig.loveStory.milestones,
        fetchedConfig.loveStory.milestones
      ) as LoveStoryItem[];  // Type assertion
    }


    this.state.set({
      config: mergedConfig,
      loading: false,
      error: null
    });

    console.log(this.state())

  } catch (e) {
    console.error("Failed to fetch remote config, using default.", e);
    this.state.set({
      config: weddingConfig, // Fallback về config mặc định
      loading: false,
      error: e
    });
  }

}
// Helper function để deep merge objects
private deepMerge<T extends Object>(target: T, source: Partial<T>): T {
  const output = { ...target };
  const src = source as any;
  const tgt = target as any;
  if (this.isObject(target) && this.isObject(source)) {
    Object.keys(source).forEach(key => {

      // Logic đặc biệt cho loveStory milestones
      if (key === 'milestones' && Array.isArray(tgt[key]) && Array.isArray(src[key])) {
        output[key] = this.mergeMilestones(tgt[key], src[key]);
      } 
      // Logic bình thường cho nested objects

      if (this.isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = this.deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  
  return output;
}

private isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

// Hàm helper để merge milestones
private mergeMilestones(
  targetMilestones: LoveStoryItem[],
  sourceMilestones: Array<{date: string, image: string, content?: string}>
): LoveStoryItem[] {
  
  console.log('🔍 Merging milestones:');
  
  const sourceMap = new Map(
    sourceMilestones.map(m => [m.date, m.image])
  );
  
  return targetMilestones.map(target => {
    const newImage = sourceMap.get(target.date);
    
    if (newImage) {
      console.log(`  ✅ Updating image for date: ${target.date}`);
      return {
        ...target,  // Spread sẽ giữ toàn bộ properties bao gồm content
        image: newImage
      };
    }
    
    return target;
  });
}

}