const gyozaSanBox = document.querySelector('.gyosa_san_ctnr .box')

const gyozaRainCtnr = document.querySelector('.gyoza_rain_ctnr')
const allGyozas = document.querySelectorAll('.gyoza_rain_ctnr .gyoza')

let itsRaining = false;

gyozaSanBox.addEventListener("click", function() {

    if(itsRaining == false) {
        for(i=0;i<allGyozas.length;i++) {

            gyozaRainCtnr.style.opacity = 1
            
            allGyozas[i].style.animation = "gyoza_fall " + (Math.random() * (10 - 2.5 + 1) + 2.5) +  "s ease-out infinite";

            allGyozas[i].style.animationDelay = (Math.random() * (15 - 1 + 1) + 0) +  "s";
            
            allGyozas[i].style.top = Math.random() * (180 - 0 + 1) + 0 +  "vh";
            
            allGyozas[i].style.width = Math.random() * (12 - 4 + 1) + 4 * 1.6 +  "vh";
            allGyozas[i].style.height = Math.random() * (12 - 4 + 1) + 4 +  "vh";
            
            // allGyozas[i].style.filter = "blur(" + (Math.random() * (0.15 - 0) + 0) +  "rem) brightness(" + (Math.random() * (1 - 0.3) + 0.3) + ")";
            
            allGyozas[i].style.filter = "brightness(" + (Math.random() * (1 - 0.4) + 0.4) + ")";
    
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