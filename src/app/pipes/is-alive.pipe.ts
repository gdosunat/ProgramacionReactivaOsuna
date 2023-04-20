import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAlive'
})
export class IsAlivePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value == true) return "Vivo";
    else return "Muerto"
  }

}
