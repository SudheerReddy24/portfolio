import { AfterViewInit, Component, Inject, PLATFORM_ID, Type } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  name = "Sudheer Reddy Kalli";

  ngAfterViewInit(): void {
    new Typed('#typing', {
      strings: [
        'Java Backend Developer',
        'Spring Boot Developer',
        'Java Full Stack Developer',
        'REST API Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true
    });
  }

}
