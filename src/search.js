// const campGrounds = [
//     {
//       name: "Pine Ridge Campground",
//       description: "Nestled deep in the forest, Pine Ridge Campground offers a serene escape for nature enthusiasts. Enjoy hiking trails, birdwatching, and peaceful nights under the starry sky.",
//       image: "../Assets/Camp-Images/Compressed-Images/BuloySprings.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Lakeview Campsite",
//       description: "Situated on the shores of a pristine mountain lake, Lakeview Campsite is a water lover's paradise. Fish, swim, and kayak during the day, and gather around the campfire at night.",
//       image: "../Assets/Camp-Images/Compressed-Images/CalaguasIsland.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Mountain Haven Retreat",
//       description: "Experience the breathtaking beauty of the mountains at Mountain Haven Retreat. This campground is a haven for hikers, with numerous trails that lead to panoramic vistas.",
//       image: "../Assets/Camp-Images/Compressed-Images/LatikRiverside.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Riverbend Campground",
//       description: "Camp along the scenic riverbanks at Riverbend Campground. Listen to the soothing sounds of the river as you relax by your campfire and enjoy water activities like tubing and fishing.",
//       image: "../Assets/Camp-Images/Compressed-Images/MountUlap.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Desert Oasis Campground",
//       description: "Discover the wonders of the desert at Desert Oasis Campground. With its unique landscapes and cactus-studded terrain, it's a perfect spot for stargazing and off-roading adventures.",
//       image: "../Assets/Camp-Images/Compressed-Images/OnayBeach.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Seaside Cove Campground",
//       description: "Seaside Cove Campground offers a coastal camping experience with breathtaking ocean views. Explore tide pools, go beachcombing, and fall asleep to the sound of crashing waves."
//       ,image: "../Assets/Camp-Images/Compressed-Images/SevenSistersWaterfall.jpg",
//       button: "View Campground"
//     },
    
//   ];
  
//   const cards = campGrounds.map((camps, index) => {
//     return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 input" key=${index}>
//                 <img class="rounded-lg w-full" src="${camps.image}" alt="${camps.name}"/>
//                 <h4 class="text-lg font-bold">${camps.name}</h4>
//                 <p class="text-slate-600">${camps.description}</p>
//                 <button class="input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none" onClick={}>${camps.button}</button>
//             </div>`
//   })
// let cardContainer= document.querySelector('#card-container');
// cardContainer.innerHTML = cards.join('');


const campGrounds = [
  {
    id: 1,
    name: "Mount Ulap",
    description: "Nestled deep in the forest, Pine Ridge Campground offers a serene escape for nature enthusiasts. Enjoy hiking trails, birdwatching, and peaceful nights under the starry sky.",
    image: "../Assets/Camp-Images/Compressed-Images/MountUlap.jpg",
    button: "View Campground"
  },
  {
    id: 2,
    name: "Calaguas Island",
    description: "Situated on the shores of a pristine mountain lake, Lakeview Campsite is a water lover's paradise. Fish, swim, and kayak during the day, and gather around the campfire at night.",
    image: "../Assets/Camp-Images/Compressed-Images/CalaguasIsland.jpg",
    button: "View Campground"
  },
  {
    id: 3,
    name: "Onay Beach",
    description: "Experience the breathtaking beauty of the mountains at Mountain Haven Retreat. This campground is a haven for hikers, with numerous trails that lead to panoramic vistas.",
    image: "../Assets/Camp-Images/Compressed-Images/OnayBeach.jpg",
    button: "View Campground"
  },
  {
    id: 4,
    name: "Seven Sisters Waterfall",
    description: "Camp along the scenic riverbanks at Riverbend Campground. Listen to the soothing sounds of the river as you relax by your campfire and enjoy water activities like tubing and fishing.",
    image: "../Assets/Camp-Images/Compressed-Images/SevenSistersWaterfall.jpg",
    button: "View Campground"
  },
  { 
    id:5,
    name: "Latik Riverside",
    description: "Discover the wonders of the desert at Desert Oasis Campground. With its unique landscapes and cactus-studded terrain, it's a perfect spot for stargazing and off-roading adventures.",
    image: "../Assets/Camp-Images/Compressed-Images/LatikRiverside.jpg",
    button: "View Campground"
  },
  { 
    id: 6,
    name: "Buloy Springs",
    description: "Seaside Cove Campground offers a coastal camping experience with breathtaking ocean views. Explore tide pools, go beachcombing, and fall asleep to the sound of crashing waves.",
    image: "../Assets/Camp-Images/Compressed-Images/BuloySprings.jpg",
    button: "View Campground"
  },
];

function generateCardHTML(camp) {
  return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 input">
            <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
            <h4 class="text-lg font-bold">${camp.name}</h4>
            <p class="text-slate-600">${camp.description}</p>
            <a href="carddetails.html?id=${camp.id}" class="view-button text-center input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none">${camp.button}</a>
          </div>`;
          //<button data-index="${camp.id}" class="view-button input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none"><a href="carddetails.html?id=${camp.id}">${camp.button}</a></button>
}




function renderData(data,functionMarkup) {
  return data.map(functionMarkup).join('');
}

const cardContainer = document.querySelector('#card-container');

function renderCards(camps) {
  const cardHTML = camps.map(generateCardHTML).join('');
  cardContainer.innerHTML = cardHTML;

}

renderCards(campGrounds);



/* SEARCH BUTTON TO FILTER CAMPGROUNDS ON USER INPUT*/
const searchBtn = document.querySelector('#btn');
searchBtn.addEventListener('click', () => {
  const inputValue = document.querySelector('input[type="text"]').value.toLowerCase();

  const filteredCamps = campGrounds.filter(camp => camp.name.toLowerCase().includes(inputValue));

  renderCards(filteredCamps);
});

 // JavaScript to toggle the menu on small screens
 const hamburgerButton = document.getElementById('hamburger-menu');
 const menuItems = document.getElementById('menu-items');
 const closeIcon = document.getElementById('close')

 hamburgerButton.addEventListener('click', () => {
 menuItems.classList.toggle('hidden');
     hamburgerButton.classList.toggle('hidden');
 });

 closeIcon.addEventListener('click', () => {
      closeIcon.classList.toggle('hidden');
      hamburgerButton.classList.toggle('hidden');
      menuItems.classList.toggle('hidden');
  });











  /*const viewButtons = document.querySelectorAll('.view-button');
  viewButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
          const id = event.target.getAttribute('data-index');
          const selectedCamp = campData.find(camp => camp.id == id);*/
       /*This works if we want to render it in a single page*
          if (selectedCamp) {
              const detailedInfoHTML = generateCampInfoHTML(selectedCamp);
              detailedInfoContainer.innerHTML = detailedInfoHTML;
              //individualPage.classList.remove('hidden');
              //searchPage.classList.add('hidden');
              //detailedInfoContainer.classList.remove('hidden');

          }
      });
  });*/