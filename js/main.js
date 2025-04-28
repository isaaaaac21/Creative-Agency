

 //This logic for toggling the setting side bar when the gear button is clicked
 settings = document.querySelector("aside> .settings") ; 
 console.log(settings) ; 
 
 openSide = document.querySelector(".open") ; 
 console.log(openSide) ; 
 
 openSide.addEventListener("click" ,() => {
   settings.classList.toggle("opened") ; 
   openSide.classList.toggle("opened") ; 
   openSide.children[0].classList.toggle("fa-spin") ; 
 })


//This for the random image backgrounds of the landing page
let landingPage = document.querySelector(".landing-page")

let imgs = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"] ; 


setInterval(()=> {
   let randomNum = Math.floor(Math.random() * imgs.length); 
   console.log(randomNum) ; 
   landingPage.style.backgroundImage = `url('../images/landing-page/${imgs[randomNum]}')` ; 
}, 10000)


//This for changing the colors according to the selected option
let liOptions = document.querySelectorAll("aside .settings .colors li"); 

liOptions.forEach(element => {
  element.addEventListener("click", ()=>{
    let selectedColor = element.attributes
    for (let i =  0 ; i < liOptions.length ; i++)
    {
      liOptions[i].classList.remove("selected") ;
    }
    element.classList.add("selected") ; 



  })
});































