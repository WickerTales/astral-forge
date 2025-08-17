// Example product data
const products = [
  {
    name: "Astral Hoodie",
    image: "https://via.placeholder.com/250x250.png?text=Astral+Hoodie",
    price: "$45",
    link: "https://www.printful.com/custom/product-link"
  },
  {
    name: "Forge Mug",
    image: "https://via.placeholder.com/250x250.png?text=Forge+Mug",
    price: "$20",
    link: "https://www.printful.com/custom/product-link"
  },
  {
    name: "Stellar Poster",
    image: "https://via.placeholder.com/250x250.png?text=Stellar+Poster",
    price: "$15",
    link: "https://www.printful.com/custom/product-link"
  }
];

// Display products
const container = document.getElementById("product-container");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <a href="${p.link}" target="_blank">Buy Now</a>
  `;
  container.appendChild(card);
});
