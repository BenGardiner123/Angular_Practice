import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent, 
    CoursesComponent, 
    CourseComponent, AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    AuthorsService
    //When you register a dependency as a provide in a module as we have done here, Angualr creates a single instance of this class for the entire module.
    //so if we had 100 components and 50 of them need this CoursesService - still only one instance serves them all. (Singleton Pattern)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
