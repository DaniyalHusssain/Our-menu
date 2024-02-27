const data = [
  {
    img: "/Assest/item-1.jpeg",
    title: "Buttermilk Pancakes",
    price: "$15.99",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    category: "Breakfast",
  },
  {
    img: "/Assest/item-2.jpeg",
    title: "Diner Double",
    price: "$13.99",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    category: "Lunch",
  },
  {
    img: "/Assest/item-3.jpeg",
    title: "Godzilla Milkshake",
    price: "$6.99",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    category: "Shakes",
  },
  {
    img: "/Assest/item-4.jpeg",
    title: "Country Delight",
    price: "$20.99",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    category: "Breakfast",
  },
  {
    img: "/Assest/item-5.jpeg",
    title: "Egg Attack",
    price: "$22.99",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    category: "Lunch",
  },
  {
    img: "/Assest/item-6.jpeg",
    title: "Oreo Dream",
    price: "$18.99",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    category: "Shakes",
  },
  {
    img: "/Assest/item-7.jpeg",
    title: "Becon Overflow",
    price: "$8.99",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    category: "Breakfast",
  },
  {
    img: "/Assest/item-8.jpeg",
    title: "American Classic",
    price: "$12.99",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    category: "Lunch",
  },
  {
    img: "/Assest/item-9.jpeg",
    title: "Quarantine Buddy",
    price: "$16.99",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: "Shakes",
  },
];
function content(category) {
  menu.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (!category || item.category === category) {
      menu.innerHTML += `
                <div class="item">
                    <div class="item-info">
                        <div class="img">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="info">
                            <div class="tp">
                                <h3 class="title">${item.title}</h3>
                                <p class="price">${item.price}</p>
                            </div>
                            <p class="description">${item.description}</p>
                        </div>
                    </div>
                </div>`;
    }
  }
}

const menu = document.querySelector("#menu");
let buttons = document.querySelectorAll(".buttons");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    const category = e.target.innerHTML;
    content(category == "All" ? null : category);
    // content(category);
  });
}
// function content(category) {
//   menu.innerHTML = "";
//   for (let i = 0; i < data.length; i++) {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML += `
//         <div class="item">
//         <div class="item-info">
//         <div class="img">
//         <img src="${data[i].img}" alt="">
//         </div>
//         <div class="info">
//         <div class=tp>
//         <h3 class="title">${data[i].title}</h3>
//         <p class="price">${data[i].price}</p>
//         </div>
//         <p class="description">${data[i].description}</p>
//         </div>
//         </div>
//         </div>
//         `;
//   }
// }

// console.log("he");
// let container = document.getElementsByClassName("container");

// let btn = document.querySelectorAll(".buttons");
// for (let i = 0; i < btn.length; i++) {
//   console.log("btn is working");
//   btn[i] = addEventListener("click", (e) => {
//     console.log(e.target.innerHTML);
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].category === category) {
//         content(category);
//       }
//     }
//   });
// }
// function Alldata() {
//   menu.innerHTML = "";
//   for (let i = 0; i < data.length; i++) {
//     const item = data[i];
//     menu.innerHTML += `
//                 <div class="item">
//                     <div class="item-info">
//                         <div class="img">
//                             <img src="${item.img}" alt="">
//                         </div>
//                         <div class="info">
//                             <div class="tp">
//                                 <h3 class="title">${item.title}</h3>
//                                 <p class="price">${item.price}</p>
//                             </div>
//                             <p class="description">${item.description}</p>
//                         </div>
//                     </div>
//                 </div>`;
//   }
// }
