import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {

  activeSection = 'home';

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-open', this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.classList.remove('menu-open');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('menu-open');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (window.scrollY >= top && window.scrollY < top + height) {
        this.activeSection = id!;
      }
    });
  }
}
