import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Discente } from 'src/app/models/discente';
import { DiscenteService } from 'src/app/services/discente.service';

@Component({
  selector: 'app-listar-discentes',
  templateUrl: './listar-discentes.component.html',
  styleUrls: ['./listar-discentes.component.scss']
})
export class ListarDiscentesComponent implements OnInit {

  discentes: Discente[];

  constructor(
    private discenteService: DiscenteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDiscentes()
  }

  private getDiscentes(){
    this.discenteService.getDiscentesList().subscribe(data=> {
      console.log(data);
      console.log(Object.keys(data));
      console.log(data);
      this.discentes = data;
    })
  }
}
