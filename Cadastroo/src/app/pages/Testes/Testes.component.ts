import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './Testes.component.html',
  styleUrls: ['./Testes.component.css']
})
export class TestesComponent {

    nome: string;
    nomes: string[] = ['Gustavo','Vitor','Maria','Bruno','Inácio']

    appValor = 'aa';

    fotos: {id: number, arquivo: File}[] = [];

    adicionarFotos(): void {
        this.fotos.push({id:this.fotos.length + 1, arquivo: undefined})
    }

    mostrarFotos() {
        console.log(this.fotos)
    }

    isGustavo(): boolean    {
            return  this.nome === 'Gustavo';
    }

    isMaria(): boolean    {
            return this.nome === 'Maria'; 
    }

    isBruno(): boolean    {
        return this.nome === 'Bruno'; 
    }

    isVitor(): boolean    {
        return this.nome === 'Vitor'; 
    }

    isInacio(): boolean    {
        return this.nome === 'Inácio'; 
    }
    
    escolherCor():string {
        if (this.isGustavo()){
            return 'red'
        } else if (this.isBruno()) {
            return 'blue'
        } else if (this.isVitor()) {
            return 'green'
        } else if (this.isMaria()) {
            return 'yellow'
        } else if (this.isInacio()) {
            return 'orange'
        } 
    }

}