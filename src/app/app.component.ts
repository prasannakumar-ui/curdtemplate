import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from './service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fdata;
  @ViewChild('rform',null)rform:NgForm
  constructor(private s:ServiceService){}
  ngOnInit(){
this.getData()
  }
  getData(){
    this.s.ge().subscribe(res=>this.fdata=res)
  }
  su(x){
    this.s.po(x).subscribe(res=>this.getData());
    this.rform.reset()
  }
  del(data){
    this.s.de(data).subscribe(res=>this.getData())
    }
  up(x){
    this.s.pu(x).subscribe(res=>this.getData());
    this.rform.reset()
    }
    edit(data){
      this.rform.setValue({ 
        id:data.id,
        fname:data.fname,
        lname:data.lname})
      }
}
