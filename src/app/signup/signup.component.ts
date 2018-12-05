import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request,RequestMethod,Http,Response,Headers,ResponseType, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
c:any;
p:any;
e:any;


x:any;

constructor(private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) { }
verify=function()
{
  //this.x=document.getElementById("verifys").value;
 // /conform/:verificationcode'

  console.log(this.x)
  this.http.get('http://13.232.165.2:3000/conform/'+this.x)
.subscribe (
  (res:Response) =>{
  var r=res.json();
this.router.navigate(['/login'])

})
}
  signup=function(data)
{
  console.log(JSON.stringify(data))
  this.c=data.fname;
    this.p=data.email
    this.e=data.password
console.log(this.c+this.p)


  this.http.get('http://13.232.165.2:3000/registorincognito/'+this.p+'/'+this.e+'/'+this.p)
      .subscribe(
        res => {
          console.log(res.json);
        },
        err => {
          console.log("error")
        }
      );/*
this.http.post('http://13.232.165.2:3000/registorincognito/'+this.p+'/'+this.e+'/'+this.p)
.subscribe (
  (res:Response) =>{
 console.log(res)
  var r=res.json
alert(r)
})*/
}
  ngOnInit() {
  }

}
