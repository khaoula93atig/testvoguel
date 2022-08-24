import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {User} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor( private http: HttpClient ) { }

  public getUser(): Observable<any[]>{
    return this.http.get<any[]>(`${environment.URL}`);
  }

}
