

import { Component, ViewChild , ElementRef, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {MatTableDataSource,MatPaginator, MatSort,} from '@angular/material';

import { Router } from '@angular/router';

@Component({
  selector: 'app-chequeslist',
  templateUrl: './chequeslist.component.html',
  styleUrls: ['./chequeslist.component.css']
})
export class ChequeslistComponent implements OnInit  {

  data:any;
  map:any;




  displayedColumns = [ 'chequeid', 'Name', 'Date', 'Amount','Status','Address'];
  dataSource: MatTableDataSource<UserData>;
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  /*highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }*/

  highlightedRows(row){
      //  if(hash)
//

      var a=row.chequeid



      console.log(a)
      if(this.map.has(a))
        this.map.delete(a)
      else
      this.map.set(a,row)

      }

  constructor(private http: HttpClient,private router: Router) {


    const users: UserData[] = [];
    //for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
//



    this.http.get('http://13.232.165.2:3000/cheque').subscribe(data => {
      console.log(data);
      this.data=data;
      this.data=this.data.data;

      for(var t=0;t<this.data.length;t++){
        users.push(this.data[t])

      }
      this.dataSource = new MatTableDataSource(users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  console.log("sdfsd "+this.dataSource)


    });
  }

      g(){

console.log(this.map)
var a=[]
var idmap='';
this.map.forEach((value, key) => {
	idmap+="'"+value.chequeid+"',"
var k=convertNumberToWords(value.Dollar)
var num=value.Dollar+""
if(num.includes(".")){
var dot=num .split(".")
var doting=""
if(dot[1].length==1)
doting=dot[1]+"0"
else
doting=dot[1]
var nu="";
nu=convertNumberToWords(dot[0])+" and "+(doting).toString()+"/100*****"
var astreik="";
var g1=5-dot[0].length

while(g1>0){

astreik+="*"


g1--;
}

  var mydate = new Date(value.Date);
   var t=mydate.getMonth()+1;

a.push({name:value.Name,date:value.Date,amount:astreik+value.Dollar,words:nu,addr:value.Address})

}
else{

  var g1=5-num.length
  console.log("astreik "+g1)

  var astreik=""
  while(g1>0){

  astreik+="*"


  g1--;
  }
  console.log("astreik "+g1)
  var mydate = new Date(value.Date);

   var t=mydate.getMonth()+1;
  a.push({name:value.Name,date:value.Date,amount:astreik+value.Dollar+".00",words:k,addr:value.Address})
}
});
var xdata=[];
	while(a.length>0){

	xdata.push({in:a.splice(0,3)})


	}
//	console.log(xdata)
a=xdata;
idmap = idmap.slice(0, -1); // "12345.0"


console.log(idmap)
  this.http.get('http://13.232.165.2:3000/statusupdates?a='+idmap).subscribe(data => {
      console.log(data);



    });



window.open("http://alektasolutions.com/purchase/print/cheques/ang?a="+JSON.stringify(a), "_blank");

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
  chequeid: string;
  Name: string;
  Date: string;
  Dollar: string;
  Address:string;
}

//
export function  convertNumberToWords(amount:string) {


   var words = new Array();
   words[0] = '';
   words[1] = 'One';
   words[2] = 'Two';
   words[3] = 'Three';
   words[4] = 'Four';
   words[5] = 'Five';
   words[6] = 'Six';
   words[7] = 'Seven';
   words[8] = 'Eight';
   words[9] = 'Nine';
   words[10] = 'Ten';
   words[11] = 'Eleven';
   words[12] = 'Twelve';
   words[13] = 'Thirteen';
   words[14] = 'Fourteen';
   words[15] = 'Fifteen';
   words[16] = 'Sixteen';
   words[17] = 'Seventeen';
   words[18] = 'Eighteen';
   words[19] = 'Nineteen';
   words[20] = 'Twenty';
   words[30] = 'Thirty';
   words[40] = 'Forty';
   words[50] = 'Fifty';
   words[60] = 'Sixty';
   words[70] = 'Seventy';
   words[80] = 'Eighty';
   words[90] = 'Ninety';
   amount = amount.toString();
   var atemp = amount.split(".");
   var number = atemp[0].split(",").join("");
   var n_length = number.length;
   var words_string = "";
   if (n_length <= 9) {
       var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
       var received_n_array = new Array();
       for (var i = 0; i < n_length; i++) {
           received_n_array[i] = number.substr(i, 1);
       }
       for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
           n_array[i] = received_n_array[j];
       }
       for (var i = 0, j = 1; i < 9; i++, j++) {
           if (i == 0 || i == 2 || i == 4 || i == 7) {
               if (n_array[i] == 1) {
                   n_array[j] = 10 + n_array[j];
                   n_array[i] = 0;
               }
           }
       }
       var value = 0;
       for (var i = 0; i < 9; i++) {
           if (i == 0 || i == 2 || i == 4 || i == 7) {
               value = n_array[i] * 10;
           } else {
               value = n_array[i];
           }
           if (value != 0) {
               words_string += words[value] + " ";
           }
           if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
               words_string += "Crores ";
           }
           if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
               words_string += "Lakhs ";
           }
           if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
               words_string += "Thousand ";
           }
           if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
               words_string += "Hundred and ";
           } else if (i == 6 && value != 0) {
               words_string += "Hundred ";
           }
       }
       words_string = words_string.split("  ").join(" ");
   }
   return words_string;
 }
