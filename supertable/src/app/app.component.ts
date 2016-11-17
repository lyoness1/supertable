import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { BehaviorSubject } from 'rxjs/subject';
import { KeysPipe } from './pipe'

const PEOPLE = require('./data-people');

// TODO: CALCULATE LENGTH FROM ATTR LIST
const SECTIONS = require('./data-schema')

// const people_subject = new BehaviorSubject<Person[]>([]);




export class Person {
    constructor(
        public attributes: Object
    ) {
    }

    mapAttrs(fn) {
        Object.keys(this.attributes)
        .map(key => {
            fn.apply(this, key, this.attributes[key])
        });
    }
};





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  pipes: [KeysPipe]
})
export class AppComponent {
    title = 'Supertable!';
    sections = SECTIONS;
    people = PEOPLE;    
}



