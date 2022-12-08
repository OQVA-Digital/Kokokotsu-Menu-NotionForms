const gyozaSanBox = document.querySelector('.gyosa_san_ctnr .box')

const gyozaRainCtnr = document.querySelector('.gyoza_rain_ctnr')
const allGyozas = document.querySelectorAll('.gyoza_rain_ctnr .gyoza')

let itsRaining = false;

gyozaSanBox.addEventListener("click", function() {

    if(itsRaining == false) {
        for(i=0;i<allGyozas.length;i++) {

            gyozaRainCtnr.style.opacity = 1
            
            allGyozas[i].style.animation = "gyoza_fall " + (Math.random() * (6.5 - 3.5 + 1) + 3.5) +  "s ease-out infinite";

            allGyozas[i].style.animationDelay = (Math.random() * (10 - 0 + 1) + 0) +  "s";
            
            allGyozas[i].style.top = Math.floor(Math.random() * (180 - 0 + 1) + 0) +  "vh";
            
            allGyozas[i].style.width = (Math.floor(Math.random() * (10 - 4 + 1) + 4) * 1.6) +  "vh";
            allGyozas[i].style.height = Math.floor(Math.random() * (10 - 4 + 1) + 4) +  "vh";
    
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