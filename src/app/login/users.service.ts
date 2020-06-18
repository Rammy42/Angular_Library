import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private messageSource = new BehaviorSubject('No User Loged in!!!');
  currentMessage = this.messageSource.asObservable();
  setLogedInUser(userName : string)
 {
  this.messageSource.next(userName)
 }

}
