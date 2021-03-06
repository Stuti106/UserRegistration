import { country } from './country';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private countryList : country , private router: Router) { }
  countryDataList: any[];
  registrationForm : FormGroup;

  ngOnInit(): void {
    this.countryDataList = this.countryList.countryList;
    this.registrationForm = new FormGroup({
      firstName : new FormControl('', [Validators.required,Validators.minLength(5)]),
      lastName : new FormControl('', [Validators.required,Validators.minLength(5)]),
      phoneNumber : new FormControl('', [Validators.required]),
      country : new FormControl('IN', [Validators.required])
    })
  }
  submit() {
    alert("Your account has been created!")
    this.router.navigate(['/']);

  }

}
