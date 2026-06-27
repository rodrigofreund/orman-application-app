import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { NewUser } from './users/new-user/new-user';

export const routes: Routes = [{
  path:'',
  component: Dashboard
},
{
  path:'users/new',
  component: NewUser
}];
