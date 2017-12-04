import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const appRoutes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: '**', redirectTo: '/blogs' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
