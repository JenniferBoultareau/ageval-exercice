import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanActionService } from '../services/planAction.service';
import { Objectif } from '../models/objectif.model';

@Component({
  selector: 'pa-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  objectifForm: FormGroup;
  submitted = false;
  public objectifs: Objectif[] = [];

  constructor(private formBuilder: FormBuilder,
              private planActionService: PlanActionService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.objectifForm = this.formBuilder.group({
      reference: ['', Validators.required],
      nom: ['', Validators.required],
      themes: ['', Validators.required],
      sources: ['', Validators.required],
      responsables: ['', Validators.required],
      echeances: ['', Validators.required],
      priorites: ['', Validators.required],
      actions: this.formBuilder.group({
        nom: ['', Validators.required],
        pilotes: ['', Validators.required],
        echeances: ['', Validators.required]
      }),
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
    const formValue = this.objectifForm.value;

    this.planActionService.addObjectifs(formValue)
        .subscribe((objectif) => {
          this.objectifs = [objectif, ...this.objectifs]
        });
    console.log(formValue);
    this.router.navigate(['']);
  }

}
