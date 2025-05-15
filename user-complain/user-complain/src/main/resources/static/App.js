let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
//variables that tracks if the counters have been activated
let activated = false;
//add scroll event to the page
window.addEventListener("scroll",()=> {
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    )
    {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updatecount() {
                const target = parseInt(counter.dataset.count);
                if(count<target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updatecount, 0.1);
                }
                else {
                    counter.innerText = target;
                }
            }
            updatecount();
            activated = true;
        });
    }
    else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 500
        || pageYOffset === 0
        && activated === true
    )
    {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});


window.addEventListener("scroll",()=> {
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false
    )
    {
        counter.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updatecount() {
                const target = parseInt(counter.dataset.count);
                if(count<target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updatecount, 0.1);
                }
                else {
                    counter.innerText = target;
                }
            }
            updatecount();
            activated = true;
        });
    }
    else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 500
        || pageYOffset === 0
        && activated === true
    )
    {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

