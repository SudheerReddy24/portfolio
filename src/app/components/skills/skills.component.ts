import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills.data';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SectionTitleComponent,
    RevealDirective
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillsCategory = SKILLS;

}
