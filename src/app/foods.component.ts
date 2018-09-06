import { Component } from '@angular/core';
import { FoodsService } from './foods.service';

@Component({
    selector: 'app-foods',
    template: `
    <div>
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    </div>
    `
})

export class FoodsComponent {
    title = 'List of courses';
    courses;

    constructor(service: FoodsService) {
        this.courses = service.getFood();
     }
}

