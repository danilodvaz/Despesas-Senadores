import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepesaSenadorComponent } from './depesa-senador/depesa-senador.component';
import { ListaSenadorComponent } from './lista-senador/lista-senador.component';

const routes: Routes = [
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
  { path: 'senadores', component: ListaSenadorComponent },
  { path: 'senadores/:id', component: DepesaSenadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
