/*
    Author: Heesoo Lim
    Date: July 08, 2020
    Website Name: MidTerm Test
    File Name: app.js
    File Description: This is a JavaScript file of Single Page Application for MidTerm Test
*/

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";

// Inject IntroParagraph by using textContent
document.getElementById('IntroParagraph').textContent = `Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. `;
document.getElementById('IntroParagraph').textContent += `Greece has 1,400 islands, though only 230 of them are inhabited. `;
document.getElementById('IntroParagraph').textContent += `And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.`;

// Inject Folegandros paragraph by using textContent
document.getElementById('Folegandros').textContent = `Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.`;

// Inject Alonissos paragraph by using textContent
document.getElementById('Alonissos').textContent = `Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.`;

// Inject Spetses paragraph by using textContent
document.getElementById('Spetses').textContent = `This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.`;

// Inject Amorgos paragraph by using textContent
document.getElementById('Amorgos').textContent = `Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.`;

// Inject Syros paragraph by using textContent
document.getElementById('Syros').textContent = `A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.`;

// Inject Milo paragraphs by using textContent
document.getElementById('Milos').textContent = `This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.`;

// Inject Hydra paragraph by using textContent
document.getElementById('Hydra').textContent = `The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.`;

// Inject Ithaca paragraph by using textContent
document.getElementById('Ithaca').textContent = `Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.`;

// Inject Gavdos paragraph by using textContent
document.getElementById('Gavdos').textContent = `Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.`;


// If the user click the Send button, this function will be invoked
function send()
{
   // display the output on console
   console.log(`First Name: ${firstName.value}`);
   console.log(`Last Name: ${lastName.value}`);
   console.log(`Contact Number: ${contactNumber.value}`);
   console.log(`Email: ${email.value}`);
   console.log(`User Message: ${yourMessage.value}`);
}

 // select elements with ID
 let firstName = document.getElementById('firstName');
 let lastName = document.getElementById('lastName');
 let contactNumber = document.getElementById('contactNumber');
 let email = document.getElementById('email');
 let yourMessage = document.getElementById('yourMessage');

 // create div elements
 let firstNameErrorDiv = document.createElement('div');
 let lastNameErrorDiv = document.createElement('div');
 let emailErrorDiv = document.createElement('div');
 let contactNumberErrorDiv = document.createElement('div');

 // select array of elements with class name
 let formGroups = document.getElementsByClassName('form-group');
 
 // append div elements to each form-group class element
 formGroups[0].appendChild(firstNameErrorDiv);
 formGroups[1].appendChild(lastNameErrorDiv);
 formGroups[2].appendChild(contactNumberErrorDiv);
 formGroups[3].appendChild(emailErrorDiv);

 // form validation function
 function validation()
 {
    // if the length of first name input is greater than 3, change class name to valid and remove the error message
    if(firstName.value.length>3)
    {
        firstName.className = "form-control is-valid";
        firstNameErrorDiv.style.display = "none";
    }
    // otherwise, change the class name to invalid, assign and show the error message
    else
    {
        firstName.className = "form-control is-invalid";
        firstNameErrorDiv.innerHTML = `Enter more than 3 characters`;
        firstNameErrorDiv.style.display = "block";
    }


    // if the length of second name input is greater than 3, change class name to valid and remove the error message
    if(lastName.value.length>3)
    {
        lastName.className = "form-control is-valid";
        lastNameErrorDiv.style.display = "none";
    }
    // otherwise, change the class name to invalid, assign and show the error message
    else
    {
        lastName.className = "form-control is-invalid";
        lastNameErrorDiv.innerHTML = `Enter more than 3 characters`;
        lastNameErrorDiv.style.display = "block";
    }


    // if the length of contact number input is greater than 9, change class name to valid and remove the error message
    if(contactNumber.value.length>9)
    {
        contactNumber.className = "form-control is-valid";
        contactNumberErrorDiv.style.display = "none";
    }
    // otherwise, change the class name to invalid, assign and show the error message
    else
    {
        contactNumber.className = "form-control is-invalid";
        contactNumberErrorDiv.innerHTML = `Enter more than 9 characters`;
        contactNumberErrorDiv.style.display = "block";
    }


    // if the length of email input is greater than 11 and it includes '@', change class name to valid and remove the error message
    if(email.value.length>11 && email.value.includes("@"))
    {
        email.className = "form-control is-valid";
        emailErrorDiv.style.display = "none";
    }
    // otherwise, change the class name to invalid, assign and show the error message
    else
    {
        email.className = "form-control is-invalid";
        emailErrorDiv.innerHTML = `Enter more than 11 characters including '@'`;
        emailErrorDiv.style.display = "block";
    }
 }

// select Send button element
let sendButton = document.getElementById('sendButton');

  // if Send button exists, add event listener
if(sendButton)
{
    sendButton.addEventListener("click", (event) =>
    {
        // prevent default event from happening
        event.preventDefault();

        // function displaying the output on console
        send();
        
        // function validate form
        validation();
    });
}

})();

