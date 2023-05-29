function carousel(sectionSelector){

    const preBtn = document.querySelector(`${sectionSelector} .pre-btn`)
    const nextBtn = document.querySelector(`${sectionSelector} .next-btn`)
    const track = document.querySelector(`${sectionSelector} .track`);
    const carouselItem = document.querySelectorAll(`${sectionSelector} .my-carousel-item`)
    
    const carouselWidth = carouselItem[0].offsetWidth
    console.log(carouselWidth)
    let index = 0;    
    nextBtn.addEventListener('click', () => {
        index++;
        preBtn.classList.add('active');
        track.style.transform = `translateX(-${index * carouselWidth}px)`;
        if (index === carouselItem.length -1 ) {
            nextBtn.classList.add('hide');
        }
    })
    
    preBtn.addEventListener('click', () => {
        index--;
        nextBtn.classList.remove('hide');
        if (index === 0) {
            preBtn.classList.remove('active');
        }
        track.style.transform = `translateX(-${index * carouselWidth}px)`
    })
}

carousel('#home-flashsale')
carousel('#home-product-deal')
carousel('#home-blog')


const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

scrollToTopBtn.onclick = function() {
    
    topFunction()

}