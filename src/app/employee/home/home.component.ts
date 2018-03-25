import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private ServiceEmployee:EmpService,
    private router: Router
  ){}

  employees:any;

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.ServiceEmployee
    .getEmployees()
    .subscribe(employees=>{
      this.employees = employees;
    })
  }




  deleteEmployee(id){

    alert("Halo "+id);
    this.ServiceEmployee
    .deleteEmployee(id)
    .subscribe(()=>{
      this.getEmployees();
    })
  }
  

}
