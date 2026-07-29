import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    // ProjectCardComponent,
    SectionTitleComponent,
    RevealDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

  projects: Project[] = PROJECTS;

}
