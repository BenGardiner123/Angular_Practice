import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `                 
    <!-- ////using the the backtick here allows us to spread the tempalte over multiple lines -->
    <h2>{{ title }}</h2>
    <ul>
    <!-- when we use a directive like ngFor that manipulates the DOM by adding or removing an elemt- need to use an asterisk to annotate it -->
        <li *ngFor="let course of courses">   
              {{ course }}
              <!-- "let course of courses" is like a for each. It basically defines course to hold one item of courses -->
        </li>                                       
    </ul>
    
    `
})
export class CoursesComponent{
    title = "List of courses"

    courses = ["course1", "course2", "course3"]

    //logic for an HTTp serive - if you link to the service here it will "tightly couple" the component to a live HTTP endpoint - this could fuck the unit testing later on
}