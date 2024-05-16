import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() name: string = 'Ahmed Gabr';
  @Input () personID: any = 0; 

  constructor( private router : Router , private personService : PersonsService) {}

  ngOnInit() {}

  deletePerson(personID : number) {
    this.personService.deletePerson(personID).subscribe(res => {
      window.location.reload();
    })
  }
}
