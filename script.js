let centerItems = document.querySelectorAll(".centerItem");
let dots = document.querySelectorAll(".dots");


let dotsIntel = [
    {
        height : "50vh" ,
        width : "50vh" ,
        x : "-50" ,
        width1 : "30px" ,
    }
]


centerItems.forEach((val , idx)=>{
    val.addEventListener("click" , ()=>{
        gsap.to(dots[idx] , {
            height : `${dotsIntel[idx].height}`
        })
    })
})


let imageFn = () => {
    let imageScroll = ["0%", "-95%", "-190%"];
    let curRImg = 0;
    let leftBtn = document.querySelector(".l");
    let rightBtn = document.querySelector(".r");
    rightBtn.addEventListener("click", () => {
        if (curRImg >= 2) {
            curRImg = 0;
            gsap.to(".image", {
                left: `${imageScroll[curRImg]}`,
                duration: 1,
                ease: "back.inOut"
            })
        }
        else {
            curRImg = curRImg + 1;
            console.log(curRImg)
            gsap.to(".image", {
                left: `${imageScroll[curRImg]}`,
                duration: 1,
                ease: "back.inOut"
            })
        }
    })
    leftBtn.addEventListener("click", () => {
        if (curRImg == 0) {
            curRImg = 2;
            gsap.to(".image", {
                left: `${imageScroll[curRImg]}`,
                duration: 1,
                ease: "back.inOut"
            })

        }
        else {
            curRImg = curRImg - 1;
            gsap.to(".image", {
                left: `${imageScroll[curRImg]}`,
                duration: 1,
                ease: "back.inOut"
            })
        }
    })
}
imageFn();

let textFn = () => {
    curTxt = 0;
    let txtScroll = ["0%", "-100%", "-200%"];
    let rightBtn = document.querySelector(".r");
    let leftBtn = document.querySelector(".l");
    rightBtn.addEventListener("click", () => {
        if (curTxt >= 2) {
            curTxt = 0;
            gsap.to(".text", {
                top: `${txtScroll[curTxt]}`,
                duration: 1,
                ease: "back.inOut"
            })
        }
        else {
            curTxt = curTxt + 1;
            console.log(curTxt)
            gsap.to(".text", {
                top: `${txtScroll[curTxt]}`,
                duration: 1,
                ease: "back.inOut"
            })
        }
    })
    leftBtn.addEventListener("click", () => {
        if (curTxt == 0) {
            curTxt = 2;
            gsap.to(".text", {
                top: `${txtScroll[curTxt]}`,
                duration: 1,
                ease: "back.inOut"
            })

        }
        else {
            curTxt = curTxt - 1;
            gsap.to(".text", {
                top: `${txtScroll[curTxt]}`,
                duration: 1,
                ease: "back.inOut"
            })
        }
    })
}
textFn();

let imageAutoFn = () => {
    let tl = gsap.timeline({ repeat: -1 });
    tl.to(".image", {
        left: "-95%",
        delay: 3,
        duration: 1,
        ease: "back.inOut"
    }, "a").to(".image", {
        left: "-190%",
        delay: 3,
        duration: 1,
        ease: "back.inOut"
    }, "b").to(".image", {
        left: "0%",
        delay: 3,
        duration: 1,
        ease: "back.inOut"
    }, "c").to(".text", {
        top: "-100%",
        delay: 3,
        duration: 1,
        ease: "back.inOut"
    }, "a").to(".text", {
        top: "-200%",
        delay: 3,
        duration: 1,
        ease: "back.inOut"
    }, "b").to(".text", {
        top: "0%",
        delay: 3,
        duration: 1,
        ease: "back.inOut"
    }, "c")
}
imageAutoFn();

let page2NavContentFn = () => {
    let page2NavContentScroll = ["0%", "-97%", "-194%", "-292%", "-388%", "-485%"]
    let navColorOut = () => {
        gsap.set(page2NavH3, {
            color: "grey"
        })
    }
    let active = 0;
    let page2NavH3 = document.querySelectorAll(".page2Nav h3");
    gsap.set(page2NavH3[active], {
        color: "#000"
    })
    page2NavH3.forEach((item, index) => {
        item.addEventListener("click", () => {
            navColorOut();
            console.log(index);
            gsap.to(item, {
                color: "#000"
            })
            gsap.to(".page2NavContent", {
                left: `${page2NavContentScroll[index]}`,
                ease: "back.inOut",
                duration: .7
            })
        })
    })
}
page2NavContentFn();

