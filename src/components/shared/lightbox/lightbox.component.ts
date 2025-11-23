import { Component, ChangeDetectionStrategy, input, output, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // FIX: Replaced @HostListener with host object for better practice.
  host: {
    '(document:keydown.escape)': 'onEscapeKey($event)',
    '(document:keydown.arrowright)': 'onArrowRight($event)',
    '(document:keydown.arrowleft)': 'onArrowLeft($event)',
    '(mousemove)': 'onMouseMove()',
  },
})
export class LightboxComponent {
  imageUrl = input.required<string>();
  onClose = output<void>();
  onNext = output<void>();
  onPrev = output<void>();

  showControls = signal(true);
  private timeoutId?: number;

  constructor() {
    effect(() => {
      // When the imageUrl changes, reset the controls visibility
      this.imageUrl(); // dependency
      this.resetControlsTimeout();
    });
  }

  onEscapeKey(event: KeyboardEvent) {
    this.onClose.emit();
  }

  onArrowRight(event: KeyboardEvent) {
    this.onNext.emit();
  }
  
  onArrowLeft(event: KeyboardEvent) {
    this.onPrev.emit();
  }

  onMouseMove() {
    this.showControls.set(true);
    this.resetControlsTimeout();
  }

  close() {
    this.onClose.emit();
  }

  private resetControlsTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.showControls.set(false), 3000);
  }
}