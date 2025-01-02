//gsap.registerPlugin(ScrollTrigger)
    gsap.to("#main",{
        scrollTrigger:{
            trigger: "#title",
            start: "top 250px", //"top center", "10px 80%"
            end: "bottom 100px",//"+=200"
            toggleActions: "restart restart pause pause",//play, pause, resume, reverse, complete, restart, reset, or none.
            scrub: 1, //1 sec, or  srub:true start到end的時間
            //horizontal: true,
            markers: true
            },
            duration: 5//no use if scrub:1
        });
            //toggleActions:
            //第一個參數代表: onEnter - 向下滾動，目標啟動點 與 視窗捲軸開始
            //第二個參數代表: onLeave - 向下滾動，目標結束點 與 視窗捲軸結束
            //第三個參數代表: onEnterBack - 向上滾動，目標結束點 與 視窗捲軸結束
            //第四個參數代表: onLeaveBack - 向上滾動，目標啟動點 與 視窗捲軸開始
             
    gsap.from("#right",{
        x: 300,
            scrollTrigger:{
                trigger: "#title",
                start: "top 250px", //"top center", "10px 80%"
                end: "bottom 100px",//"+=200"
                toggleActions: "restart restart pause pause",//play, pause, resume, reverse, complete, restart, reset, or none.
                scrub: 1,
                markers: true
            },
        });
    
    gsap.from("#left",{
        x: -300,
        scrollTrigger:{
            trigger: "#title",
            start: "top 250px", //"top center", "10px 80%"
            end: "bottom 100px",//"+=200"
            toggleActions: "restart restart pause pause",//play, pause, resume, reverse, complete, restart, reset, or none.
            scrub: 1,
            markers: true
            },
        });
