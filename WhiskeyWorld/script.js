// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Add interactivity - nav hover
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#fff';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});

// Random facts
const facts = [
    "The word 'whisky' comes from the Gaelic 'uisge beatha', meaning 'water of life'.",
    "Scotch must be aged in oak barrels for at least three years.",
    "Japan has been producing award-winning whisky since the 1920s.",
    "Bourbon must be made from at least 51% corn.",
    "The Angel's Share is the portion of whisky lost to evaporation during aging.",
    "Single malt whisky is made at one distillery using only malted barley."
];

// Check if fact button and fact display exists
const factButton = document.getElementById('factButton');
const factDisplay = document.getElementById('factDisplay');

if (factButton && factDisplay) {
    factButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });
}

    /*// 4. Toggle dark-gold mode with a button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle Gold Glow";
    toggleButton.style.marginTop = "20px";
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.backgroundColor = "#d4af37";
    toggleButton.style.color = "#000";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontWeight = "bold";

    document.querySelector('main').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('gold-glow');
    });*/

     // Real-time form validation
     const form = document.getElementById('clubForm');
     const nameInput = document.getElementById('name');
     const emailInput = document.getElementById('email');
     const nameError = document.getElementById('nameError');
     const emailError = document.getElementById('emailError');
 
     // Helper functions
     function showError(input, message, errorEl) {
         errorEl.textContent = message;
         input.style.borderColor = 'red';
     }
 
     function showSuccess(input, errorEl) {
         errorEl.textContent = '';
         input.style.borderColor = 'green';
     }
 
     // Name validation
     nameInput.addEventListener('input', () => {
         if (nameInput.value.trim().length < 2) {
             showError(nameInput, "Name must be at least 2 characters.", nameError);
         } else {
             showSuccess(nameInput, nameError);
         }
     });
 
     // Email validation
     emailInput.addEventListener('input', () => {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(emailInput.value.trim())) {
             showError(emailInput, "Please enter a valid email address.", emailError);
         } else {
             showSuccess(emailInput, emailError);
         }
     });
 
     // Final validation on submit
     form.addEventListener('submit', (e) => {
         let valid = true;
 
         if (nameInput.value.trim().length < 2) {
             showError(nameInput, "Name must be at least 2 characters.", nameError);
             valid = false;
         }
 
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(emailInput.value.trim())) {
             showError(emailInput, "Please enter a valid email address.", emailError);
             valid = false;
         }
 
         if (!valid) {
             e.preventDefault();
         }
     });

     const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 2
            }
        }
    });
});