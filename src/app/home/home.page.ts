import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  persons : any = []
  filteredPersons: any[] = [];
  searchQuery: string = '';
  searchBarShow : boolean = false;


  userName = 'Appy Innovate';
  searchText: string = '';

  
  ngOnInit(){
    this.getAllPersons()
    this.filteredPersons = this.persons;

  }

  getFilteredPersons(event : any) {
    this.filteredPersons = this.persons.filter((person : any) => {
      return person.name.toLowerCase().includes(this.searchText.toLowerCase());
    })
  }

  constructor(private personsService : PersonsService  ) {}
  

  getAllPersons() {
    this.personsService.getPersons().subscribe(res => {
      this.persons = res;
      this.filteredPersons = this.persons
    })
  }


  handleSearch(searchText: string) {
    this.searchText = searchText;
  }

  addPerson(){
    console.log('addPerson button clicked');
  }

  searchInput() {
    this.searchBarShow = !this.searchBarShow;
    if (!this.searchBarShow) {
      // If search bar is closed, reset search query and show all persons
      this.searchQuery = '';
      this.filteredPersons = this.persons;
    }
  }

  applyFilter() {
    if (this.searchQuery.trim() !== '') {
      // If search query is not empty, filter persons
      this.filteredPersons = this.persons.filter((person : any) =>
        person.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // If search query is empty, show all persons
      this.filteredPersons = this.persons;
    }
  }

  resetSearch() {
    this.searchQuery = '';
    this.filteredPersons = [...this.persons]; // Reset filteredPersons to include all persons
  }
}
