import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `                 
    <!-- ////using the the backtick here allows us to spread the tempalte over multiple lines -->
    <h2>{{ title }}</h2>
      
    `
})
export class CoursesComponent{
    numAuthors = CoursesComponent
    title = "List of courses"

    courses;
    //logic for an HTTp serive - if you link to the service here it will "tightly couple" the component to a live HTTP endpoint - this could fuck the unit testing later on

    constructor (service: CoursesService){
       /// let service = new CoursesService; if we instatiated a new serive here like this - it tighly couples that to this for the future.. if anything changes down the track you would create multiple places to change the code. 
        this.courses = service.getCourses();
        ///instead we add the service as a paramater - when the component is created angular says this has a dependency called "courses Service"
        //it then creates an isntance of courses service an passes it to CoursesComponent - therefore ay changes to the service class will immeaditaly be uptaken.

    }
}