// imports always go at the top of the file
//this is called an IIFE (Immediately invoked function expression)
import { getData } from "./modules/dataMiner.js";

//its a pretty common JavaScript programming patterm also called a module file
(() => {
    console.log('fired!');

    let theTeam = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content;

    //debugger;

    function buildTeam(data) {
        // get all the keys (names) from the data object and use that to iterate through the data
        debugger;
        
        const people = Object.keys(data);
        //data 0bject.keys creates an array

        people.forEach(prof => {
            //copy the template's contents
            let panel = theTemplate.cloneNode(true);
            //get a reference to the template's elements
            let containers = panel.firstElementChild.children;

            containers[0].querySelector("img").src = `images/${data[prof].avatar}`;

            containers[1].textContent = data[prof].name;
            containers[2].textContent = data[prof].role;
            containers[3].textContent = data[prof].nickname;

            theTeam.appendChild(panel);
        })
        //let theName = document.querySelector('.user-name'),
        //theDesc = document.querySelector('.user-bio');

        //theName.textContent = data.name;
        //theDesc.textContent = data.eyeColor;
    } 

    getData(buildTeam);
})();