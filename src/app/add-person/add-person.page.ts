import { PersonsService } from 'src/app/services/persons.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.page.html',
  styleUrls: ['./add-person.page.scss'],
})
export class AddPersonPage implements OnInit {

  constructor(private personsService : PersonsService , private router : Router) { }

  ngOnInit() {}

  // take values from the inputs

  name? : string;
  age? : number ;
  nationalityID? : number;
  birthDate? : string ;


  addPerson() {
   
  if(!this.name || !this.age || !this.nationalityID || !this.birthDate) {
    return;
  }else{

  const person = {
    name: this.name,
    age: this.age,
    nationalityID: this.nationalityID,
    birthDate: this.birthDate
  };

  this.personsService.addPerson(person).subscribe(res => {
    console.log(res);
    setTimeout(() => {
      this.router.navigateByUrl('/home', { replaceUrl: true }).then(() => {
        window.location.reload();
      });
    })
  });
}
}


}
