
        
        const orderCTA = document.querySelector('.order_cta')
        const sideSec = document.querySelector('.side_section')
        
        const iframeCtnr = document.querySelector('.iframe_ctnr')
        
        let showingSideCtnr = false;

        
        function toggleSlide() {

            if(showingSideCtnr == false) {
                sideSec.style.transform = 'translate3d(0%, 0%, 0)';
                showingSideCtnr = true;

                document.body.style.overflow = 'hidden'
            } else {
                sideSec.style.transform = 'translate3d(100%, 0%, 0)';
                showingSideCtnr = false;

                document.body.style.overflow = 'unset'

                if(showingIframe == false) {
                
                    iframeCtnr.innerHTML = '<iframe style="border:none;width:100%;" height="900px" src="https://notionforms.io/forms/make-your-order-kokokotsu"></iframe>'
    
                    showingIframe = true;
    
                    workWithUsCtnr.classList.remove('show_side_content')
                    eventsCtnr.classList.remove('show_side_content')
                    contactCtnr.classList.remove('show_side_content')
                    aboutUsCtnr.classList.remove('show_side_content')
                }
            }
        }

        let showingIframe = false;

        orderCTA.addEventListener('click', function() {

            if(showingIframe == false) {
                showingSideCtnr = false;
                
                iframeCtnr.innerHTML = '<iframe style="border:none;width:100%;" height="900px" src="https://notionforms.io/forms/make-your-order-kokokotsu"></iframe>'

                showingIframe = true;

                workWithUsCtnr.classList.remove('show_side_content')
                aboutUsCtnr.classList.remove('show_side_content')
                eventsCtnr.classList.remove('show_side_content')
                contactCtnr.classList.remove('show_side_content')
            }
            
            toggleSlide()

        })

        const secondaryBts = document.querySelectorAll(".nav_bts div[role='button']")

        const aboutUsCtnr = document.querySelector('.about_us_ctnr')
        const eventsCtnr = document.querySelector('.events_ctnr')
        const contactCtnr = document.querySelector('.contact_ctnr')
        const workWithUsCtnr = document.querySelector('.work_with_us_ctnr')

        for(i=0;i<secondaryBts.length;i++) {

            secondaryBts[i].addEventListener('click', function() {

                iframeCtnr.innerHTML = ''
                showingIframe = false;
                showingSideCtnr = false;

                toggleSlide()

                if (this.id == "work-with-us-bt") {

                    workWithUsCtnr.classList.add('show_side_content')
                    
                    eventsCtnr.classList.remove('show_side_content')
                    contactCtnr.classList.remove('show_side_content')
                    aboutUsCtnr.classList.remove('show_side_content')


                } else if(this.id == "who-we-are-bt") {

                    aboutUsCtnr.classList.add('show_side_content')
                    
                    workWithUsCtnr.classList.remove('show_side_content')
                    eventsCtnr.classList.remove('show_side_content')
                    contactCtnr.classList.remove('show_side_content')

                } else if(this.id == 'events-bt') {

                    eventsCtnr.innerHTML = '<iframe style="border:none;width:100%;" height="480px" src="https://notionforms.io/forms/kokokotsu-events-form"></iframe>'

                    eventsCtnr.classList.add('show_side_content')

                    
                    aboutUsCtnr.classList.remove('show_side_content')
                    contactCtnr.classList.remove('show_side_content')
                    workWithUsCtnr.classList.remove('show_side_content')

                } else if(this.id == 'contact-bt') {

                    contactCtnr.innerHTML = '<iframe style="border:none;width:100%;" height="480px" src="https://notionforms.io/forms/kokokotsu-contact-form"></iframe>'

                    contactCtnr.classList.add('show_side_content')

                    workWithUsCtnr.classList.remove('show_side_content')
                    eventsCtnr.classList.remove('show_side_content')
                    aboutUsCtnr.classList.remove('show_side_content')

                }
            })
        }




let UrlParameters = new URLSearchParams(document.location.search);

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        iframeCtnr.innerHTML = '<iframe style="border:none;width:100%;" height="900px" src="https://notionforms.io/forms/make-your-order-kokokotsu"></iframe>'
        showingIframe = true;
    }
}







let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if((touchendX + 100) < touchstartX) {
    if(showingSideCtnr == false) {
        toggleSlide()
    }
  } 
  if(touchendX > (touchstartX + 100)) {
    if(showingSideCtnr == true) {
        toggleSlide()
    }
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})