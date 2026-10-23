import { products } from "./data.js";

const container = document.getElementById("app");

const markup = products
  .map(
    (product) => `
    <h2 class="product-title">${product.name}</h2>
    <p class="product-price">$${product.price}</p>
    <p class="product-description">${product.description}</p>
  </div>
`,
  )
  .join("");

container.innerHTML = markup;
