import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BycategoryComponent } from './bycategory/bycategory.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { CsvModule } from '@ctrl/ngx-csv';
import { DownloadSvgComponent } from './download-svg/download-svg.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    BycategoryComponent,
    DetailsComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    PostComponent,
    PostDetailsComponent,
    PostAddComponent,
    PostEditComponent,
    DownloadSvgComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    CsvModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
