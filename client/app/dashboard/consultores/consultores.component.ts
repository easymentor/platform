import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'consultores-cmp',
  moduleId: module.id,
  templateUrl: 'consultores.component.html'
})

export class ConsultoresComponent implements OnInit {

  private consultores:any = {};

  constructor(private http:Http) {

  }

  ngOnInit() {
    this.http.get("/api/entity/consultores").toPromise().then(res => {
      this.consultores = {};
      res.json().forEach(consultor => {
        if (!this.consultores.hasOwnProperty(consultor.data.tipo)) {
          this.consultores[consultor.data.tipo] = [];
        }

        this.consultores[consultor.data.tipo].push(consultor);
      });

      console.log(this.consultores);
    }).catch(reason => {
      console.error(reason);
    });
  }
}
