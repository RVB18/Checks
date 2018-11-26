import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl = 'http://13.232.165.2:3000/cheque';

 constructor(private http: HttpClient) { }

 getUser(): Observable<User[]> {
   return this.http.get<User[]>(this.serviceUrl);
 }
}
