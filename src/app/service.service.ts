import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private h:HttpClient) { }
  ge(){
    return this.h.get('http://localhost:3000/posts')
  }
  po(a){
    return this.h.post('http://localhost:3000/posts',a)
  }
  de(a){
    return this.h.delete('http://localhost:3000/posts/'+a.id)

  }
  pu(a){
    return this.h.put('http://localhost:3000/posts/'+a.id,a)
  }
}
