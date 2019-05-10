import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userList: User[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.users().then((res: any) => {
      console.log(res);
      if (res.data != null && res.data.length) {
        res.data.forEach((user: User, index: number) => {
          console.log('user: -> ', user);
          this.userList.push(new User(user));
        });
        console.log('userList: -> ', this.userList);
      }
    }).catch(err => {
      console.log(err);
    });
  }

}
