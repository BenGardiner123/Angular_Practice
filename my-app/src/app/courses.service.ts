import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';

export class CoursesService {
    getCourses(){
        return ["course1", "course2","course3"];
    }
}