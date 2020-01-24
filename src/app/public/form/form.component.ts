import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Objectif } from '../models/objectif.model';

@Component({
  selector: 'pa-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  objectifForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.objectifForm = this.formBuilder.group({
      nom: ['', Validators.required],
      theme: ['', Validators.required]
    });
  }

  onSubmitForm() {
    // const formValue = this.objectifForm.value;
    // const newObjectif = new Objectif(
    //   formValue['nom'],
    //   formValue['theme']
    // );
    console.log(this.objectifForm.value);
  }

}
