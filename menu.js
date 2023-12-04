let aboutDesktop = document.querySelector(".list-desktop .fraction#about");
let blogDesktop = document.querySelector(".list-desktop .fraction#blog");
let portfolioDesktop = document.querySelector(".list-desktop .fraction#portfolio");
let contactDesktop = document.querySelector(".list-desktop .fraction#contact");
let headerElementsDesktop = document.querySelectorAll(".list-desktop .fraction")
let elementsDesktop = [aboutDesktop, blogDesktop, portfolioDesktop, contactDesktop];

elementsDesktop.forEach((element, index) => {
    element.addEventListener('mouseover', ()=>{
      if(!element.classList.contains('open')){
        element.style.width = '60%';
        element.style.height = '60%';
        if(index === 0 || index === 2){
          elementsDesktop[(index + 1) % 4].style.width = '40%';
          elementsDesktop[(index + 1) % 4].style.height = '60%';
          elementsDesktop[(index + 2) % 4].style.width = '60%';
          elementsDesktop[(index + 2) % 4].style.height = '40%';
          elementsDesktop[(index + 3) % 4].style.width = '40%';
          elementsDesktop[(index + 3) % 4].style.height = '40%';

        } else if(index === 1 || index === 3){
          elementsDesktop[(index + 1) % 4].style.width = '40%';
          elementsDesktop[(index + 1) % 4].style.height = '40%';
          elementsDesktop[(index + 2) % 4].style.width = '60%';
          elementsDesktop[(index + 2) % 4].style.height = '40%';
          elementsDesktop[(index + 3) % 4].style.width = '40%';
          elementsDesktop[(index + 3) % 4].style.height = '60%';
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
      const clickedElement = headerElement.parentElement;
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