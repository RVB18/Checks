

import { Component, ViewChild , ElementRef, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {MatTableDataSource,MatPaginator, MatSort,} from '@angular/material';

import { Router } from '@angular/router';
import { number } from 'number-to-words';
//
@Component({
  selector: 'app-chequeslist',
  templateUrl: './chequeslist.component.html',
  styleUrls: ['./chequeslist.component.css']
})
export class ChequeslistComponent implements OnInit  {

  displayedColumns = [ 'checked','chequeid', 'Name', 'Date', 'Amount','Status'];
  dataSource: MatTableDataSource<UserData>;
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }


  constructor(private http: HttpClient,private router: Router) {
    const users: UserData[] = [];
    //  for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render


    this.http.get('http://13.232.165.2:3000/cheque').subscribe(data => {
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
  highlightedRows(row){
      //  if(hash)
      console.log(row)
      var a=row.chequeid



      console.log(a)
      if(this.map.has(a))
        this.map.delete(a)
      else
      this.map.set(a,row)

      }
      g(){

console.log(this.map)
var a=[]
this.map.forEach((value, key) => {
  a.push({name:value.Name,date:value.Date,amount:value.Dollar})

});
var xdata=[];
	while(a.length>0){

	xdata.push({in:a.splice(0,3)})


	}
//	console.log(xdata)
a=JSON.stringify(xdata)
console.log(a)
window.open("http://alektasolutions.com/purchase/print/cheques/ang?a="+a, "_blank");

//this.router.navigate(['/multicheck',a])
      }

  public changeListener(files: FileList){
  console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0);
       console.log(file.name);
       const formData = new FormData();
formData.append('file', file, file.name);

       console.log(formData)




           this.http.post('http://13.232.165.2:3000/formbabieee', formData)
      .subscribe(
        res => {
          console.log(res);
window.location.reload();
        },
        err => {
          console.log("error")
          window.location.reload();
        }
      );
    }
}



  ngOnInit() {
    this.map = new Map();

  }



  ngAfterViewInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
export interface UserData {
  checked:boolean;
  chequeid: string;
  Name: string;
  Date: string;
  Dollar: string;
}

//
