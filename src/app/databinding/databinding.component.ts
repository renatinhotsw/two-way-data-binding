import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  urlImagem = 'http://loiane.training.com';

  nome:string = 'abc';

  nomeDoCurso:string = 'Angular';

  pessoa: any = {
    nome:'def',
    idade:25,

    endereco:{
      rua:'jose da silva barros',
      bairro:'centro'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
