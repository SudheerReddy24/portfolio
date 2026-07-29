import { Component, inject, signal } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { finalize } from 'rxjs';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SectionTitleComponent,
    ReactiveFormsModule,
    RevealDirective
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  emailId: string = "sudheerreddykalli@gmail.com";

  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  loading = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  contactForm = this.fb.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    subject: [
      '',
      [
        Validators.required,
      ]
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ]
  });

  submit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched;
      return;
    }

    this.loading.set(true);

    this.contactForm.disable();

    this.successMessage.set('');

    this.errorMessage.set('');

    this.contactService
      .sendMessage(this.contactForm.getRawValue())
      .pipe(
        finalize(() => {
          this.loading.set(false);
          this.contactForm.enable();
        })
      )
      .subscribe({
        next: (response) => {
          this.successMessage.set(response.message);
          this.contactForm.reset();

          setTimeout(() => {
            this.successMessage.set('');
          }, 4500);
        },
        error: (error) => {
          this.errorMessage.set(error.error?.message || 'Something went wrong.');
        }
      });
  }

  getError(controlName: string): string {
    const control = this.contactForm.get(controlName);

    if (!control || !control.touched || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return `${this.getFieldName(controlName)} is required.`;
    }

    if (control.errors['email']) {
      return 'Enter a valid email address.';
    }

    if (control.errors['minlength']) {
      return `${this.getFieldName(controlName)} must be at least ${control.errors['minlength'].requiredLength} characters.`;
    }

    return '';
  }

  private getFieldName(controlName: string): string {
    switch (controlName) {
      case 'name':
        return 'Name';
      case 'email':
        return 'Email';
      case 'subject':
        return 'Subject';
      case 'message':
        return 'Message';
      default:
        return controlName;
    }
  }
}
