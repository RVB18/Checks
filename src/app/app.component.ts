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

  ngOnInit() {

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
