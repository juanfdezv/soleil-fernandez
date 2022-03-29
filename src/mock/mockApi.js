const products = [
    {
        id: "001",
        title: "Camisa Blanca",
        price: "$2.500",
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966676501_04.webp",
        description: "Una simple camisa blanca",
    },
    {
        id: "002",
        title: "Camisa Celeste",
        price: "$2.500",
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966680491_04.webp",
        description: "Una simple camisa celeste",
    },
    {
        id: "003",
        title: "Camisa Azul",
        price: "$2.300",
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966660709_04.webp",
        description: "Una simple camisa azul",
    },
    {
        id: "004",
        title: "Camisa Rosa",
        price: "$2.250",
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966680604_05.webp",
        description: "Una simple camisa rosa",
    },
];

export const getProducts = new Promise((resolve, reject) => {
    if(true){
        setTimeout(() => {
            resolve(products);
        }, 2000);
    }else{
        reject("Oops");
    }
});