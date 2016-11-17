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

export class Header {

    // Header.fromJSON() rather than using constructor in header object
    static fromJSON(json: TableSchema): Header {
        // header object is instance of Header class
        let header = Object.create(Header.prototype);
        return Object.assign(header, json, {
            votes: json.votes ? json.votes : 0,
            imageUrl: json.urlToImage,
            publishedAt: json.publishedAt ?
                new Date(json.publishedAt) :
                new Date()
        });
    }

    constructor(
        public title: string,
        public description: string, 
        public imageUrl: string,
        public votes?: number
    ) {
        this.votes = votes || 0;
        this.publishedAt = new Date();
    }

    public voteUp(): void {
        this.votes = this.votes + 1;
    }

    public voteDown(): void {
        this.votes = this.votes - 1;
    }
}

