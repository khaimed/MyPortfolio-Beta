// loading
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  setTimeout(function heddin(){
    loader.classList.add("preloader_hidden")
    loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  })
  }, 3000);
  
});

// menu page
document.addEventListener('DOMContentLoaded', () => {
  // Var for Desktop
    let aboutDesktop = document.querySelector(".list-desktop .fraction#about");
    let blogDesktop = document.querySelector(".list-desktop .fraction#blog");
    let portfolioDesktop = document.querySelector(".list-desktop .fraction#portfolio");
    let contactDesktop = document.querySelector(".list-desktop .fraction#contact");
    let headerElementsDesktop = document.querySelectorAll(".list-desktop .fraction .header > div")
    let elementsDesktop = [aboutDesktop, blogDesktop, portfolioDesktop, contactDesktop];
  // Var for Mobile
    let menuMobile = document.querySelector(".menu-mobile")
    let listMobile = document.querySelector(".list-mobile")
    let aboutMobile = document.querySelector(".list-mobile .fraction#about");
    let blogMobile = document.querySelector(".list-mobile .fraction#blog");
    let portfolioMobile = document.querySelector(".list-mobile .fraction#portfolio");
    let contactMobile = document.querySelector(".list-mobile .fraction#contact");
    let headerElementsMobile = document.querySelectorAll(".list-mobile .fraction .header > div")
    let elementsMobile = [aboutMobile, blogMobile, portfolioMobile, contactMobile];
  // Between
    let closeElement = document.createElement('b')
        closeElement.textContent = "X";
        closeElement.style.marginRight = "10px"
    let returnElement = `<b>><span>_</span></b>`
    // test
    let page =  new URLSearchParams(document.location.search)
    console.log(page.get("page"))



    elementsDesktop.forEach((element, index) => {
      document.body.addEventListener("keydown", (e) => {
        if(e.code === "KeyC" && !element.classList.contains('open')){
          element.style.width = '50%';
          element.style.height = '50%';
        } else if(e.code === "KeyX" || element.classList.contains('open')){
          element.removeAttribute('style')
          elementsDesktop[(index + 1) % 4].removeAttribute('style')
          elementsDesktop[(index + 2) % 4].removeAttribute('style')
          elementsDesktop[(index + 3) % 4].removeAttribute('style')
        }
      });
      element.addEventListener('mouseover', ()=>{
        if(!element.classList.contains('open')){
          element.style.width = '65%';
          element.style.height = '65%';
          if(index === 0 || index === 2){
            elementsDesktop[(index + 1) % 4].style.width = '35%';
            elementsDesktop[(index + 1) % 4].style.height = '65%';
            elementsDesktop[(index + 2) % 4].style.width = '65%';
            elementsDesktop[(index + 2) % 4].style.height = '35%';
            elementsDesktop[(index + 3) % 4].style.width = '35%';
            elementsDesktop[(index + 3) % 4].style.height = '35%';
  
          } else if(index === 1 || index === 3){
            elementsDesktop[(index + 1) % 4].style.width = '35%';
            elementsDesktop[(index + 1) % 4].style.height = '35%';
            elementsDesktop[(index + 2) % 4].style.width = '65%';
            elementsDesktop[(index + 2) % 4].style.height = '35%';
            elementsDesktop[(index + 3) % 4].style.width = '35%';
            elementsDesktop[(index + 3) % 4].style.height = '65%';
          }
        } else {
          elementsDesktop[(index + 1) % 4].removeAttribute('style')
          elementsDesktop[(index + 2) % 4].removeAttribute('style')
          elementsDesktop[(index + 3) % 4].removeAttribute('style')
        }
      })
    })
    // click open
    headerElementsDesktop.forEach((headerElement,index) => {
      headerElement.addEventListener('click', () => {
        const clickedElement = headerElement.parentElement.parentElement;
        if(clickedElement.classList.contains('open')){
          clickedElement.classList.remove("open")
          elementsDesktop[index].style.width = '50%';
          elementsDesktop[index].style.height = '50%';
          headerElement.children[0].remove()
          headerElement.insertAdjacentHTML("afterbegin", returnElement)
        } else {
          clickedElement.classList.add("open");
          elementsDesktop[index].removeAttribute('style')
          elementsDesktop[(index + 1) % 4].removeAttribute('style')
          elementsDesktop[(index + 2) % 4].removeAttribute('style')
          elementsDesktop[(index + 3) % 4].removeAttribute('style')
          headerElement.replaceChild(closeElement, headerElement.children[0])
        }
      })
    });
    // Open menu mobile
    menuMobile.addEventListener('click',()=>{
      if(!menuMobile.classList.contains('open')){
        menuMobile.classList.add('open')
        listMobile.classList.add('open')
      } else {
        menuMobile.classList.remove('open')
        listMobile.classList.remove('open')
      }
    })
    // open header menu mobile
    headerElementsMobile.forEach((headerElement,index) => {
      headerElement.addEventListener('click', ()=>{
        const clickedElement = headerElement.parentElement.parentElement;
        if(!clickedElement.classList.contains('open')){
          clickedElement.classList.add('open')
          menuMobile.style.display = 'none'
          elementsMobile[(index + 1) % 4].style.display = 'none'
          elementsMobile[(index + 2) % 4].style.display = 'none'
          elementsMobile[(index + 3) % 4].style.display = 'none'
          headerElement.replaceChild(closeElement, headerElement.children[0])
        } else {
          clickedElement.classList.remove('open')
          menuMobile.removeAttribute('style')
          elementsMobile[(index + 1) % 4].removeAttribute('style')
          elementsMobile[(index + 2) % 4].removeAttribute('style')
          elementsMobile[(index + 3) % 4].removeAttribute('style')
          headerElement.children[0].remove()
          headerElement.insertAdjacentHTML("afterbegin", returnElement)
        }
      })
    })
    
// Mode Touch detected
    if(isTouchDevice()){
      document.body.classList.add("tactile")
    }
  })
  let mainContainer = document.querySelectorAll(".main-container")
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  }

  // say hi !
  function sayHi(){
    var today = new Date()
    var curHr = today.getHours()
     if (curHr < 12) {
      document.write('Bonjour');
     } else if (curHr < 18) {
       document.write('Bon après-midi')
    } else {
      document.write('Bonsoir')
    }
  }