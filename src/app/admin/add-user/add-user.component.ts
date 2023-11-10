import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlTree } from '@angular/router';
import { CanDeactivateComponent } from 'src/app/model/guard-component.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements CanDeactivateComponent {
  name = '';
  age = '';

  @ViewChild('form')
  form!: NgForm;

  onSubmit(): void {
    console.log(this.form.value);
    this.form.resetForm();
  }

  canLeave(): boolean | UrlTree {
    if (this.form.dirty) {
      return false;
    }

    return true;
  }
}
