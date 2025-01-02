
//gsap.registerPlugin(ScrollTrigger)
    gsap.from("#pic",{
        scrollTrigger:{
            trigger: "#two",
            start: "top 400px",
            end: "bottom 800px",
            toggleActions: "restart restart pause pause",//play, pause, resume, reverse, complete, restart, reset, or none.
            scrub: 1, //1 sec, or  srub:true start到end的時間
            //horizontal: true,
            markers: false
        },
        duration: 0.5,//no use if scrub:1
        scale:0.5,
        opacity:0,
    });
    //toggleActions:
    //第一個參數代表: onEnter - 向下滾動，目標啟動點 與 視窗捲軸開始
    //第二個參數代表: onLeave - 向下滾動，目標結束點 與 視窗捲軸結束
    //第三個參數代表: onEnterBack - 向上滾動，目標結束點 與 視窗捲軸結束
    //第四個參數代表: onLeaveBack - 向上滾動，目標啟動點 與 視窗捲軸開始

    //gsap.registerPlugin(ScrollTrigger)
    gsap.from("#pic2",{    
        scrollTrigger:{
            trigger: "#three",
            start: "top 400px",
            end: "bottom 800px",
            toggleActions: "restart restart pause pause",//play, pause, resume, reverse, complete, restart, reset, or none.
            scrub: 1, //1 sec, or  srub:true start到end的時間
            //horizontal: true,
            markers: false
        },
        duration: 0.5,//no use if scrub:1
        opacity:0,
        y:100,

    });
    //toggleActions:
    //第一個參數代表: onEnter - 向下滾動，目標啟動點 與 視窗捲軸開始
    //第二個參數代表: onLeave - 向下滾動，目標結束點 與 視窗捲軸結束
    //第三個參數代表: onEnterBack - 向上滾動，目標結束點 與 視窗捲軸結束
    //第四個參數代表: onLeaveBack - 向上滾動，目標啟動點 與 視窗捲軸開始