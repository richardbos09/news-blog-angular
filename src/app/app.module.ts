import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BlogViewComponent } from './components/blogs/blog-view/blog-view.component';
import { AuthorServiceBase } from './services/author.service.base';
import { MDBAuthorService } from './services/implementations/mdb.author.service';
import { BlogServiceBase } from './services/blog.service.base';
import { MDBBlogService } from './services/implementations/mdb.blog.service';
import { ArchiveServiceBase } from './services/archive.service.base';
import { MDBArchiveService } from './services/implementations/mdb.archive.service';
import { BlogSearchComponent } from './components/blogs/blog-search/blog-search.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { BlogFormComponent } from './components/blogs/blog-form/blog-form.component';
import { NGDBAuthorService } from './services/implementations/ngdb.author.service';

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
    BlogSearchComponent,
    DropdownDirective,
    BlogFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    { provide: ArchiveServiceBase, useClass: MDBArchiveService },
    { provide: BlogServiceBase, useClass: MDBBlogService },
    { provide: AuthorServiceBase, useClass: MDBAuthorService },
    // { provide: AuthorServiceBase, useClass: NGDBAuthorService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
