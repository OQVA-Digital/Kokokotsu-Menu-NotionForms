const gyozaSanBox = document.querySelector('.gyosa_san_ctnr .box')

const gyozaRainCtnr = document.querySelector('.gyoza_rain_ctnr')
const allGyozas = document.querySelectorAll('.gyoza_rain_ctnr .gyoza')

let itsRaining = false;

const clickMe = document.querySelector('.gyosa_san_ctnr .box .click_me')

setTimeout(() => {
    clickMe.classList.remove('hidden')
}, 1200);

gyozaSanBox.addEventListener("click", function() {

    clickMe.classList.add('hidden')

    if(itsRaining == false) {
        for(i=0;i<allGyozas.length;i++) {

            gyozaRainCtnr.style.opacity = 1
            
            allGyozas[i].style.animation = "gyoza_fall " + (Math.random() * (8 - 2 + 1) + 2) +  "s ease-out infinite";

            allGyozas[i].style.animationDelay = (Math.random() * (18 - 1 + 1) + 0) +  "s";
            
            allGyozas[i].style.top = Math.random() * (190 - 10 + 1) + 10 +  "vh";
            
            allGyozas[i].style.width = Math.random() * (22 - 5 + 1) + 5 * 1.6 +  "vh";
            allGyozas[i].style.height = Math.random() * (22 - 5 + 1) + 5 +  "vh";
            
            allGyozas[i].style.filter = "brightness(" + (Math.random() * (1 - 0.2) + 0.2) + ")";
    
            itsRaining = true;
        }
    } else {

        gyozaRainCtnr.style.opacity = 0
        
        setTimeout(() => {
            for(i=0;i<allGyozas.length;i++) {
                allGyozas[i].style.animation = ""
        
                allGyozas[i].style.animationDelay = ""
                
                allGyozas[i].style.top = ""
            }
        }, 400);
        
        itsRaining = false;
    }
    
})