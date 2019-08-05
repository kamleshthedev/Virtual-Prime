import { UserServices } from '../../services/user.services';
import { User } from './../../models/Users';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const tvUrl: string = 'https://api.themoviedb.org/3/tv/popular?api_key=e6171b13d4159aa39793cc0b447bbb93&language=en-US';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tvList: any;
  // user : User = {
  //   firstName: '',
  //   lastName: '',
  //   email: ''
  // }


  users : User[]
  enableAdd: boolean = false
  showUserForm: boolean = false
  @ViewChild('userForm',null) form: any

  constructor(private http: HttpClient ) { }

  ngOnInit() {

    this.http.get(tvUrl).subscribe( (data:any)=>{
      console.log(data)
      this.tvList = data.results;
    })


    // this.users = this.userServices.getUsers();

  }
  // toggleHide(user: User){
  //   user.hide = !user.hide;
  // }
  // onSubmit({value, valid}:{value: User, valid: boolean}){
  //   if(!valid){

  //   }else{
  //     value.regDate = new Date();
  //     this.users.unshift(value);
  //     this.form.reset();
  //   }

  // }

}
