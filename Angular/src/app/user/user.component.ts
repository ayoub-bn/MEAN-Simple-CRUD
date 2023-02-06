import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { materialize } from 'rxjs';
import { User } from '../shared/user.model';

import { UserService } from '../shared/user.service';

declare var M:any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:  [UserService]
})
export class UserComponent {
  constructor(public userService:UserService) {}

  ngOnInit()
  {
    this.resetForm()
    this.getUserList()
  }


resetForm(form?:NgForm)
{
  if(form)
    form.reset();
    this.userService.selectedUser={
      _id:"",
      name:"",
      mail:"",
      age:undefined,
      number:undefined
    }
}


onSubmit(form : NgForm)
{
  if(form.value._id=="")
  {
this.userService.postUser(form.value).subscribe((res)=>{
  this.resetForm(form);
  this.getUserList()
  M.toast({html: 'Created Successfully!', classes: 'rounded'});
});
  }
  else
  {
    this.userService.updateUser(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.getUserList()
      M.toast({html: 'Updated Successfully!', classes: 'rounded'});
    });
  }
  
}


getUserList()
{
  this.userService.getUserList().subscribe((res)=>{
    this.userService.users=res as User[]
  })
}


onEdit(user:User)
{
  this.userService.selectedUser=user
}

onDelete(_id:string,form:NgForm)
{
  if(confirm('are you sure u want to delete this user ?')==true)
  {
  this.userService.deleteUser(_id).subscribe((res)=>{
    this.getUserList();
    this.resetForm(form)
    M.toast({html: 'Deleted Successfully!', classes: 'rounded'});
  })
  }
}


}
