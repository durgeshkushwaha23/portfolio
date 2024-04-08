

// var locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
//   mobile: {
//      smooth: true
//  },
//  tablet: {
//      smooth: true
//  }

// });
// var locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true
// });











function locomotive(){
  
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive();


Shery.textAnimate(" .page1 h1" , {

    style: 1,
    x:300,
    y: -40,
  
    delay: 0.2,
    duration: 0.8,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 5,
  });

  Shery.textAnimate(" .page1 h2" , {
 
    style: 1,
    delay: 0.1,
    y:-50,
    duration:1.2,
    multiplier: 0.1,
    
  });
 
var tl = gsap.timeline();
tl.to("p",{
    opacity: 1,
    duration:5,
    stagger:1,
    delay:0.2,
    ease: "power2.inOut"
});

tl.to(".page1-animation h3", {
  x: "-200%", // Use 'x' instead of 'transform'
  scrollTrigger: {
    trigger: ".page1-animation",
    scroller:"#main",
    // markers: true,
    start: "top 60%",
    end: "top 10%",
    scrub:2,
  }
});
tl.from(".page1-animation1 h3", {
  x: "-200%", // Use 'x' instead of 'transform'
  scrollTrigger: {
    trigger: ".page1-animation1",
    scroller:"#main",
    // markers: true,
    start: "top 60%",
    end: "top 10%",
    scrub:2,
  }
});

const screenWidth = window.innerWidth;
 
if(screenWidth<600){
  tl.to(".page2 .left2 h1",{
    opacity:1,
    scrollTrigger: {
      trigger: ".page2 .left2",
      scroller:"#main",
      // markers: true,
    
      start: "top 100%",
      end: "top 30%",
      scrub:2,
    }
});}
else{
    tl.to(".page2 .left2 h1",{
      opacity:1,
      scrollTrigger: {
        trigger: ".page2 .left2",
        scroller:"#main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub:2,
      }
  })
  }



tl.to(".page2 .left2 h3",{
  opacity:1,
  scrollTrigger: {
    trigger: ".page2 .left2",
    scroller:"#main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub:2,
  }
})
tl.to(".right2",{
  opacity:1,
  scrollTrigger: {
    trigger: ".right2",
    scroller:"#main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub:2,
  }
})



tl.to(".page2",{
  opacity:1,
  scrollTrigger: {
    trigger: ".page2",
    scroller:"#main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub:2,
  }
})
tl.to(".page3",{
  opacity:1,
  scrollTrigger: {
    trigger: ".page3",
    scroller:"#main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub:2,
  }
})
var right1 = document.querySelector(".right1")
right1.addEventListener("mouseenter",function(){
  right1.style.opacity = 0;
})
right1.addEventListener("mouseleave",function(){
  right1.style.opacity = 1;
})

var  flag = 0;
var menu = document.querySelector(".nav #menu");
var middle = document.querySelector(".nav .middle")
menu.addEventListener("click",function(){
   if(flag==0){
    middle.style.opacity = 1;
    flag=1;
   }
   else if(flag=1){
    middle.style.opacity = 0;
    flag=0;
   }
})


Shery.makeMagnet(".nav a" /* Element to target.*/, {
  //Parameters are optional.
  ease: "all ease 1s",
  duration: 0.7,
});


  // Shery.imageEffect(".right1",{
  //   style:1,
  //   // debug:true,
  //   gooey:true,
  //   // config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.46,"y":0.5}},"shapeEdgeSoftness":{"value":0.42,"range":[0,0.5]},"shapeRadius":{"value":0.5,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2],"_gsap":{"id":39}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]},"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]}}
  //   config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.46,"y":0.5}},"shapeEdgeSoftness":{"value":0.42,"range":[0,0.5]},"shapeRadius":{"value":0.5,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2],"_gsap":{"id":39}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]},"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]}}
  // })


Shery.imageEffect(".s", {
  style: 6,
  debug: true,
  gooey: true,
});



  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 80,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });

 
var skill =   document.querySelector("#skills")  
var education = document.querySelector("#education")  
var h2 = document.querySelector(" .till h2")


education.addEventListener("click",function(){
  h2.innerHTML = "bachelor's degree in EC";
  document.querySelector(".till h3").innerHTML = "passnate about development"
  document.querySelector(".till h4").innerHTML = "higher secondary education"
  document.querySelector(".till h5").innerHTML = "good percentage 86%"
  
});

skill.addEventListener("click",function(){
  h2.innerHTML = "web and user interface Design-Development",
  document.querySelector(".till h3").innerHTML = "website,web Experience,animation"
  document.querySelector(".till h4").innerHTML = "user experience Design-UI/UX"
  document.querySelector(".till h5").innerHTML = "delight the user and make it work"
})


Shery.imageEffect(".elems", {
  style: 2,
  // debug: true,
  gooey: true,
  // config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":3},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":-61.54,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":3113633},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9566516070982747},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.55,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9566516070982747},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});
