import { Component } from '@angular/core';
import {User} from "./model/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {ServService} from "./serv.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'test';
  //post = [];
  user:User[]=[];

  constructor(private service:ServService) {
  }

  ngOnInit(){
    this.service.getUser().subscribe(data=>{this.user=data})
  }


  /*@ts-ignore
  constructor( private http: HttpClient ){
    this.http.get<any[]>(`${environment.URL}`).subscribe(data=>{
      this.post.push();
    })
  }*/

}
