import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    NavbarComponent,
    CreateBlogComponent,
    LoginComponent,
    AuthComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
