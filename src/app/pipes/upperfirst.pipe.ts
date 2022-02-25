import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperfirst',
})
export class UpperfirstPipe implements PipeTransform {
  transform(chaine: string) {
    let stringArray: string[] = chaine.split(/(\W)/);

    let transformedString: string = '';

    stringArray = stringArray.map(
      (word) => word.charAt(0)?.toUpperCase() + word.slice(1)
    );
    transformedString = stringArray.join('');

    return transformedString;
  }
}
