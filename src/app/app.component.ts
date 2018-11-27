import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cheque';
constructor(private http: HttpClient){

}
  onSubmit(f){


    this.http.post('http://alektasolutions.com/connected/config/save/ang',f.value).subscribe(data => {
      //console.log(data);
      console.log(data)
      alert("Succesfully Saved")
    //  window.open('/cheque')

    });
}
}
