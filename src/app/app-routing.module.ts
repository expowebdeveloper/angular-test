import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module'; 
import { AuthGuard } from './helpers/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';


const authmodule = () => import('./auth/auth.module').then(x => x.AuthModule);
//const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] }, 
    { path: 'users', component: UsersComponent },
    { path: 'auth', loadChildren: authmodule },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }