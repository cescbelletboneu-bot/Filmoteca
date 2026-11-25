import { Component, input, output } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula/pelicula';

@Component({
  imports: [],
  selector: 'app-fitxa-pelicula',
  styleUrl: './fitxa-pelicula.css',
  templateUrl: './fitxa-pelicula.html',
})
export class FitxaPelicula {
  // Dades rebudes del pare. El fill no les modifica.
  peli = input.required<Pelicula>();
  numero = input(0);
  llogada = input(false);

  // Avisos cap al pare; és el pare qui canvia l'estat.
  llogar = output<number>();
  retornar = output<number>();

  readonly cartellPerDefecte = 'assets/cartells/per-defecte.svg';
}
