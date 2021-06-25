import { Component} from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, RequiredValidator } from '@angular/forms';
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
    //get questions data, could be api
    this.questions.forEach(control => this.questionsForm.addControl(control.key, this.fb.control('', this.getValidators(control.options)))); 
  }

//todo add validators
  private getValidators(formField: any): ValidatorFn | null {
      if (formField.required) {
        return Validators.required;
      }
        return null;
  }
}

