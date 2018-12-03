import { Component,OnInit } from '@angular/core';
//import { UserService } from './services/user.service';
//import { User } from './models/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
mat:any;
data2:any;
  constructor(private http: HttpClient) {}
  ngOnInit() {

            this.http.get('http://13.232.165.2:3000/vendornames').subscribe(res => {
              //console.log(data);

    this.mat=res;
    this.mat=this.mat.data
    console.log(this.mat)

          //    alert("Succesfully Saved")
            //  window.open('/cheque')

            });



  }
  onSubmit(f){
console.log(f.value)

    this.http.post('http://alektasolutions.com/connected/config/save/ang',f.value).subscribe(data => {
      //console.log(data);
      console.log(data)
      alert("Succesfully Saved")
    //  window.open('/cheque')

    });//
}
onvendorcreate(data){

  console.log(data.value)
var date=new Date(data.value.Date)
var t=date.getMonth()+1
var ne=t+"/"+date.getDate()+"/"+date.getFullYear();
var f={Name:data.value.Name,Date:ne,Dollar:data.value.Dollar,Address:data.value.Address}
console.log(f)
  this.http.post('http://13.232.165.2:3000/singlecheque',f).subscribe(data => {
    ///console.log(data);
    console.log(data)
    this.data2=data
    if(this.data2.message=="Success"){
    alert("Succesfully Saved")
    window.location.reload();
}
    else
    alert("Spmething Went wrong..")

  //  window.open('/cheque')

  });
}


}


  /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
    // OLD METHOD:
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }*/
