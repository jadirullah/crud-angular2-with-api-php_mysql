import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ServiceEmployee:EmpService
  ) { }

  ngOnInit() {
    this.getSingleEmployee();
  }

  model = new Employee();
  id= this.route.snapshot.params['id'];

  getSingleEmployee(){
    this.ServiceEmployee
    .getEmployee(this.id)
    .subscribe(employee=>{
      this.model=employee[0];
    })
  };

  updateEmployee(){
    this.ServiceEmployee
    .updateEmployee(this.model)
    .subscribe(()=>this.goBack());
  }

  goBack(){
    this.router.navigate(['/home']);
  }

}
