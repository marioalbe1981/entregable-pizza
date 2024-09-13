const pizzas = [
    {id: 1, nombre: 'Muzzarella', imagen: 'img/pizza-1.png', precio: 500 },
    {id: 2, nombre: 'Especial', imagen: 'img/pizza-2.png', precio: 700 },
    {id: 3, nombre: 'Muzza de Cebolla', imagen: 'img/pizza-3.png', precio: 800 },
    {id: 4, nombre: 'Muzza con Huevos', imagen: 'img/pizza-4.png', precio: 900 },
    {id: 5, nombre: 'Cuatro Quesos', imagen: 'img/pizza-5.png', precio: 1000 },
    {id: 6, nombre: 'Muzza Pepino', imagen: 'img/pizza-6.png', precio: 1500 },
]

const pizzaIdInput = document.getElementById("pizzaIdInput");
const pizzaContainer = document.getElementById("pizzaContainer");
const buscarPizzaButton = document.getElementById("buscarPizza");

function renderPizza(pizza) {
    pizzaContainer.innerHTML = `
     <div class="pizza-card">
       <h2>${pizza.nombre}</h2>
       <img src="${pizza.imagen}"  alt="${pizza.nombre}" />
       <p>Precio: $${pizza.precio}</p>
     </div>
    `
}

function renderError(message) {
    pizzaContainer.innerHTML = `<p class="error-message">${message}</p>`;
}

function buscarPizza() {
    const pizzaId = parseInt(pizzaIdInput.value);

    if (isNaN(pizzaId)) {
        renderError("Por favor ingrese un numero valido.");
        return;
    }

    const pizza = pizzas.find(p => p.id === pizzaId);

    if (pizza) {
        renderPizza(pizza)
        localStorage.setItem("UltimaPizza", JSON.stringify(pizza));
    } else {
        renderError("No existe una pizza con ese ID.");
    }
}

buscarPizzaButton.addEventListener("click", buscarPizza);

window.addEventListener("DOMContentLoaded", () => {
    const pizzaGuardada = localStorage.getItem("UltimaPizza");

    if (pizzaGuardada) {
        const pizza = JSON.parse(pizzaGuardada);
        renderPizza(pizza);
    }
})