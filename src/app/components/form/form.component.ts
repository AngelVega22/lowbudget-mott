import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public database: Database) { }

  ngOnInit(): void {
  }
  registerLead(value: any) {
    if (value.name != '' || value.email != '' || value.phone != '') {
      set(ref(this.database, 'leads/' + value.phone), {
        name: value.name,
        email: value.email,
        phone: value.phone,
        message: value.message
      });
      alert('Registro correcto')
    } else {
      alert('Debe ingresar datos')
    }
  }
}
