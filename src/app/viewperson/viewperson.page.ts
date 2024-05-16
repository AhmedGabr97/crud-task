import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-viewperson',
  templateUrl: './viewperson.page.html',
  styleUrls: ['./viewperson.page.scss'],
})
export class ViewpersonPage implements OnInit {

  personID: any = 0;

  person : any = {}

  loading : boolean = true


  constructor( private route: ActivatedRoute , private personService : PersonsService , private router : Router ,) {}

  ngOnInit() {
    // Get the personID from the URL
    this.route.params.subscribe(params => {
      this.personID = params['personID']; // Assuming 'id' is the parameter name in the URL
    });

    // Get the person details
    this.personService.getPersonsById(this.personID).subscribe(res => {
      this.person = res
      this.loading = false
    })

  }


  deletePerson(personID : number) {
    this.personService.deletePerson(personID).subscribe(res => {
      setTimeout(() => {
          this.router.navigateByUrl('/home', { replaceUrl: true }).then(() => {
            window.location.reload();
          })
      }, 3000);

    })
  }


}
