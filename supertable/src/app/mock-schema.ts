
const schema = {
    sections: [
        {
            name: "name",
            attributes: [
                { name: "prefix", type: "string" },
                { name: "first", type: "string" },
                { name: "last", type: "string" }
            ]
        },
        {
            name: "features",
            attributes: [
                { name: "gender", type: "string" },
                { name: "height", type: "float" },
                { name: "weight", type: "float" },
                { name: "age", type: "int" },
                { name: "has_nose", type: "bool" }
            ]
        }
    ]
}