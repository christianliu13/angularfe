import { Component} from '@angular/core';
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
  questions = data;

  constructor(private fb: FormBuilder) {}

  
  saveResponses(data: any){
    let key = 'formData';
    let item = JSON.parse(localStorage.getItem(key) || '[]');

    let newData = item.concat(data);

    localStorage.setItem('formData', JSON.stringify(newData));
  }

  onSubmit(): void {
    this.saveResponses([this.questionsForm.value]);
    alert('Responses Recorded!');
    this.questionsForm.reset();
  }

  ngOnInit(){
    this.questions.forEach(control => this.questionsForm.addControl(control.key, this.fb.control(''))); //get questions data, could be api
  }

//todo add validators
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

