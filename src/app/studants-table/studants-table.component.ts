import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import * as myGlobals from  '../globals'

@Component({
  selector: 'app-studants-table',
  templateUrl: './studants-table.component.html',
  styleUrls: ['./studants-table.component.css']
})
export class StudantsTableComponent implements OnInit {

  studentsList: any;
  selectedRowId = -1;
  constructor(private http: HttpClient ,private route : ActivatedRoute, private router : Router) {

    http.get(myGlobals.path +'Student').subscribe(response => {
      this.studentsList =  response;
      console.log(this.studentsList[0]);
    }, error => {
      console.log(error);
    });
  }
  deleteStudent(Id: number)
  {
    this.http.delete(myGlobals.path+'Student/'+ Id).subscribe(response => {
      console.log(":)");
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
  setRowId(Id: number)
  {
    this.selectedRowId = Id;
  }

  ngOnInit() {
  }

}
