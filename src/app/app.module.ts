import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componenets/header/header.component';
import { AddTodoComponent } from './componenets/add-todo/add-todo.component';
import { TodosComponent } from './componenets/todos/todos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoStatesService } from './services/todo-states.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './componenets/login/login.component';
import { HomeComponent } from './componenets/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    TodosComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [TodoStatesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
