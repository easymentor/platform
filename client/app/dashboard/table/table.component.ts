import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'table-cmp',
  moduleId: module.id,
  templateUrl: 'table.component.html'
})

export class TableComponent {

  private propostas:Array<any> = [];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get("/api/entity/propostas").toPromise().then(res => {
      this.propostas = res.json();

      this.propostas.forEach(proposta => {
        this.http.get(`/api/entity/consultores/${proposta.data.consultorId}`).toPromise().then(res => {
          proposta.consultor = res.json();
        }).catch(reason => {
          console.error(reason);
        });
      });

      console.log(this.propostas);
    }).catch(reason => {
      console.error(reason);
    });
  }

}
