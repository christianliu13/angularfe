import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import data from '../../assets/questions.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  questionsForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
  });
  public questions = data;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Responses Recorded!');
  }

  ngOnInit(){
    this.questions.forEach(control => this.questionsForm.addControl(control.key, this.fb.control('')));
    console.log(this.questions)
  }

  // private getValidators(formField: FormField): ValidatorFn {
  //   switch(formField.validator) {
  //     case "email":
  //       return Validators.email;
  //     case "required":
  //       return Validators.required;
  //     default:
  //       return null;
  //   }
  // }
}

