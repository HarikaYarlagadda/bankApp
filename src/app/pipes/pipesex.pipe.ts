import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesex'
})
export class PipesexPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
