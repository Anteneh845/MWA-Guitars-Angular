import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuitarListComponent} from "./guitar-list/guitar-list.component";
import {GuitarDetailComponent} from "./guitar-detail/guitar-detail.component";
import {AddGuitarComponent} from "./add-guitar/add-guitar.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {EditGuitarComponent} from "./edit-guitar/edit-guitar.component";
import {UserGuard} from "./user.guard";

export const routes: Routes = [
  {
    path: "",
    component: GuitarListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "guitars",
    children: [
      {
        path: '',
        component: GuitarListComponent
      },
      {
        path: 'new',
        component: AddGuitarComponent,
        canActivate: [UserGuard]
      },
      {
        path: ":guitarId",
        component: GuitarDetailComponent,
        pathMatch: 'full'
      },
      {
        path: ":guitarId/edit",
        component: EditGuitarComponent,
        pathMatch: 'full',
        canActivate: [UserGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
