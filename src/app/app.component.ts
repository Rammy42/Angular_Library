import { UsersService } from './login/users.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message:String;
  constructor(private data: UsersService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
