import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get('http://13.232.165.2:3000/vendordetails').subscribe(data => {
          //console.log(data);
          this.data=data;
          console.log(this.data);

        });


}//
go(name){

  console.log("event started"+name)
  this.router.navigate(['/vendorcheckdetails', name]);

}
}
