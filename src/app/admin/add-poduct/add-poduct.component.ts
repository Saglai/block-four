import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlTree } from '@angular/router';

@Component({
  selector: 'app-add-poduct',
  templateUrl: './add-poduct.component.html',
  styleUrls: ['./add-poduct.component.css']
})
export class AddPoductComponent {
  name = '';
  price = '';

  @ViewChild('form')
  form!: NgForm;

  onSubmit(): void {
    console.log(this.form.value)
    this.form.resetForm();
  }

  canLeave(): boolean | UrlTree {
    if (this.form.dirty) {
      return false;
    }

    return true;
  }
}
