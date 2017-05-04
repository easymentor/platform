import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'consultores-proposta-cmp',
  moduleId: module.id,
  templateUrl: 'consultores-proposta.component.html'
})

export class ConsultoresPropostaComponent implements OnInit {

  private routeParamSubscribe;
  private consultor;
  private proposta:any = {};
  private enviado = false;

  constructor(private route:ActivatedRoute, private http:Http) {

  }

  ngOnInit() {
    this.routeParamSubscribe = this.route.params.subscribe(params => {
      this.http.get(`/api/entity/consultores/${params['consultorId']}`).toPromise().then(res => {
        this.consultor = res.json();
      }).catch(reason => {
        console.error(reason);
      });
    });
  }

  ngOnDestroy() {
    this.routeParamSubscribe.unsubscribe();
  }

  onSubmit() {
    this.http.post(`/api/entity/propostas`, {
      consultorId: this.consultor._id,
      data: new Date(),
      projeto: this.proposta.projeto,
      necessidade: this.proposta.necessidade,
      status: 'Aguardando aprovação'
    }).toPromise().then(res => {
       console.log('Sucesso');
       this.enviado = true;
    }).catch(reason => {
      console.error(reason);
    });
  }
}
