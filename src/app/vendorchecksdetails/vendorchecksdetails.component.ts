import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vendorchecksdetails',
  templateUrl: './vendorchecksdetails.component.html',
  styleUrls: ['./vendorchecksdetails.component.css']
})
export class VendorchecksdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { }
name:any;
  ngOnInit() {
    this.route.params.subscribe(params => {
       name = params['name']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       console.log(name);

    });

    this.http.get('http://13.232.165.2:3000/vendorcheques?name='+name).subscribe(data => {
          //console.log(data);
          this.data=data;
          console.log(this.data);

        });


  }
  send(data){
 var k =JSON.stringify(data);

   this.router.navigate(['/singlecheck', k]);

  }

}
