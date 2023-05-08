const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "Breakfast",
        price: 15.99,
        image: "./IMG/item-1.jpeg",
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed."
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Lunch",
        price: 13.99,
        image: "./IMG/item-2.jpeg",
        description: "Vaporware iphone mumnlecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing."
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "Shakes",
        price: "6.99",
        image: "./IMG/item-3.jpeg",
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold organic viral",
    },
    {
        id: 4,
        title: "Country Delight",
        category: "Breakfast",
        price: "20.99",
        image: "./IMG/item-4.jpeg",
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch.Prism austin mlkshk truffaut.",
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "Lunch",
        price: "22.99",
        image: "./IMG/item-5.jpeg",
        description: "Franzen vegan pabst bicycle rights kickstater pinterest meditation farm-to-table 90's pop-up",
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "Shekes",
        price: "18.99",
        image: "./IMG/item-6.jpeg",
        description: "Portland chicharrones ethical edison, palo santo craft beer chia heirloom iphone everyday",
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "Breakfast",
        price: "8.99",
        image: "./IMG/item-7.jpeg",
        description: "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
        id: 8,
        title: "American Classic",
        category: "Lunch",
        price: "12.99",
        image: "./IMG/item-8.jpeg",
        description: "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings Food truck truffaut",
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        category: "Shakes",
        price: "16.99",
        image: "./IMG/item-9.jpeg",
        description: "Skateboarder farn synth authentic semiotics. Live-edge lyft af, edilson buld yuccie crucifx microdosing.",
    },
    {
        id: 10,
        title: "Stack Dinner",
        category: "Dinner",
        price: "39.99",
        image: "./IMG/item-10.jpeg",
        description: "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison buld yuccie crucifix microdosing",
    },
];

const menuItems = document.querySelector('.menu-items');
const buttonContainer = document.querySelector('.button-container');

window.addEventListener("DOMContentLoaded", () => {
    displayMenuButtons()
});


menu.map((item) => {
    let html = `
    <div class="content">
    <div class="item-image">
        <img src="${item.image}" alt="${item.title}" />
    </div>

    <div class="item-info">
    <div class="item-title">
        <p>${item.title}</p>
        <p class="price">${item.price}</p>
    </div>

    <div class="item-description">
        <p>
        ${item.description}
        </p>
       </div>
    </div>
  </div> 
  `
 menuItems.innerHTML += html
});


function displayMenuButtons() {
    const categories = menu.reduce((value, item) => {
        if(!value.includes(item.category)) {
            value.push(item.category)
        }
    
        return value;
    }, ["all"]);

    const categoryBtns = categories.map((category) => {
        return `
        <button class="filter-button" data-id="${category}">${category}</button>
        `
    }).join("");

    buttonContainer.innerHTML += categoryBtns;
}