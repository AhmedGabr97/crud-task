import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {  

  personID : number = 0;

  personData : any = {};

  constructor( private route: ActivatedRoute , private personService : PersonsService , private router : Router ,) {}


  ngOnInit() {
    // Get the personID from the URL
    this.route.params.subscribe(params => {
      this.personID = params['personID']; // Assuming 'id' is the parameter name in the URL
    });

    // Get the person details
    this.personService.getPersonsById(this.personID).subscribe(res => {
      this.personData = res;
    })
  }

  editPerson() {
    this.personService.editPerson(this.personData).subscribe(res => {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      })
    })
  }

}
