import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public database: Database, public router: Router) { }

  ngOnInit(): void {
  }

  makeid(value: number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  registerLead(value: any) {
    if (value.name != '' || value.email != '' || value.phone != '') {
      set(ref(this.database, 'leads/' + this.makeid(value.phone)), {
        name: value.name,
        email: value.email,
        phone: value.phone,
        message: value.message
      });
      alert('Registro correcto')
      this.router.navigate(['/'])

    } else {
      alert('Debe ingresar datos')
    }
  }
}
