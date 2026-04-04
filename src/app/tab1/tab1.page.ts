import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class Tab1Page {

  filaSP: string[] = [];
  filaSG: string[] = [];
  filaSE: string[] = [];

  ultimas: string[] = [];

  contadorSP = 1;
  contadorSG = 1;
  contadorSE = 1;

  gerarSP() {
    this.filaSP.push('SP' + this.contadorSP++);
  }

  gerarSG() {
    this.filaSG.push('SG' + this.contadorSG++);
  }

  gerarSE() {
    this.filaSE.push('SE' + this.contadorSE++);
  }

  chamar() {
    let senha: string | null = null;

    if (this.filaSP.length > 0) {
      senha = this.filaSP.shift()!;
    } else if (this.filaSE.length > 0) {
      senha = this.filaSE.shift()!;
    } else if (this.filaSG.length > 0) {
      senha = this.filaSG.shift()!;
    }

    if (senha) {
      this.ultimas.unshift(senha);
      if (this.ultimas.length > 5) {
        this.ultimas.pop();
      }
    }
  }
}