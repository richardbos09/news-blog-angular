import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlogViewComponent } from './components/blogs/blog-view/blog-view.component';
import { BlogPostsComponent } from './components/blogs/blog-posts/blog-posts.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent, children: [
    { path: '', component: BlogPostsComponent },
    { path: ':id', component: BlogViewComponent },
  ] },
  { path: '**', redirectTo: '/blogs' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
