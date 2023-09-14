const mountain = [
    {
        image: "../Assets/Camp-Images/High-Quality-Images/Mount Ulap.png",
        name: "Mount Ulap",
        amount:"$104.99/night",
        description:"Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.",
        person:"Submitted by Andrew Mike",
      }
]

const boxUlap = document.querySelector('#box-Ulap');

function mountUlapHTML(ulap) {
    return `   <div class="border-2 border-solid rounded items-center mb-10 md:border-2 md:w-96">
    <img class="rounded w-64 m-4 md:w-80 md:ml-7" src="${ulap.image}" alt="${ulap.name}"/>
    <h1 class="flex items-center gap-12 m-4 font-bold text-lg md:gap-24 md:ml-8"> ${ulap.name}
    <small>${ulap.amount}</small>
    </h1>
    <p class="text-slate-600 text-sm m-4 md:ml-8">${ulap.description}</p>
    <small class="text-slate-600 m-4 text-sm md:ml-8">${ulap.person}</small>
</div>
    `;
  }
 
  function showUlap(ulaps) {
    const cardHTML = ulaps.map(mountUlapHTML).join('');
   boxUlap .innerHTML = cardHTML;
  }
  
  showUlap (mountain);


/***const viewCampground = document.querySelector('#view');
viewCampground.addEventListener('click', () => {
  const inputValue = document.querySelector('input[type="text"]').value.toLowerCase();

  const filteredCampground = mountain.filter(ulap => ulap.name.toLowerCase().includes(inputValue));

  showUlap(filteredCampground);
}); */


/**review chat */
const individualCamps = [
    {
      fullName: "Adam Jones",
      feedback: "Honestly one of the best experiences ever,took us a while to figure out how to get there but it was amazing!",
      time: "13h ago"
    },
    {
      fullName: "Isaac Dylan",
      feedback: "Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.",
      time: "1 day ago"
    },
    {
      fullName: "Hudson Luca",
      feedback: "Definitely recommend going there,not too far and not a lot of people to ruin the experience.",
      time: "3 days ago"
    },
  ];


  const boxes = individualCamps.map(( individual, index) => {
    return `      <div class="border-y  items-center mb-7 md:ml-8 " key=${index}>
    <h4 class="flex items-center gap-16 m-4 font-bold text-lg md:gap-28">${individual.fullName} <small class="text-slate-600">${individual.time}</small></h4> 
     <p class="text-slate-600 text-sm m-4">${individual.feedback}</p>
             </div>
             `;        
  });

  const button = ` <div class="m-5 md:ml-8" id="btn">
  <button class="input p-3  flex items-center gap-3 border-0 rounded font-bold bg-gray-900 text-white hover:animate-pulse hover:bg-gray-200 hover:border-none " >
   <img src="/Assets/Chat Bubble.svg" alt="chat" class="w-5">
   <span>Leave a review</span>
  </button>`;

  let textBox = document.querySelector('#text-box');
textBox.innerHTML = boxes.join('') + button;