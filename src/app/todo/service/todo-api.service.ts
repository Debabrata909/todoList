import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private $http: HttpClient) { }
  getPostData(): Observable<any> {
    return this.$http.get<any>(this.apiUrl);
  }
}
