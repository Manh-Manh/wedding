import { Directive, ElementRef, inject, afterNextRender, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
})
export class FadeInDirective implements OnDestroy {
  private elementRef = inject(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      const element = this.elementRef.nativeElement;
      element.classList.add('fade-in-on-scroll'); // Initial state

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.classList.add('is-visible');
              this.observer?.unobserve(element); // Animate only once
            }
          });
        },
        { threshold: 0.1 }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}