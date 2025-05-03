
 //This logic for toggling the setting side bar when the gear button is clicked
 settings = document.querySelector("aside> .settings") ; 

 
 openSide = document.querySelector(".open") ; 

 
 openSide.addEventListener("click" ,() => {
   settings.classList.toggle("opened") ; 
   openSide.classList.toggle("opened") ; 
   openSide.children[0].classList.toggle("fa-spin") ; 
 })






//This for the random image backgrounds of the landing 

let landingPage = document.querySelector(".landing-page");
let changBgBtns = document.querySelectorAll(".random-bg button"); 
let background_option; 
let changeBgInt = null ; 


function ChangeBtnsAccordingToBgOpt(){
  background_option = localStorage.getItem("background_option") ; 
  if (background_option === "true")
    {
      background_option = true ; 
      changBgBtns[0].classList.add("active") ;
    } 
  else
  {
     changBgBtns[1].classList.add("active") ;
     background_option = false ; }
}

if (localStorage.getItem("background_option") !== null){

  removeSelectedClass(changBgBtns, "active") ; 
  ChangeBtnsAccordingToBgOpt();
}
else  background_option = true ; 


let imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"] ; 

function toggleInterval(){
if (background_option){
   changeBgInt = setInterval(()=> {
     let randomNum = Math.floor(Math.random() * imgs.length); 
     landingPage.style.backgroundImage = `url('../images/landing-page/${imgs[randomNum]}')` ; 
  }, 1000)
  }
}
toggleInterval();









//This for changing the colors according to the selected option
function removeSelectedClass(arrOptions, className){
  for (let i =  0 ; i < arrOptions.length ; i++)
    {
      arrOptions[i].classList.remove(className) ;
    }
}

let liOptions = document.querySelectorAll("aside .settings .colors li"); 

liOptions.forEach(element => {
  element.addEventListener("click", (e)=>{

    removeSelectedClass(liOptions, "selected"); 
    element.classList.add("selected") ; 

    document.documentElement.style.setProperty('--main-color', e.target.dataset.color) ; 
    localStorage.setItem("color_option", e.target.dataset.color)
  
  })
});

//Switch buttons 
function UpdateBgOptionAndStoreIt(boolVal){
  background_option = boolVal ;
  localStorage.setItem("background_option", boolVal)
}


  changBgBtns.forEach(element =>{ 
  element.addEventListener("click", (e) => {
    removeSelectedClass(changBgBtns, "active");
    element.classList.add("active") ; 
    
    if (element.getAttribute("data-bg") === "yes"){
      console.log("yes")
      UpdateBgOptionAndStoreIt(true) ; 
      toggleInterval() ; 
    }
    else {
      UpdateBgOptionAndStoreIt(false) ; 
      clearInterval(changeBgInt) ; }
  })
})









// let hideBullets = document.querySelectorAll(".show-bulls button"); 
// switchButton(hideBullets) ;



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


//This for filling the skills bars when scrolling to the skills secction

let skillSection = document.querySelector("section.skills"); 

let progressBars = document.querySelectorAll("span.bar") ; 

function CheckSkillSectionInView(){
  
let skillSectionTop = skillSection.getBoundingClientRect().top ; 
let windowHeight = window.innerHeight ; 
if (skillSectionTop <= windowHeight - 250) {
  progressBars.forEach(element => {
    element.style.width = element.getAttribute("data-width"); 
  });
  window.removeEventListener("scroll", CheckSkillSectionInView) ; 

}
}
window.addEventListener("scroll", CheckSkillSectionInView) ; 



//This for showing the pop-up img when an img is clicked

let gallImgs = document.querySelectorAll(".gallery .images img") ; 
let popUpDiv = document.querySelector(".gallery .pop-up-img"); 
let popUpTitle = document.querySelector(".gallery .pop-up-img> h3") ; 
let popUpImg = document.querySelector(".gallery .pop-up-img> img") ; 
let spanClose = document.querySelector(".gallery .pop-up-img> span") ; 

spanClose.addEventListener("click", ()=>{
  popUpDiv.style.display = "none" ; 
 let overDiv = document.querySelector("body > .overlay") ; 
 if (overDiv !== null) document.body.removeChild(overDiv) ; 
})

gallImgs.forEach(element => {
  element.addEventListener("click", (e)=>{

    let overDiv = document.createElement("div") ; 
    overDiv.className="overlay" ; 
    document.body.appendChild(overDiv) ; 



    popUpTitle.textContent = `Image ${e.target.dataset.num}` ; 
    popUpImg.setAttribute("src", element.getAttribute("src")) ; 
    popUpDiv.style.display = "block" ; 

    })
});



























