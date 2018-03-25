import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ServiceEmployee:EmpService
  ) { }

  ngOnInit() {
    this.getSingleEmployee();
  }

  employee:Employee;

  getSingleEmployee(){
    var id= this.route.snapshot.params['id'];
    this.ServiceEmployee
    .getEmployee(id)
    .subscribe(employee=>{
      this.employee=employee[0];
    })
  };

  goBack(){
    this.router.navigate(['/home']);
  }

}
