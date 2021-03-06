import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  public employees: Employee[];
  constructor(private employeeService: EmployeeService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

  // public onOpenModal(employee: Employee, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   // changed the type from submit to button
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   // if (mode === 'add') {
  //   //   button.setAttribute('data-target', '#addEmployeeModal');
  //   // }
  //   if (mode === 'edit') {
  //     button.setAttribute('data-target', '#updateEmployeeModal');
  //   }
  //   // if (mode === 'delete') {
  //   //   button.setAttribute('data-target', '#deleteEmployeeModal');
  //   // }
  //   container.appendChild(button);
  //   button.click();
  // }

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      console.log('Hello');
      // this.editEmployee = employee;
      button.setAttribute('data-target', 'updateEmployeeModal');
    }
    if (mode === 'delete') {
      // this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

}
