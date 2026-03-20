// Array of remaining products (except the first one)
const products = [
    {
         name: "Nike Field General",
        img: "Assests/Images/image-removebg-preview (2).png",
        height: 135,
         url: "nikefieldgeneral.html"
    },
    {
        name: "Nike Air Max Dn7",
        img: "Assests/Images/image-removebg-preview (3).png",
        height: 135,
          url: "nikeairmaxdn7.html"
    },
    {
        name: "Nike Free Metcon 6",
        img: "Assests/Images/image-removebg-preview (4).png",
        height: 140,
        url: "nikefreematcon6.html"
        
    },
    {
        name: "Nike Air Max Dn",
        img: "Assests/Images/image-removebg-preview (5).png",
        height: 130,
        url:"NikeAirMaxDn.html"
    },
    {
        name: "Nike Dunk Low Retro",
        img: "Assests/Images/image-removebg-preview (6).png",
        height: 145,
         url:"nikedunklowretro.html"
    },
    {
        name: "Nike MC Trainer 2",
        img: "Assests/Images/image-removebg-preview (8).png",
        height: 135,
         url:"Nike MC Trainer 2.html"
    }
];


// select the row container
const row3 = document.querySelector(".row3");

// Loop through array and generate dynamic cards
products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img class="shoe1" src="${product.img}" height="${product.height}" alt="">
        <h3>${product.name}</h3>
         <a href="${product.url}">
    <button class="cardbtn">View</button>
  </a>
    `;

    row3.appendChild(card);
});
