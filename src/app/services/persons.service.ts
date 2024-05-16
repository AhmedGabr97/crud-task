import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor( private http : HttpClient) { }

  getPersons() {
    return this.http.get('http://mohagado-001-site1.itempurl.com/Person/getAllPersons');
  }

  getPersonsById(personID : number) {
    return this.http.get('http://mohagado-001-site1.itempurl.com/Person/getPersonById/?personID=' + personID);
  }


  deletePerson(personID : number) {
    return this.http.get('http://mohagado-001-site1.itempurl.com/Person/deletePerson/?personID=' + personID);
  }

  addPerson(person : any) {
    const url = 'http://mohagado-001-site1.itempurl.com/Person/addPerson';
    return this.http.post( url , person);
  }

  editPerson(person : any) {
    const url = 'http://mohagado-001-site1.itempurl.com/Person/editPerson';
    return this.http.post( url , person);
  }
}
