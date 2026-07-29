import { Component } from '@angular/core';
import { RevealDirective } from "../../shared/directives/reveal.directive";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  currentYear = new Date().getFullYear();
}
