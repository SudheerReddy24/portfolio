import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.element.nativeElement, 'show');
        observer.unobserve(this.element.nativeElement);
      }
    }, {
      threshold: 0
    });

    observer.observe(this.element.nativeElement);
  }

}
