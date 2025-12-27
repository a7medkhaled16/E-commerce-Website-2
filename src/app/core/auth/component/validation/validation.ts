import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  imports: [],
  templateUrl: './validation.html',
  styleUrl: './validation.css',
})
export class Validation {

@Input() controls!:AbstractControl  | null


}
