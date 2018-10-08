import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as myGlobals from '../globals';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {


  form = new FormGroup({
    FirstName: new FormControl('',Validators.required),
    LastName: new FormControl('',Validators.required),
    MiddleName: new FormControl('',Validators.required),
    IdentityNo: new FormControl('',Validators.required),
    BirthDate: new FormControl('',Validators.required),
    Nationality: new FormControl('',Validators.required),
    Department: new FormControl('',Validators.required),
    Year: new FormControl('',Validators.required),
    Address: new FormControl('',Validators.required),
    Mobile: new FormControl('',Validators.required),
    Phone: new FormControl('',Validators.required),
    Email: new FormControl('',[Validators.required , Validators.email])
  })



  Person : person;
   Id: number;
   YearId: number;
   CityId: number;
   Address: string;
   Mobile: string;
   Phone: string;
   Email: string;
  DepartmentId: number;
  yearsList;
  departmentList;

  constructor(private route: ActivatedRoute , private http: HttpClient , private router : Router) {

    this.Person = new person(this.http);
    http.get(myGlobals.path+'Department').subscribe( respose => {
      console.log(respose);
      this.departmentList = respose;
    });
  }


  submit()
  {
   // let toSend =  new StudentComponent(this.route,this.http);

    if(this.Id == -1)
    {
      let toSend = {
        Address : this.Address,
        Email : this.Email,
        Phone: this.Phone,
        Mobile: this.Mobile,
        YearId: this.YearId,
        PersonId : this.Person.Id,
        CityId: this.CityId,
        Person : this.Person
      }
      console.log(this.Email);
      this.http.post(myGlobals.path+'Student',toSend)
      .subscribe(
        res => {
          console.log('RESPONCE   '+ res);
          alert("Done!");
          this.router.navigateByUrl('');

        },
        err => {
          console.log("Error occured");
        }
      );
    }
    else
    {
      let toSend = {
        Id : this.Id,
        Address : this.Address,
        Email : this.Email,
        Phone: this.Phone,
        Mobile: this.Mobile,
        YearId: this.YearId,
        PersonId : this.Person.Id,
        CityId: this.CityId,
        Person : this.Person
      }
      this.http.put(myGlobals.path+'Student/'+this.Id ,toSend)
        .subscribe(
          res => {
            console.log('RESPONCE   '+ res);
            alert("Done!")
            this.router.navigateByUrl('');
          },
          err => {
            console.log("Error occured");
          }
        );
    }
  }

  updateYearList()
  {
    this.http.get(myGlobals.path+'StudyYear/' + this.DepartmentId).subscribe( respose => {
      this.yearsList = respose;
    });

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.Id = +params.get('id');
    });

    if(this.Id != -1)
      this.http.get(myGlobals.path+'Student/' + this.Id).subscribe(data => {

        let respose = <StudentComponent> data;

        this.Person.Id = respose.Person.Id;
        this.Person.FirstName = respose.Person.FirstName;
        this.Person.LastName = respose.Person.LastName;
        this.Person.MiddelName = respose.Person.MiddelName;
        this.Person.BirthDate = respose.Person.BirthDate;
        this.Person.GenderId = respose.Person.GenderId;
        this.Person.IdentityNo = respose.Person.IdentityNo;
        this.Person.NationalityId = respose.Person.NationalityId;

        this.DepartmentId= respose.DepartmentId;
        this.updateYearList();
        this.YearId = respose.YearId;
        this.Email = respose.Email;
        this.Address = respose.Address;
        this.Mobile = respose.Mobile;
        this.Phone = respose.Phone;
        this.CityId = respose.CityId;

        console.log(this.Person);
      });

      }

  get _Department()
  {
    return this.form.get('Department');
  }

  get _Year()
  {
    return this.form.get('Year');
  }


  get _Mobile()
  {
    return this.form.get('Mobile');
  }


  get _Phone()
  {
    return this.form.get('Phone');
  }

  get _Email()
  {
    return this.form.get('Email');
  }


  get _Address()
  {
    return this.form.get('Address');
  }


  get _FirstName()
  {
    return this.form.get('FirstName');
  }

  get _LastName()
  {
    return this.form.get('LastName');
  }

  get _MiddleName()
  {
    return this.form.get('MiddleName');
  }

  get _BirthDate()
  {
    return this.form.get('BirthDate');
  }

  get _IdentityNo()
  {
    return this.form.get('IdentityNo');
  }

  get _Nationality()
  {
    return this.form.get('Nationality');
  }



}

class person
{
  public  Id : number;
  public FirstName: string;
  public LastName: string;
  public MiddelName: string;
  public BirthDate: Date = new Date();
  public IdentityNo: string;
  public NationalityId: number;
  public GenderId: number;
  public nationltyList: any;
  public genderList: any;

  constructor (http: HttpClient) {

    http.get(myGlobals.path+'Nationality').subscribe( respose => {
      console.log(respose);
      this.nationltyList = respose;
    });
    this.genderList = [{Title : 'Female' , Id : 1}, {Title : 'Male' , Id : 0}];
  }

  onGenderSelectionChange(GenderId: number)
  {
    this.GenderId = GenderId;
  }
}

