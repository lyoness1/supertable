import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

export class Attribute { 
    name: string;
    type: string;
};

export class Section {
    name: string;
    attributes: Attribute[];
    length: number;
}

// TODO: CALCULATE LENGTH FROM ATTR LIST
const SECTIONS: Section[] = [
    {
        name: "name",
        attributes: [
            { name: "prefix", type: "string" },
            { name: "first", type: "string" },
            { name: "last", type: "string" }
        ],
        length: 3
    },
    {
        name: "features",
        attributes: [
            { name: "gender", type: "string" },
            { name: "height", type: "float" },
            { name: "weight", type: "float" },
            { name: "age", type: "int" },
            { name: "has_nose", type: "bool" }
        ],
        length: 5
    }
];

// TODO: CREATE THIS LIST FROM SECTIONS
const ATTRIBUTES: Attribute[] = [
    { name: "prefix", type: "string" },
    { name: "first", type: "string" },
    { name: "last", type: "string" },
    { name: "gender", type: "string" },
    { name: "height", type: "float" },
    { name: "weight", type: "float" },
    { name: "age", type: "int" },
    { name: "has_nose", type: "bool" }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Supertable!';
  sections = SECTIONS;
  attributes = ATTRIBUTES;

  selectedAttr: Attribute;

  onSelect(attr: Attribute): void {
      this.selectedAttr = attr;
  }
}



