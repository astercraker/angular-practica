import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './layout/create/create.component';
import { ListarComponent } from './layout/listar/listar.component';
import { LoginComponent } from './layout/login/login.component';
import { UpdateComponent } from './layout/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: ListarComponent,
  },
  {
    path: 'dashboard/create',
    component: CreateComponent,
  },
  {
    path: 'dashboard/update/:id/:tarjeta',
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
