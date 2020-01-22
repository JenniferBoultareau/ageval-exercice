import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pa-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  objectifForm = new FormGroup({
    objectifName: new FormControl(null, [Validators.required]),
    
  })

  constructor() { }

  ngOnInit() {
  }

}
