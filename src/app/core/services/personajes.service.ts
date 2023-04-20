import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, filter } from 'rxjs';
import { Personaje } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personajes = [
    new Personaje(0, "Hermione", "Granger", "Griffyndor", true, "Nutria", "assets/img/Hermione.webp"),
    new Personaje(1, "Harry", "Potter", "Griffyndor", true, "Ciervo", "assets/img/Harry.webp"),
    new Personaje(2, "Ronald", "Weasley", "Griffyndor", true, "Jack Russell Terrier", "assets/img/Ron.webp"),
    new Personaje(3, "Nymphadora", "Tonks", "Hufflepuff", true, "Lobo", "assets/img/Tonks.webp"),
    new Personaje(4, "Tom" , "Ryddle", "Slytherin", false, "Desconocido", "assets/img/Tom.webp"),
    new Personaje(5, "Albus", "Dumbledore", "Griffyndor", false, "Fenix", "assets/img/Dumbledore.webp"),
    new Personaje(6, "Luna", "Lovegood", "Ravenclaw", true, "Liebre", "assets/img/Luna.webp"),
    new Personaje(7, "Draco", "Malfoy", "Slytherin", true, "Desconocido", "assets/img/Draco.webp"),
    new Personaje(8, "Fred", "Weasley", "Griffyndor", false, "Urraca", "assets/img/Fred.webp"),
    new Personaje(9, "Cedric", "Diggory", "Hufflepuff", false, "Desconocido", "assets/img/Cedric.webp"),
    new Personaje(10, "Cho", "Chang", "Ravenclaw", true, "Cisne", "assets/img/Cho.webp"),
    new Personaje(11, "Severus", "Snape", "Slytherin", false, "Cierva", "assets/img/Snape.webp"),
    new Personaje(12, "Minerva", "McGonagall", "Griffyndor", true, "Gato", "assets/img/Minerva.webp")
  ]
  constructor() { }

  private personajes$ = new BehaviorSubject<Personaje[]>([]);

  getAllPersonajes() : Observable<Personaje[]>{
    this.personajes$.next(this.personajes)
    return this.personajes$.asObservable();
  }

  filterPersonajesByName(string: string): Observable<Personaje[] | undefined>{
   return this.personajes$.asObservable()
    .pipe(
      map((personajes) => personajes.filter((personaje) => personaje.nombre.toLowerCase().includes(string) || personaje.apellido.toLowerCase().includes(string)))
    )
  }

  filterPersonajesByCasa(casa: string | null): Observable<Personaje[] | undefined>{
    return this.personajes$.asObservable()
     .pipe(
       map((personajes) => personajes.filter((personaje) => personaje.casa == casa))
     )
   }
  

}
