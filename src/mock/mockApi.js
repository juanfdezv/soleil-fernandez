const products = [
    {
        id: 1,
        title: "Camisa Blanca",
        price: 2500,
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966676501_04.webp",
        description: "Una simple camisa blanca",
        category: "camisas",
    },
    {
        id: 2,
        title: "Camisa Celeste",
        price: 2500,
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966680491_04.webp",
        description: "Una simple camisa celeste",
        category: "camisas",
    },
    {
        id: 3,
        title: "Camisa Azul",
        price: 2300,
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966660709_04.webp",
        description: "Una simple camisa azul",
        category: "camisas",
    },
    {
        id: 4,
        title: "Camisa Rosa",
        price: 2250,
        pictureUrl: "https://content.moss.co.uk/images/extraextralarge/966680604_05.webp",
        description: "Una simple camisa rosa",
        category: "camisas",
    },
    {
        id: 5,
        title: "Campera negra",
        price: 12500,
        pictureUrl: "https://via.placeholder.com/750x1125",
        description: "Una simple campera negra",
        category: "camperas",
    },
    {
        id: 6,
        title: "Campera verde",
        price: 12250,
        pictureUrl: "https://via.placeholder.com/750x1125",
        description: "Una simple campera verde",
        category: "camperas",
    },
    {
        id: 7,
        title: "Pantalón negro",
        price: 4500,
        pictureUrl: "https://via.placeholder.com/750x1125",
        description: "Un simple pantalón negro",
        category: "pantalones",
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