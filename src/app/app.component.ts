import { Component } from '@angular/core';
//import { UserService } from './services/user.service';
//import { User } from './models/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  onSubmit(f){

//
    this.http.post('http://alektasolutions.com/connected/config/save/ang',f.value).subscribe(data => {
      //console.log(data);
      console.log(data)
      alert("Succesfully Saved")
    //  window.open('/cheque')

    });
}
onvendorcreate(data){

  console.log(data.value)

  this.http.post('http://13.232.165.2:3000/singlecheque',data.value).subscribe(data => {
    //console.log(data);
    console.log(data)
    if(data.message=="Success"){
    alert("Succesfully Saved")
    window.location.reload();
}
    else
    alert("Spmething Went wrong..")

  //  window.open('/cheque')

  });
}
  ngOnInit() {

            this.http.get('http://13.232.165.2:3000/vendornames').subscribe(data => {
              //console.log(data);
          var datas=data.data;
          //console.log(this.datas)
     var w=[]
    for(var a=0;a<datas.length;a++){
      if(datas[a].Name){
    w.push({Name:datas[a].Name})
    }

    }
    this.mat=w
    console.log(this.mat)

          //    alert("Succesfully Saved")
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
