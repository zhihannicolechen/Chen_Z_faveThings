import { getData } from "./modules/dataMiner.js";
(() => {
    console.log('fired!');
    let theThings = document.querySelector("#about_section"),
        theTemplate = document.querySelector("#bio-template").content,
        click = document.querySelector('.button'),
        pop = document.querySelector('.lbox'),
        display = document.querySelector('.about_section'),
        faveData;

   

    function buildThings(data) {
        //get all the keys (names) from the data object and use that to iterate through the data
        debugger;

        faveData = data;
        
        const things = Object.keys(data); //Object.keys creates an array

        things.forEach(thing => {
            let panel = theTemplate.cloneNode(true);
            let containers = panel.firstElementChild.children;

            containers[0].querySelector("img").src = `images/${data[thing].avatar}`;
            containers[0].querySelector("img").id = thing;
            containers[0].querySelector('img').addEventListener('click', showThing);
            containers[1].textContent = data[thing].name;
            containers[2].textContent = data[thing].quote;
            containers[3].textContent = data[thing].desc;
            
            theThings.appendChild(panel);
        })

    }

   function showThing() {
 

        let currentThing = faveData[this.id];
        
   }

   function popBox(data){
    if (pop.style.display === "block") {
        pop.style.display = "none";
    } else {
        pop.style.display = "block";
    }
   
   }

   click.addEventListener('click', popBox);
    

    getData(`./data.json`, buildThings);
})();