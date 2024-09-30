"use strict"



const main_slider_1 = new Swiper(".main_slider-1", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 5.7,
        },
        991: {
            slidesPerView: 4.5,
        },
        767: {
            slidesPerView: 3.5,
        },
        576: {
            slidesPerView: 2.5,
        }
    },
    navigation: {
        nextEl: '.main_slider-1-next',
        prevEl: '.main_slider-1-prev',
    },
    pagination: {
        el: '.main-pagination-1',
        clickable: true,
    },
    centeredSlides: true,
});




const main_slider_2 = new Swiper(".main_slider-2", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 5.7,
        },
        991: {
            slidesPerView: 4.5,
        },
        767: {
            slidesPerView: 3.5,
        },
        576: {
            slidesPerView: 2.5,
        }
    },
    navigation: {
        nextEl: '.main_slider-2-next',
        prevEl: '.main_slider-2-prev',
    },
    pagination: {
        el: '.main-pagination-2',
        clickable: true,
    },
    centeredSlides: true,
});

const main_slider_3 = new Swiper(".main_slider-3", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 5.7,
        },
        991: {
            slidesPerView: 4.5,
        },
        767: {
            slidesPerView: 3.5,
        },
        576: {
            slidesPerView: 2.5,
        }
    },
    navigation: {
        nextEl: '.main_slider-3-next',
        prevEl: '.main_slider-3-prev',
    },
    pagination: {
        el: '.main-pagination-3',
        clickable: true,
    },
    centeredSlides: true,
});

const main_slider_4 = new Swiper(".main_slider-4", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 5.7,
        },
        991: {
            slidesPerView: 4.5,
        },
        767: {
            slidesPerView: 3.5,
        },
        576: {
            slidesPerView: 2.5,
        }
    },
    navigation: {
        nextEl: '.main_slider-4-next',
        prevEl: '.main_slider-4-prev',
    },
    pagination: {
        el: '.main-pagination-4',
        clickable: true,
    },
    centeredSlides: true,
});


const main_slider_review = new Swiper(".main_slider-review", {
    slidesPerView: 1.2,
    spaceBetween: 0,
    autoplay: {
        delay: 10000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 4.5,
            // centeredSlides: false,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3.8,
            // centeredSlides: false,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            // centeredSlides: false,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2.3,
            spaceBetween: 20,

        },
        576: {
            slidesPerView: 1.4,
        }
    },
    navigation: {
        nextEl: '.main_slider-review-next',
        prevEl: '.main_slider-review-prev',
    },
    pagination: {
        el: '.main_slider-review-pagination-1',
        clickable: true,
    },
    centeredSlides: true,
});




const main_slider_photo = new Swiper(".main_slider-photo", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 5,
            centeredSlides: false,
        },
        991: {
            slidesPerView: 4,
            centeredSlides: false,
        },
        767: {
            slidesPerView: 3.5,

        },
        576: {
            slidesPerView: 2.5,
        }
    },
    navigation: {
        nextEl: '.main_slider-photo-next',
        prevEl: '.main_slider-photo-prev',
    },
    pagination: {
        el: '.main_slider-photo-pagination-1',
        clickable: true,
    },
    centeredSlides: true,
});



const main_slider_info_text = new Swiper(".main_slider-info-text", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    pagination: {
        el: '.main-pagination-slider-info-text',
    },
});


const main_slider_product_reviews = new Swiper(".main_slider-product_reviews", {
    direction: "horizontal",
    slidesPerView: 1,
    breakpoints: {
        767: {
            slidesPerView: 3,
            direction: "vertical",
        },
    },
    pagination: {
        el: '.main-pagination-slider-product_reviews',
        clickable: true,
    },
    centeredSlides: false,
});



const product_slider_videos = new Swiper(".product_slider-videos", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 6,
            centeredSlides: false,
        },
        1300: {
            slidesPerView: 5,
            centeredSlides: false,
        },
        991: {
            centeredSlides: false,
        },
        767: {
            slidesPerView: 3,

        },
        576: {
            slidesPerView: 2.5,
        }
    },
    pagination: {
        el: '.product_video-slider-pagination',
        clickable: true,
    },
    centeredSlides: true,
});




const main_sliderAdvertisment_block_slider_1 = new Swiper(".main_sliderAdvertisment-block-slider-1", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 4,
            centeredSlides: false,
        },
        991: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        767: {
            slidesPerView: 2.5,
            centeredSlides: true,

        },
        576: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    },
    navigation: {
        nextEl: '.main_sliderAdvertisment-block-slider-next',
        prevEl: '.main_sliderAdvertisment-block-slider-prev',
    },
    pagination: {
        el: '.main_sliderAdvertisment-block-slider',
        clickable: true,
    },
    centeredSlides: false,
});


const main_sliderAdvertisment_block_slider_2 = new Swiper(".main_sliderAdvertisment-block-slider-2", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 4,
            centeredSlides: false,
        },
        991: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        767: {
            slidesPerView: 2.5,

        },
        576: {
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: '.main_sliderAdvertisment-block-slider-next',
        prevEl: '.main_sliderAdvertisment-block-slider-prev',
    },
    pagination: {
        el: '.main_sliderAdvertisment-block-slider',
        clickable: true,
    },
    centeredSlides: true,
});


const configuration_variants_1 = new Swiper(".configuration-variants-1", {
    slidesPerView: 4,
    spaceBetween: 10,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    speed: 500,
    breakpoints: {
        1660: {
            slidesPerView: 5,
            centeredSlides: false,
            spaceBetween: 27.5,
        },
        1280: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 27.5,
        },
        991: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    navigation: {
        nextEl: '.configuration-variants-1-next',
        prevEl: '.configuration-variants-1-prev',
    },
    pagination: {
        el: '.configuration-variants-pagination-1',
        clickable: true,
    },
    centeredSlides: false,
});

const configuration_variants_2 = new Swiper(".configuration-variants-2", {
    slidesPerView: 4,
    spaceBetween: 10,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    speed: 500,
    breakpoints: {
        1660: {
            slidesPerView: 5,
            centeredSlides: false,
            spaceBetween: 27.5,
        },
        1280: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 27.5,
        },
        991: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    navigation: {
        nextEl: '.configuration-variants-2-next',
        prevEl: '.configuration-variants-2-prev',
    },
    pagination: {
        el: '.configuration-variants-pagination-2',
        clickable: true,
    },
    centeredSlides: false,
});


const main_gallery_videos_product_slider = new Swiper(".main-gallery-videos-product-slider", {
    slidesPerView: 4,
    spaceBetween: 10,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    speed: 500,
    breakpoints: {
        1660: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    navigation: {
        nextEl: '.main-gallery-videos-product-next',
        prevEl: '.main-gallery-videos-product-prev',
    },
    pagination: {
        el: '.main-gallery-videos-product-pagination',
        clickable: true,
    },
    centeredSlides: false,
});





const blog_slider_1 = new Swiper(".blog-slider-1", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 6,
            centeredSlides: false,
        },
        1300: {
            slidesPerView: 5,
            centeredSlides: false,
        },
        991: {
            centeredSlides: false,
        },
        767: {
            slidesPerView: 3,

        },
        576: {
            slidesPerView: 2.5,
        }
    },
    pagination: {
        el: '.blog-pagination-1',
        clickable: true,
    },
    centeredSlides: true,
});
const blog_slider_2 = new Swiper(".blog-slider-2", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 6,
            centeredSlides: false,
        },
        1300: {
            slidesPerView: 5,
            centeredSlides: false,
        },
        991: {
            centeredSlides: false,
        },
        767: {
            slidesPerView: 3,

        },
        576: {
            slidesPerView: 2.5,
        }
    },
    pagination: {
        el: '.blog-pagination-2',
        clickable: true,
    },
    centeredSlides: true,
});

const article_blog_slider = new Swiper(".article-blog-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1300: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        991: {
            centeredSlides: false,
        },
        767: {
            slidesPerView: 2,

        },
        576: {
            slidesPerView: 1,
        }
    },
    navigation: {
        nextEl: '.article-blog-slider-next',
        prevEl: '.article-blog-slider-prev',
    },
    pagination: {
        el: '.article-blog-slider-pagination',
        clickable: true,
    },
    centeredSlides: true,
});


const article_product_slider = new Swiper(".article-product-slider", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1300: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        991: {
            centeredSlides: false,
        },
        767: {
            slidesPerView: 2,

        },
        576: {
            slidesPerView: 2.5,
        }
    },
    navigation: {
        nextEl: '.article-product-slider-next',
        prevEl: '.article-product-slider-prev',
    },
    pagination: {
        el: '.article-product-slider-pagination',
        clickable: true,
    },
    centeredSlides: true,
});



var main_vertical_sliders_1 = new Swiper(".main-vertical-sliders-1", {
    slidesPerView: 2,
    spaceBetween: 30,
    grid: {
        rows: 1,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    centeredSlides: true,

    breakpoints: {
        998: {
            spaceBetween: 0,
            slidesPerView: 1,
            grid: {
                rows: 3,
            },
            loop: false,
        },
        767: {
            slidesPerView: 2,
            grid: {
                rows: 1,
            },
        },
        576: {
            slidesPerView: 4,
            grid: {
                rows: 1,
            },
        }
    },

    spaceBetween: 30,
    pagination: {
        el: ".main-vertical-sliders-1-pagination",
        clickable: true,
    },
    centeredSlides: false,
});

var main_vertical_sliders_2 = new Swiper(".main-vertical-sliders-2", {
    slidesPerView: 2,
    grid: {
        rows: 1,
    },
    stopOnLastSlide: false,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        998: {
            spaceBetween: 0,
            slidesPerView: 1,
            grid: {
                rows: 3,
            },
            loop: false,
        }
    },

    spaceBetween: 30,
    pagination: {
        el: ".main-vertical-sliders-2-pagination",
        clickable: true,
    },
    centeredSlides: false,
});



var slider_video_gallery_thumb = new Swiper(".slider_video_gallery-thumb", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".main-gallery-videos-product-next",
        prevEl: ".main-gallery-videos-product-prev",
    },
    breakpoints: {
        1300: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        991: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        767: {
            slidesPerView: 2,

        },
        576: {
            slidesPerView: 2.5,
        }
    }

});
var swiper2 = new Swiper(".slider_video_gallery", {
    spaceBetween: 10,
    slidesPerView: 1.5,
    centeredSlides: true,
    stopOnLastSlide: false,
    loop: true,
    thumbs: {
        swiper: slider_video_gallery_thumb,
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            centeredSlides: false,
        }
    },
    pagination: {
        el: ".main-gallery-videos-product-pagination",
        clickable: true,
    },
});

const main_gallery_products_slider = new Swiper(".main-gallery-products-slider", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    stopOnLastSlide: false,
    disableOnInteraction: false,
    loop: true,
    speed: 1000,
    breakpoints: {
        1580: {
            slidesPerView: 5.7,
        },
        991: {
            slidesPerView: 4.5,
        },
        767: {
            slidesPerView: 3.5,
        },
        576: {
            slidesPerView: 2.5,
        }
    },
    navigation: {
        nextEl: '.main-gallery-products-slider-next',
        prevEl: '.main-gallery-products-slider-prev',
    },
    pagination: {
        el: '.main-gallery-products-slider-pagination',
        clickable: true,
    },
    centeredSlides: true,
});












const youtubeScriptTag = document.createElement('script');
youtubeScriptTag.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(youtubeScriptTag);

const ytLinks = document.querySelectorAll('.video_yt[urlYT]');
if (ytLinks.length > 0) {
    ytLinks.forEach(ytLink => {
        const exampleAttr = ytLink.getAttribute("urlYT");
        console.log("ID: " + exampleAttr);

        window.onYouTubeIframeAPIReady = () => {
            const youtubeSlide = document.getElementById('youtube-slide');
            const player = new YT.Player('player', {
                videoId: 'y6oMutwJQCw',
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: (event) => {
                        const youtubeSlide = document.getElementById('youtube-slide');
                        let isVideoPlaying = false;

                        youtubeSlide.addEventListener('click', () => {
                            if (isVideoPlaying) {
                                event.target.stopVideo();
                            } else {
                                event.target.playVideo();
                            }

                            isVideoPlaying = !isVideoPlaying;
                        });
                    }
                }
            });

        }

    });
}










const q = selector => document.querySelector(selector),
    on = 'addEventListener'

const fullscreen = () => {
    var elem = q('#productVideoContainer')
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}
q('#productVideoBtnPlay')[on]('click', () => productVideoPlayer.play())
q('#productVideoBtnStop')[on]('click', () => productVideoPlayer.pause())

const productVideoBtnPlayStyle = document.getElementById("productVideoBtnPlay")
const productVideoBtnStopStyle = document.getElementById("productVideoBtnStop")

productVideoBtnPlayStyle.addEventListener('click', function () {
    productVideoBtnStopStyle.classList.remove('disableBtnPlayerProduct');
    productVideoBtnPlayStyle.classList.remove('activeBtnPlayerProduct');
    productVideoBtnStopStyle.classList.add('activeBtnPlayerProduct');
    productVideoBtnPlayStyle.classList.add('disableBtnPlayerProduct');
});
productVideoBtnStopStyle.addEventListener('click', function () {
    productVideoBtnStopStyle.classList.remove('activeBtnPlayerProduct');
    productVideoBtnPlayStyle.classList.remove('disableBtnPlayerProduct');
    productVideoBtnStopStyle.classList.add('disableBtnPlayerProduct');
    productVideoBtnPlayStyle.classList.add('activeBtnPlayerProduct');

});





