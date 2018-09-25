import { Pipe,
         PipeTransform } from '@angular/core';

@Pipe ({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: string, range: number) {
        if (!value) {
            return null;
        }
        const actualLimit = (range) ? range : 50;
        return value.substr(0, actualLimit) + '...';
    }
}
