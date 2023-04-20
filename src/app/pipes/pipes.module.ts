import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAlivePipe } from './is-alive.pipe';



@NgModule({
  declarations: [IsAlivePipe],
  imports: [
    CommonModule
  ],
  exports: [
    IsAlivePipe
  ]
})
export class PipesModule { }
