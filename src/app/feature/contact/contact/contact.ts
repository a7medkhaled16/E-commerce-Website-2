import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

 formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    }, 3000);
  }

}
