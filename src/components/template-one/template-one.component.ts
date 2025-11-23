import { Component, ChangeDetectionStrategy, inject, signal, OnDestroy, computed, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { GuestbookService } from '../../services/guestbook.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LightboxComponent } from '../shared/lightbox/lightbox.component';
import { MiniGameComponent } from '../shared/mini-game/mini-game.component';

@Component({
  selector: 'app-template-one',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, SafeUrlPipe, FadeInDirective, LightboxComponent, MiniGameComponent],
  templateUrl: './template-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateOneComponent implements OnDestroy {
  private configService = inject(ConfigService);
  private guestbookService = inject(GuestbookService);
  private fb: FormBuilder = inject(FormBuilder);

  config = this.configService.config;
  @ViewChildren('galleryImage') imageElements!: QueryList<ElementRef>;
  // Slideshow state
  slideImages = computed(() => this.config().slideImages);
  currentSlideIndex = signal(0);
  currentAnimation = signal('animate-kenburns-tl');
  private slideIntervalId?: number;
  private animations = ['animate-kenburns-tl', 'animate-kenburns-br', ''];
  
  timeLeft = signal({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  private intervalId?: number;

  // Gifting state
  copiedGroom = signal(false);
  copiedBride = signal(false);

  // Guestbook state
  guestbookMessages = this.guestbookService.messages;
  guestbookForm = this.fb.group({
    name: ['', Validators.required],
    message: ['', Validators.required],
  });

  // Gallery and Lightbox state
  galleryCategories = computed(() => Object.keys(this.config().galleryImages));
  galleryTitles = computed(() => Object.values(this.config().galleryTitle));
  private userSelectedCategory = signal<string | null>(null);

  activeCategory = computed(() => {
    const categories = this.galleryCategories();
    if (!categories || categories.length === 0) return null;
    const userSelection = this.userSelectedCategory();
    return (userSelection && categories.includes(userSelection)) ? userSelection : categories[0];
  });

  activeImages = computed(() => {
    const category = this.activeCategory();
    const gallery = this.config().galleryImages;
    const images = category ? gallery[category] : [];
    return Array.isArray(images) ? images : [];
  });
  loadedImages = signal<Set<number>>(new Set());
  selectedImageIndex = signal<number | null>(null);
  isLightboxOpen = computed(() => this.selectedImageIndex() !== null);
  selectedImageUrl = computed(() => {
    const index = this.selectedImageIndex();
    const images = this.activeImages();
    if (index === null || !images) return null;
    return images[index] || null;
  });

  constructor() {
    this.startCountdown();
    this.startSlideshow();
  }

  startSlideshow() {
    this.slideIntervalId = window.setInterval(() => {
      this.currentSlideIndex.update(i => (i + 1) % this.slideImages().length);
      this.currentAnimation.set(
        this.animations[Math.floor(Math.random() * this.animations.length)]
      );
    }, 7000);
  }
  ngAfterViewInit() {
    this.setupLazyLoading();
  }

  private setupLazyLoading() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const index = parseInt(img.dataset['index'] || '0');
            
            // Load image
            if (img.dataset['src']) {
              img.src = img.dataset['src'];
              delete img.dataset['src'];
            }
            
            this.loadedImages.update(set => {
              const newSet = new Set(set);
              newSet.add(index);
              return newSet;
            });
            
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '50px' }
    );

    this.imageElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }
  startCountdown() {
    const weddingDate = new Date(this.config().mainEvent.date).getTime();
    this.intervalId = window.setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        this.timeLeft.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (this.intervalId) clearInterval(this.intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.timeLeft.set({ days, hours, minutes, seconds });
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.slideIntervalId) clearInterval(this.slideIntervalId);
  }

  getFormattedDate(): string {
    const date = new Date(this.config().mainEvent.date);
    return date.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  getFormattedTime(): string {
    const date = new Date(this.config().mainEvent.date);
    return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute:'2-digit' });
  }

  formatStoryDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  async copyToClipboard(accountNumber: string, type: 'groom' | 'bride') {
    try {
      await navigator.clipboard.writeText(accountNumber);
      if (type === 'groom') {
        this.copiedGroom.set(true);
        setTimeout(() => this.copiedGroom.set(false), 2000);
      } else {
        this.copiedBride.set(true);
        setTimeout(() => this.copiedBride.set(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  submitGuestbookMessage() {
    if (this.guestbookForm.valid) {
      const { name, message } = this.guestbookForm.value;
      this.guestbookService.addMessage(name!, message!);
      this.guestbookForm.reset();
    }
  }

  selectCategory(category: string): void {
    this.userSelectedCategory.set(category);
  }

  openLightbox(index: number): void {
    this.selectedImageIndex.set(index);
  }

  closeLightbox(): void {
    this.selectedImageIndex.set(null);
  }

  nextImage(): void {
    if (this.selectedImageIndex() !== null) {
      this.selectedImageIndex.update(index => (index! + 1) % this.activeImages().length);
    }
  }

  prevImage(): void {
    if (this.selectedImageIndex() !== null) {
      this.selectedImageIndex.update(index => (index! - 1 + this.activeImages().length) % this.activeImages().length);
    }
  }
}