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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
c:any;
p:any;
constructor(private http: Http, private router: Router, private route: ActivatedRoute,private httpService: HttpClient) { }
  signup=function(data)
  {
    var data2=JSON.stringify(data)
    console.log(data2)
    this.c=data.email;
    this.p=data.password
console.log(this.c+this.p)
this.http.get('http://13.232.165.2:3000/loginincognito/'+this.c+'/'+this.p)
.subscribe (
  (res:Response,err) =>{
    if(err)
    {
    //  res.send(err)
    }
    var r=res.json();
	if(r.message=="Error")
alert(r.data.message)
else
this.router.navigate(['/cheques'])

})
  }
 ngOnInit() {
  }

}
