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
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.objectifForm = this.formBuilder.group({
      objectifReference: ['', Validators.required],
      objectifNom: ['', Validators.required],
      objectifTheme: ['', Validators.required],
      objectifSource: ['', Validators.required],
      objectifResponsable: ['', Validators.required],
      objectifEcheance: ['', Validators.required],
      objectifPriorite: ['', Validators.required],
      actionName: ['', Validators.required],
      actionPilote: ['', Validators.required],
      actionEcheance: ['', Validators.required],
    });
  }

  get c() { 
    return this.objectifForm.controls; 
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.objectifForm.invalid) {
      return;
    }
    // const formValue = this.objectifForm.value;
    // const newObjectif = new Objectif(
    //   formValue['nom'],
    //   formValue['theme']
    // );
    console.log(this.objectifForm.value);
  }

}
