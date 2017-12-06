import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { BlogPostsComponent } from './components/blogs/blog-posts/blog-posts.component';
import { BlogPostComponent } from './components/blogs/blog-posts/blog-post/blog-post.component';
import { ArchiveListComponent } from './components/archives/archive-list/archive-list.component';
import { ArchiveItemComponent } from './components/archives/archive-list/archive-item/archive-item.component';
import { BlogService } from './services/blog.service';
import { AuthorService } from './services/author.service';
import { ArchiveService } from './services/archive.service';
import { BlogViewComponent } from './components/blogs/blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BlogsComponent,
    ArchivesComponent,
    BlogPostsComponent,
    BlogPostComponent,
    ArchiveListComponent,
    ArchiveItemComponent,
    BlogViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ArchiveService,
    BlogService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
