import { Component, OnInit } from '@angular/core';


export class Section {
    name: string;,
    attributes: [];
    length: number
}

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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  componentName: 'HeaderComponent'

  sections: SECTIONS;
    
}
