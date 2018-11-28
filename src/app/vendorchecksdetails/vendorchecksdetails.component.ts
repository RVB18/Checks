import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-vendorchecksdetails',
  templateUrl: './vendorchecksdetails.component.html',
  styleUrls: ['./vendorchecksdetails.component.css']
})
export class VendorchecksdetailsComponent implements OnInit {

  data:any;
  
  displayedColumns = [ 'ChequeID', 'Name', 'Date', 'Amount','Status','Print'];
  dataSource: MatTableDataSource<UserData>;
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  send(data){
 var k =JSON.stringify(data);

 window.open('http://alektasolutions.com/purchase/print/cheque?date='+data.Date+'&name='+data.Name+'&amount='+data.Dollar+'&addr=,,')

  }
  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) {
    const users: UserData[] = [];

var name='';
    this.route.params.subscribe(params => {
       name = params['name']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       console.log(name);

    });
    this.http.get('http://13.232.165.2:3000/vendorcheques?name='+name).subscribe(data => {
      //console.log(data);
      this.data=data;
      for(var t=0;t<data.length;t++){
        users.push(data[t])

      }
      this.dataSource = new MatTableDataSource(users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    //  console.log("sdfsd "+this.dataSource)


    });

   }
  ngOnInit() {



//

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface UserData {
  ChequeID:string;
  Name: string;
  Dollar: string;
  Date: string;
  Status: string;

}
