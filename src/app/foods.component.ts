import { Component } from '@angular/core';
import { FoodsService } from './foods.service';
import { SummaryPipe } from './summary.pipe';

@Component({
    selector: 'app-foods',
    template: `
    <div>
        <h2>{{ title }}</h2>
        <div>
            <img [src]="imageUrl" width="340" height="100" margin-bottom="20"/>
        </div>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
       {{ text | summary: 20 }}
    </div>
    `
})

export class FoodsComponent {
    title = 'List of courses';
    imageUrl = 'http://lorempixel.com/400/200';
    courses;
    email = 'subodh@gmail.com';
    text = 'All of above is list of Healthy Fruits';
    constructor(service: FoodsService) {
        this.courses = service.getFood();
     }
}

