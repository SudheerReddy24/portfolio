import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { FEATURES } from '../../data/feature.data';
import { STATISTICS } from '../../data/statistics.data';
import { ABOUT } from '../../data/about.data';
import { TECHNOLOGIES } from '../../data/technologies.data';
import { TIMELINE } from '../../data/timeline.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    SectionTitleComponent,
    RevealDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  readonly about = ABOUT;
  readonly features = FEATURES;
  readonly statistics = STATISTICS;
  readonly technologies = TECHNOLOGIES;
  readonly timeline = TIMELINE;
}
