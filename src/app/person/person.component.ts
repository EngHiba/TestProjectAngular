import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
@Input() person: PersonComponent ;
   FirstName: string;
   LastName: string;
   MiddelName: string;
   BirthDate: Date = new Date();
   IdentityNo: string;
   NationaityId: number;
   GenderId: number;
  nationltyList: any;
  genderList: any;

  constructor (http: HttpClient) {
    http.get('http://localhost:3344/api/Nationality').subscribe( respose => {
      console.log(respose);
      this.nationltyList = respose;
    });
    this.genderList = [{Title : 'Female' , Id : 1}, {Title : 'Male' , Id : 0}];
  }


  ngOnInit() {

    this.FirstName = this.person.FirstName;
    this.LastName = this.person.LastName;
    this.MiddelName = this.person.MiddelName;
    this.BirthDate = this.person.BirthDate;
    this.GenderId = this.person.GenderId;
    this.NationaityId = this.person.NationaityId;

  }



  onGenderSelectionChange(GenderId: number)
  {
    this.GenderId = GenderId;
  }
}

