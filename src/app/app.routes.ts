import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { NewUser } from './users/new-user/new-user';
import { ListUser } from './users/list-user/list-user';

export const routes: Routes = [{
  path:'',
  component: Dashboard
},
{
  path:'users/new',
  component: NewUser
},
{
  path:'users/list',
  component: ListUser
}];
