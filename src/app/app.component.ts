import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = ['Angular','React','Vue'];
  userModel = new User('john','john@gmail.com',8870543421,'Vue','Morning',true)
}
