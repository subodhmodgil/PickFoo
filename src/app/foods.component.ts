import { Component } from '@angular/core';
import { FoodsService } from './foods.service';

@Component({
    selector: 'app-foods',
    template: `
    <div>
        <h2>{{ title }}</h2>
        <div>
            <img [src]="imageUrl" width="360" height="100"/>
        </div>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
    </div>
    `
})

export class FoodsComponent {
    title = 'List of courses';
    imageUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;
    courses;

    constructor(service: FoodsService) {
        this.courses = service.getFood();
     }
}

