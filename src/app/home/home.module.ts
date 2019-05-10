import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {ApiService} from '../services/api.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [ApiService],
  declarations: [HomeComponent]
})
export class HomeModule { }
