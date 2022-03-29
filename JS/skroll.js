// components
const app = Vue.createApp({});

app.component('the-nav' , {
    template: `<nav class="navbar">
    <button class="open"></button>
    <div class="ham">
        <button class="close"></button>
            <h1><a href="#">HOME</a></h1>
            <h1>HOMESTAYS</h1>
            <ul>
                <li><a href="HTML/chikmaglur/chikmaglur.html">CHIKKAMAGLORE</a></li>
                <li><a href="HTML/coorg/coorg.html">COORG</a></li>
                <li><a href="HTML/sakleshpoora/sakleshpoora.html">SAKLESHPOORA</a></li>
                <li><a href="#">GOKARNA</a></li>
            </ul>
            <h1 class="h1">PLACES TO VISIT</h1>
            <ul>
                <li><a href="HTML/places/chikmaglur.html">CHIKKAMAGLORE</a></li>
                <li><a href="HTML/places/coorg.html">COORG</a></li>
                <li><a href="HTML/places/sakleshpoora.html">SAKLESHPOORA</a></li>
                <li><a href="HTML/places/gokarna.html">GOKARNA</a></li>
              </ul>
              <br>
              <br>
              <ul>
                <div class="socials">
                    <li><a href="mailto:homestayforyou18@gmail.com" target="_blank"><div class="mail"></div></a></li>
                    <li><a href="https://www.instagram.com/homestay_for_you/?hl=en" target="_blank"><div class="insta"></div></a></li>
                    <li><a href="https://www.facebook.com/Homestayforyouindia/" target="_blank"><div class="fb"></div></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=918088003032&text=hello" target="_blank"><div class="whats"></div></a></li>
                </div>
                </ul>
    </div>
    <a class="us" href="contact.html">Contact Us</a>
    <div class="logo"></div>
</nav>`,
});

app.mount('.app');
// loader
// var loade = document.getElementById("loader");

//         window.addEventListener("load", function(){
//             loader.style.display = "none";
//         })
// scroll
$('.btn').on('click', function(event) {
        if(this.hash !== '' ){
            event.preventDefault();
            const hash = this.hash;
            $('html, body'). animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });

//gsap nav

const button = document.querySelector('.open')
button.addEventListener('click', () => {
   gsap.to('.ham',{x:350, y:0, ease:'power2', duraion:1.5})
   gsap.from('.ham > h1',{y:50, opacity:0, stagger: .2})
   gsap.from('.ham > ul > li> a',{opacity:0, stagger: .2})
})

const btn = document.querySelector('.close')
   btn.addEventListener('click', () => {
       gsap.to('.ham',{x:0, y:0, duration:.5})
   })

//    components

// // components
// const app = Vue.createApp({});

// app.component('the-nav' , {
//     template: `<nav class="navbar">
//     <button class="open"></button>
//     <div class="ham">
//         <button class="close"></button>
//             <h1><a href="#">HOME</a></h1>
//             <h1>HOMESTAYS</h1>
//             <ul>
//                 <li><a href="HTML/chikmaglur/chikmaglur.html">CHIKKAMAGLORE</a></li>
//                 <li><a href="HTML/coorg/coorg.html">COORG</a></li>
//                 <li><a href="HTML/sakleshpoora/sakleshpoora.html">SAKLESHPOORA</a></li>
//                 <li><a href="#">GOKARNA</a></li>
//             </ul>
//             <h1 class="h1">PLACES TO VISIT</h1>
//             <ul>
//                 <li><a href="HTML/places/chikmaglur.html">CHIKKAMAGLORE</a></li>
//                 <li><a href="HTML/places/coorg.html">COORG</a></li>
//                 <li><a href="HTML/places/sakleshpoora.html">SAKLESHPOORA</a></li>
//                 <li><a href="HTML/places/gokarna.html">GOKARNA</a></li>
//               </ul>
//               <br>
//               <br>
//               <ul>
//                 <div class="socials">
//                     <li><a href="mailto:homestayforyou18@gmail.com" target="_blank"><div class="mail"></div></a></li>
//                     <li><a href="https://www.instagram.com/homestay_for_you/?hl=en" target="_blank"><div class="insta"></div></a></li>
//                     <li><a href="https://www.facebook.com/Homestayforyouindia/" target="_blank"><div class="fb"></div></a></li>
//                     <li><a href="https://api.whatsapp.com/send?phone=918088003032&text=hello" target="_blank"><div class="whats"></div></a></li>
//                 </div>
//                 </ul>
//     </div>
//     <a class="us" href="contact.html">Contact Us</a>
//     <div class="logo"></div>
// </nav>`,
// });

// app.mount('.app');
