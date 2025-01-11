import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../classes/biz/hive-user';


@Injectable({
  providedIn: 'root'
})
export class UserMemoryService {
  user!: User;
  userEmitter = new EventEmitter<User>();
  constructor() { }

  
  setUser(user: User) {
    this.user = user;
    this.userEmitter.emit(user);
  }
}




