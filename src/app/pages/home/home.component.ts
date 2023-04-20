import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonajesService } from '../../core/services/personajes.service';
import { Personaje } from 'src/app/models';
import { Subject, filter, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit, OnDestroy{
  constructor(private personajesService: PersonajesService){
  }


  personajes: Personaje[] | undefined = [];
  casas = ["Griffyndor", "Ravenclaw", "Hufflepuff", "Slytherin"]
  casaControl = new FormControl('');
  isAliveControl = new FormControl([]);
  destroyed$ = new Subject<void>();

  async ngOnInit(): Promise<void> {
    this.personajesService.getAllPersonajes()
    .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.personajes = data;
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.unsubscribe();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.personajesService.filterPersonajesByName(filterValue)
    .pipe(takeUntil(this.destroyed$))
    .subscribe((data) => {
      this.personajes = data;
    })
    
  }

  casaFilter(): void {
    this.personajesService.filterPersonajesByCasa(this.casaControl.value)
    .pipe(takeUntil(this.destroyed$))
    .subscribe((data) => {
      this.personajes = data
    })
  }
}
