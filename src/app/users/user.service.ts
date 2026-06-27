import { inject, Injectable } from '@angular/core';
import { CreateUserViewModel } from './new-user/create-user-view.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private httpClient = inject(HttpClient);
  
  createUser(model : CreateUserViewModel) {
    this.httpClient.post('http://localhost:8080/user', model)
      .subscribe(() => {
        console.log('done');
      });
  }
}
