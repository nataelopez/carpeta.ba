

const catalogo = [
    {
        id: 1,
        title: "Centro comercial",
        price: 5000000,
        description:
            "Complejo comercial ubicado en pleno centro, con un total de 8 locales equipados",
        category: "men's clothing",
        image: scr="./asstes/img/centro comercial.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        title: "Complejo de cabañas ",
        price: 15000000,
        description:
            "Muy cerca del centro del pueblo de Villa General Belgrano",
        category: "men's clothing",
        image:
           src="./assetes/img/cabaña.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
    },
    {
        id: 3,
        title: "Terreno en pleno centro",
        price: 3000000,
        description:
            "Equipado con todo los servicios, excelente para centro comercial",
        category: "men's clothing",
        image: ".\asstes\img\terreno centro.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
    {
        id: 4,
        title: "Terreno parquizado",
        price: 100000.00,
        description:
            "Con una ubicacion unica,muy cerca del Rio",
        category: "men's clothing",
        image: "./assets/img/terreno parquizado.jpg",
        rating: {
            rate: 4.7,
            count: 500,
        },
    },
   
];

let card = document.getElementById("card-ejemplo");

catalogo.map((producto) => {
    card.innerHTML+= `
        <div class="col-md-5 mb-5">
            <div class="card h-100 text-center p-4" key= ${producto.id} >
                <img src= ${producto.image} className="card-img-top" alt= ${producto.title} height="250px" />
                <div class="card-body">
                    <h5 class="card-title mb-0"> ${producto.title.substring(0,40)}...</h5>
                    <p class="card-title mb-0"> ${producto.description.substring(0,50)}...</p>
                    <p class="card-text lead fw-bold">$ ${producto.price} </p>
                </div>
                <a href="#" class="btn btn-outline-dark"> Ver mas... </a>
            </div>
        </div>
    `
});