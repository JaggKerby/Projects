// Наблюдатель, который будет следить за изменением атрибута open
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // Елемент у которого измелился атрибут
    const details = mutation.target
    // Если елемент был закрыт — ничего не делаем
    if (!details.open) {
      return
    }
    // Иначе, находим все открытые елементы details и перебираем их
    document.querySelectorAll('div details[open]').forEach(el => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === details) {
        return
      }
      // Закрываем все остальные елемент details
      el.open = false
    })
  });
});
// Наблюдаем за изменением только одного атрибута
const config = {
  attributeFilter: ['open']
}
// Вешаем наблюдатель на все елементы details
document.querySelectorAll('div details').forEach(el => observer.observe(el, config))

// Слайдер скриншотов программ. 

$(function () {
  $('.slider').slick({
    nextArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.svg" alt="prev arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-next"><img src="img/next.svg" alt="next arrow"></button>',
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '400px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// new Vue({
//     el: '#example',
//     data: {
//       slides: 7
//     },
//     components: {
//       'carousel-3d': Carousel3d.Carousel3d,
//       'slide': Carousel3d.Slide
//     }
//   })



//запуск видео 

// let videoElem = document.getElementById("videoPlayer");
// let playButton = document.getElementById("playbutton");

// playButton.addEventListener("click", handlePlayButton, false);
// playVideo();

// async function playVideo() {
//   try {
//     await videoElem.play();
//     playButton.classList.add("playing");
//   } catch(err) {
//     playButton.classList.remove("playing");
//   }
// }

// function handlePlayButton() {
//   if (videoElem.paused) {
//     playVideo();
//   } else {
//     videoElem.pause(); 
//     playButton.classList.remove("playing");
//   }
// }

// var button = document.getElementById('playbutton');
// var vid = document.getElementById('videoPlayer');

// if(button.addEventListener){
// 		button.addEventListener("click", play, false)
// 	}else if(button.attachEvent){
// 		button.attachEvent("onclick", play)
// 	}

// function play() { 
//     if (vid.paused){
//         vid.play(); 
//         button =  ;
//     }else {
//         vid.pause(); 
//         // button.className = "";
//     }
// } 
$(function () {
  $('.feedback__slider').slick({
    prevArrow: '<button class="feedback__btn arrow-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button class="feedback__btn arrow-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

