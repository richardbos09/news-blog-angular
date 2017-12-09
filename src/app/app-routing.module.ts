import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlogViewComponent } from './components/blogs/blog-view/blog-view.component';
import { BlogPostsComponent } from './components/blogs/blog-posts/blog-posts.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { ArchiveListComponent } from './components/archives/archive-list/archive-list.component';
import { BlogFormComponent } from './components/blogs/blog-form/blog-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent, children: [
    { path: '', component: BlogPostsComponent },
    { path: 'form', component: BlogFormComponent },
    { path: ':id', component: BlogViewComponent },
  ] },
  { path: 'archives', component: ArchivesComponent, children: [
    { path: '', component: ArchiveListComponent },
    { path: ':id', component: BlogPostsComponent },
  ] },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'blogs', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
