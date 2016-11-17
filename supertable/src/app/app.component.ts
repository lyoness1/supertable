import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { BehaviorSubject } from 'rxjs/subject';
import { KeysPipe } from './pipe'

const PEOPLE = require('./data-people');

// TODO: CALCULATE LENGTH FROM ATTR LIST
const SECTIONS = require('./data-schema')

// const people_subject = new BehaviorSubject<Person[]>([]);


interface PersonData {
    name: {
        prefix?: string,
        first?: string,
        last?: string,
    },
    features: {
        gender?: string, 
        height?: number,
        weight?: number,
        age?: number,
        has_nose?: boolean,
    }
};

export class Person {
    
    static fromData(data: PersonData): Person {
        let person = Object.create(Person.prototype);
        return Object.assign(person, data, {
            prefix: data.name.prefix ? data.name.prefix : null,
            first: data.name.first ? data.name.first :null,
            last: data.name.last ? data.name.last: null,
            gender: data.features.gender ? data.features.gender : null,
            height: data.features.height ? data.features.height: null,
            weight: data.features.weight ? data.features.weight : null,
            age: data.features.age ? data.features.age : null,
            has_nose: data.features.has_nose ? data.features.has_nose : null,
        });
    }

    constructor(
        public name: Object,
        public features: Object
    ) {}

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



