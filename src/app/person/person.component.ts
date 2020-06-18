import { PersonServiceService } from './../services/person-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private ps : PersonServiceService) { }
  public persons =  [];
  ngOnInit(): void {
    this.ps.getAllPersons().subscribe(
      prs => this.persons =prs
    )
  }


}
