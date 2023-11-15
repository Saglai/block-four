import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private URL = 'https://jsonplaceholder.typicode.com/users'
  private isLoggedIn = true;

  constructor(private http: HttpClient) { }

  LoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getPostList(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  getPostById(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/${id}`);
  }

  addPost() {
    
  }
}
