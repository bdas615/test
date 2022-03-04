import { Component,OnInit } from '@angular/core';
import {  FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title='Reactive Forms';
    myForm:any= FormGroup
    constructor() { }
  ngOnInit() { 
    this.myForm = new FormGroup({
     userName:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required,Validators.minLength(6)]),
     mobile:new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    }); 
    }
    get userName(){
      return this.myForm.get('userName');
    }
    get email(){
      return this.myForm.get('email');
    }
    get password(){
      return this.myForm.get('password');
    }
    get mobile(){  return this.myForm.get('mobile');}
    onSubmit()  { console.log(this.myForm.controls);}
  }
  