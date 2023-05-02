import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title = 'Reactiveforms';
  reactiveform: FormGroup;

  ngOnInit(){
    this.reactiveform = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl(null),
      country: new FormControl(null),
      hobbies: new FormControl(null)
    });

  }
}
