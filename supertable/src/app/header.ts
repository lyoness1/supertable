interface TableSchema {
    sections: [
        {
            name: string,
            attributes: [
                { name: string, type: string },
                { name: string, type: string },
                { name: string, type: string }
            ]
        },
        {
            name: string,
            attributes: [
                { name: string, type: string },
                { name: string, type: number },
                { name: string, type: number },
                { name: string, type: number },
                { name: string, type: boolean }
            ]
        }
    ]
}

export class Attribute { 
    name: string;
    type: string;
};

export class Section {
    name: string;
    attributes: Attribute[];
    length: number;
}
