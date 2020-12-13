import { Component } from '@angular/core';
import { User} from './model';
import { DataServiceService} from './data-service.service';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  constructor( private _dataService:DataServiceService,
    private _fb:FormBuilder ){}
  
 /* registration = new FormGroup({
    username: new FormControl("srinivas"),
    password: new FormControl("srinivas123"),
    cnfrmPassowrd: new FormControl("srinivas123"),
    address: new FormGroup({
      state: new FormControl(""),
      country: new FormControl("")
    })
  });*/

  /* FormBuilder is an alaternate method to create form*/
     registration = this._fb.group({
       username:[''],
       password:[''],
       cnfrmPassowrd:[''],
       address: this._fb.group({
         state:[''],
         country:['']
       })
     })

  /* update form fields progaramatically using setValue, patchValue
     for all forms fields use setValue & for partially update use patchValue */
     loadData(){
     /* this.registration.setValue({
      username:"venky",
      password:"",
      cnfrmPassowrd:"",
      address:{
        state: 'telangana',
        country:'india'
      }
    });*/
    this.registration.patchValue({
      username:'venky',
      address:{
      country:'india'
      }
    })
}

}
