import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private ServiceEmployee:EmpService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  model = new Employee();

  addEmployee(){
    this.ServiceEmployee
    .addEmployee(this.model)
    .subscribe(()=>this.goBack());
  }

  goBack(){
    this.router.navigate(['/home']);
  }

}
