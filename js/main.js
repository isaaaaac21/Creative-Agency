
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
function removeSelectedClass(arrOptions){
  for (let i =  0 ; i < arrOptions.length ; i++)
    {
      arrOptions[i].classList.remove("selected") ;
    }
}

let liOptions = document.querySelectorAll("aside .settings .colors li"); 

liOptions.forEach(element => {
  element.addEventListener("click", (e)=>{
    //first we get the selected color that needs to be applied to all elemnts
    //Now we remove the select class from the elements 
    removeSelectedClass(liOptions); 
    element.classList.add("selected") ; 

    document.documentElement.style.setProperty('--main-color', e.target.dataset.color) ; 
    localStorage.setItem("color_option", e.target.dataset.color)
  
  })
});


// This logic for the local storage of the settings

let mainColor = localStorage.getItem("color_option")  ; 
if (mainColor!== null){
  document.documentElement.style.setProperty('--main-color', mainColor) ; 
  removeSelectedClass(liOptions);
  for (let i = 0 ; i < liOptions.length ; i++){
    if (liOptions[i].getAttribute("data-color") === mainColor){
      liOptions[i].classList.add("selected") ; 
    }
  }





}





























