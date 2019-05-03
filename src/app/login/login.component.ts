import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private api: ApiService) {
    console.log('api: ', api);
  }

  ngOnInit() {
  }

  public login(form: NgForm): boolean {
    console.log('login ', form);
    console.log('value: ', form.value);
    this.api.login(form.value).then((res: Response) => {
      console.log('res: ', res);
    }).catch((error) => {
      console.error('error: ', error);
    });
    return false;
  }
}
