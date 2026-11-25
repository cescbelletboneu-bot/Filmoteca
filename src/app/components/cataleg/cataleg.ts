import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula/pelicula';
import peliculesJson from '../../data/pelicules.json';
import { FitxaPelicula } from '../fitxa-pelicula/fitxa-pelicula';

@Component({
  imports: [FitxaPelicula],
  selector: 'app-cataleg',
  styleUrl: './cataleg.css',
  templateUrl: './cataleg.html',
})
export class Cataleg {
  pelicules: Pelicula[] = peliculesJson;
  llogades: number[] = [];
  filtreTitol = '';

  get peliculesFiltrades(): Pelicula[] {
    const cerca = this.filtreTitol.trim().toLowerCase();
    return this.pelicules.filter(peli => peli.titol.toLowerCase().includes(cerca));
  }

  getNumPelicules(){
    console.log("Num pel: "+this.pelicules.length);
    return this.pelicules.length;
  }

  getDisponibles(){
    console.log("Num pel disponibles: "+this.pelicules.filter(peli => peli.disponible).length);
    return this.pelicules.filter(peli => peli.disponible).length;
  }

  getTotalDurada(): string {
    const totalMinuts = this.pelicules.reduce((acc, peli) => acc + peli.durada, 0);
    const hores = Math.floor(totalMinuts / 60);
    const minuts = totalMinuts % 60;
    return `${hores}h ${minuts}min`;
  }

  getValMitjana(): number {
    if (this.pelicules.length === 0) {
      return 0;
    }
    const sumaValoracions = this.pelicules.reduce((acc, peli) => acc + peli.valoracio, 0);
    return sumaValoracions / this.pelicules.length;
  }

  estaLlogada(id: number): boolean {
    return this.llogades.includes(id);
  }

  llogar(id: number): void {
    if (!this.estaLlogada(id)) {
      this.llogades = [...this.llogades, id];
    }
  }

  retornar(id: number): void {
    this.llogades = this.llogades.filter(llogadaId => llogadaId !== id);
  }

  onCerca(event: Event): void {
    this.filtreTitol = (event.target as HTMLInputElement).value;
  }
}
