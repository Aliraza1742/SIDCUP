var crsr = document.querySelector("#cursor")
var blr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+40 + "px"
    crsr.style.top = dets.y+"px"
    blr.style.left = dets.x-145 +"px"
    blr.style.top = dets.y-145 +"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"115px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -100%",
        scrub:2
    }
})

var all_h4_nav = document.querySelectorAll("#nav h4")
all_h4_nav.forEach(function(elem){
    console.log(elem)
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.from("#About-section img,#About",{
    y:50, 
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"About-section",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }

})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page-4 h1",
        scroller:"body",
        start:"top 50%",
        end:"top 60%",
        scrub:3,
    }
})