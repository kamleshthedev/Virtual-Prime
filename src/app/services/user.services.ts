import { User } from 'src/app/models/Users';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';



@Injectable()
  export class UserServices{
    users : User[];
    data: Observable< Array<any>>;

    constructor() {
      this.users = [
        {
          firstName: 'Kamlesh',
          lastName: 'Prajapat',
          email: 'Kamlesh@gmail.com',
          regDate: new Date('10/08/2018 11:30 AM'),
          hide: true
        },
        {
          firstName: 'Vinay',
          lastName: 'Maurya',
          email: 'Vinay@gmail.com',
          regDate: new Date('12/09/2018 10:40 AM'),
          hide: true
        },
        {
          firstName: 'Ashley',
          lastName: 'Pow',
          email: 'Ashley@gmail.com',
          regDate: new Date('05/09/2018 9:20 AM'),
          hide: true
          }

      ];
     }

    getUsers(): User[]{
      return this.users;
    }
  }

