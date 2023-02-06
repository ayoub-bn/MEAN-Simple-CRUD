import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser!: User;
  users!:User[]  ;

  readonly baseUrl = 'http://127.0.0.1:3000/users';


  constructor(private http:HttpClient) { }


  postUser(user:User)
  {
    return this.http.post(this.baseUrl,user)
  }

  getUserList()
  {
    return this.http.get(this.baseUrl)
  }

  updateUser(user:User)
  {
    return this.http.put(this.baseUrl + `/${user._id}`,user)
  }

  deleteUser(_id:string)
  {
    return this.http.delete(this.baseUrl + `/${_id}`)
  }
}
