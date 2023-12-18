import { Component } from '@angular/core';
import party from 'party-js';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css',
})
export class TableroComponent {
  tablero: string[] = ['', '', '', '', '', '', '', '', ''];
  turnos: string[] = ['❌', '⚪'];
  turno: boolean = true; //true : ❌ y false : ⚪
  resultado: string = '';
  cont: number = 0;
  cont2: number = 0;
  combos: any = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  jugarTurno(indice: number, event: any) {
    if (
      this.revisarCasilla(indice) &&
      this.hayGanador(this.verGanador(this.tablero), event)
    ) {
      if (this.cont > 1) this.cont = 0;
      this.tablero[indice] = this.turnos[this.cont];
      this.cont++;
      this.cont2++;
      this.turno = !this.turno;
      this.resultado = '';
      this.terminar(this.verGanador(this.tablero), event);
    }
  }

  verGanador(tab: string[]) {
    for (let combo of this.combos) {
      const [a, b, c] = combo;
      if (tab[a] && tab[a] == tab[b] && tab[a] == tab[c]) {
        return tab[a];
      }
    }
    return '';
  }

  terminar(ganador: string, event: any) {
    if (ganador == '❌' || ganador == '⚪') {
      this.resultado = 'El ganador de la partida es : ' + ganador;
      this.showConfetti(event);
    } else if (this.cont2 == 9) {
      this.resultado = 'La partida termino en empate';
    }
  }

  reiniciarJuego() {
    this.tablero = this.reiniciarTablero();
    this.turno = true;
    this.cont = 0;
    this.cont2 = 0;
  }

  revisarCasilla(i: number): boolean {
    if (this.tablero[i].includes('❌') || this.tablero[i].includes('⚪')) {
      return false;
    }
    return true;
  }

  hayGanador(ganador: string, event: any): boolean {
    if (ganador == '❌' || ganador == '⚪') {
      return false;
    } else if (this.cont2 == 9) {
      return false;
    }

    return true;
  }

  showConfetti(event: any) {
    party.confetti(event, {
        count: party.variation.range(100, 300),
        size: party.variation.range(1, 3),
        spread: party.variation.evaluateVariation(100)
    })
  }

  reiniciarTablero(): string[] {
    return ['', '', '', '', '', '', '', '', ''];
  }

}
