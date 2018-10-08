import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { PersonComponent } from './person/person.component';
import { StudantsTableComponent } from './studants-table/studants-table.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'Student/:id',
    component: StudentComponent,
  },
  {
    path: '',
    component: StudantsTableComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PersonComponent,
    StudantsTableComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
