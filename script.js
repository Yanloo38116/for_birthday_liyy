/* =====================================
   页面加载
===================================== */


document.addEventListener(
    "DOMContentLoaded",
    function(){


        console.log(
            "Birthday Page Loaded ❤️"
        );


    }
);






/* =====================================
   开启按钮
===================================== */


const startBtn = document.getElementById(
    "startBtn"
);



if(startBtn){


    startBtn.addEventListener(
        "click",
        ()=>{


            document
            .getElementById("letter")
            .scrollIntoView({

                behavior:"smooth"

            });



            startTyping();


        }
    );


}







/* =====================================
   打字机效果
===================================== */


const message = `

亲爱的 XX：

今天是你的生日。
十九年前，
一个特别的女孩来到了这个世界。
希望未来的每一天，
你都能保持喜欢的样子。
愿你被温柔对待，
也愿你永远勇敢。
愿所有努力都有收获，
所有期待都能实现。

生日快乐 ❤️

`;



let typingStarted=false;



function startTyping(){


    if(typingStarted)

        return;



    typingStarted=true;



    let index=0;


    const box =
        document.getElementById(
            "typingText"
        );



    function typing(){


        if(index < message.length){


            box.innerHTML +=
                message[index]
                .replace(
                    "\n",
                    "<br>"
                );


            index++;


            setTimeout(
                typing,
                80
            );


        }


    }



    typing();


}







/* =====================================
   星空背景
===================================== */


const canvas =
document.getElementById(
    "starCanvas"
);



const ctx =
canvas.getContext(
    "2d"
);



let stars=[];



function resizeCanvas(){


    canvas.width =
        window.innerWidth;


    canvas.height =
        window.innerHeight;


}



resizeCanvas();



window.addEventListener(
    "resize",
    resizeCanvas
);






/*
    创建星星
*/


function createStars(){


    stars=[];



    let count =
        Math.floor(
            window.innerWidth / 5
        );



    for(
        let i=0;
        i<count;
        i++
    ){


        stars.push({


            x:
            Math.random()
            *
            canvas.width,



            y:
            Math.random()
            *
            canvas.height,



            size:
            Math.random()
            *
            2
            +
            0.5,



            speed:
            Math.random()
            *
            0.02
            +
            0.005



        });


    }


}



createStars();






/*
    绘制星空
*/


function drawStars(){


    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );



    stars.forEach(
        star=>{


            ctx.beginPath();



            ctx.arc(

                star.x,

                star.y,

                star.size,

                0,

                Math.PI*2

            );



            ctx.fillStyle =
            "rgba(255,255,255,0.8)";



            ctx.fill();




            star.size +=
            star.speed;



            if(
                star.size>3
            ){


                star.speed =
                -Math.abs(
                    star.speed
                );


            }



            if(
                star.size<0.5
            ){


                star.speed =
                Math.abs(
                    star.speed
                );


            }



        }
    );



    requestAnimationFrame(
        drawStars
    );


}




drawStars();
/* =====================================
   飘落花瓣效果
===================================== */


const petalBox =
document.getElementById(
    "petals"
);



function createPetal(){


    if(!petalBox)

        return;



    const petal =
    document.createElement(
        "div"
    );



    petal.className =
        "petal";



    // 随机位置

    petal.style.left =
        Math.random()*100
        + "%";



    // 随机大小

    const size =
        Math.random()*15+10;



    petal.style.width =
        size+"px";


    petal.style.height =
        size+"px";



    // 随机速度

    const duration =
        Math.random()*5+5;



    petal.style.animationDuration =
        duration+"s";



    // 随机旋转

    petal.style.transform =
        `
        rotate(
        ${Math.random()*360}
        deg)
        `;



    petalBox.appendChild(
        petal
    );



    // 自动删除


    setTimeout(
        ()=>{


            petal.remove();


        },

        duration*1000

    );



}




// 每隔一段时间生成

setInterval(
    createPetal,
    300
);








/* =====================================
   点击爱心粒子
===================================== */


document.addEventListener(
    "click",
    function(e){



        const heart =
        document.createElement(
            "div"
        );



        heart.innerHTML =
            "❤️";



        heart.style.position =
            "fixed";



        heart.style.left =
            e.clientX+"px";



        heart.style.top =
            e.clientY+"px";



        heart.style.fontSize =
            Math.random()*20+15
            +"px";



        heart.style.pointerEvents =
            "none";



        heart.style.zIndex =
            "999";



        heart.style.animation =
            "heartFloat 1.5s ease forwards";



        document.body.appendChild(
            heart
        );



        setTimeout(
            ()=>{


                heart.remove();


            },

            1500
        );


    }
);









/* =====================================
   音乐控制
===================================== */


const music =
document.getElementById(
    "birthdayMusic"
);



const musicBtn =
document.getElementById(
    "musicBtn"
);



let playing=false;



if(musicBtn){



musicBtn.addEventListener(
    "click",
    ()=>{


        if(!playing){



            music.play()
            .then(()=>{


                playing=true;


                musicBtn.innerHTML =
                    "⏸️";



            })
            .catch(
                ()=>{


                    alert(
                    "请再次点击播放音乐"
                    );


                }
            );



        }

        else{


            music.pause();


            playing=false;


            musicBtn.innerHTML =
                "🎵";


        }



    }
);



}









/* =====================================
   返回顶部
===================================== */


const topBtn =
document.getElementById(
    "topBtn"
);



window.addEventListener(
    "scroll",
    ()=>{


        if(
            window.scrollY>500
        ){


            topBtn.style.display =
            "block";


        }

        else{


            topBtn.style.display =
            "none";


        }



    }
);





if(topBtn){


    topBtn.addEventListener(
        "click",
        ()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        }
    );


}








/* =====================================
   爱心漂浮动画
===================================== */


const heartStyle =
document.createElement(
    "style"
);



heartStyle.innerHTML = `


@keyframes heartFloat{


    0%{


        opacity:1;

        transform:
        translateY(0)
        scale(1);


    }



    100%{


        opacity:0;


        transform:

        translateY(-120px)

        scale(1.8);


    }


}



`;



document.head.appendChild(
    heartStyle
);
/* =====================================
   礼物盒打开（修正版）
===================================== */


window.addEventListener(
"load",
()=>{


    const gift =
    document.querySelector(
        "#gift"
    );


    const openGift =
    document.querySelector(
        "#openGift"
    );



    console.log(
        "gift:",
        gift
    );


    console.log(
        "button:",
        openGift
    );



    if(
        openGift &&
        gift
    ){



        openGift.onclick =
        function(){



            console.log(
                "打开礼物按钮被点击"
            );



            gift.classList.add(
                "open"
            );



            setTimeout(
                ()=>{


                    const final =
                    document.querySelector(
                        "#finalPage"
                    );


                    if(final){


                        final.scrollIntoView({

                            behavior:
                            "smooth"


                        });


                    }



                    startFirework();



                },

                1000

            );



        };



    }



});


/* =====================================
   烟花 Canvas
===================================== */


function startFirework(){



    const area =
    document.getElementById(
        "fireworkArea"
    );



    if(!area)

        return;



    const canvas =
    document.createElement(
        "canvas"
    );



    area.appendChild(
        canvas
    );



    canvas.width =
        area.clientWidth;



    canvas.height =
        area.clientHeight;




    const ctx =
    canvas.getContext(
        "2d"
    );




    let particles=[];






    function createExplosion(
        x,
        y
    ){



        for(
            let i=0;
            i<80;
            i++
        ){


            const angle =
                Math.random()
                *
                Math.PI
                *
                2;



            const speed =
                Math.random()*5+2;



            particles.push({


                x:x,


                y:y,


                dx:
                Math.cos(angle)
                *
                speed,


                dy:
                Math.sin(angle)
                *
                speed,



                life:100



            });



        }



    }





    function randomFirework(){


        createExplosion(


            Math.random()
            *
            canvas.width,


            Math.random()
            *
            canvas.height
            *
            0.7


        );



    }





    setInterval(
        randomFirework,
        800
    );







    function animate(){



        ctx.clearRect(

            0,

            0,

            canvas.width,

            canvas.height

        );



        particles.forEach(
            (p,index)=>{


                ctx.beginPath();



                ctx.arc(

                    p.x,

                    p.y,

                    3,

                    0,

                    Math.PI*2

                );



                ctx.fillStyle =
                "white";



                ctx.fill();




                p.x += p.dx;


                p.y += p.dy;



                p.dy +=0.05;



                p.life--;



                if(
                    p.life<=0
                ){


                    particles.splice(
                        index,
                        1
                    );


                }



            }
        );



        requestAnimationFrame(
            animate
        );



    }



    animate();



}








/* =====================================
   最终页面进入检测
===================================== */


const finalPage =
document.getElementById(
    "finalPage"
);



if(finalPage){



    const observer =
    new IntersectionObserver(

        entries=>{


            entries.forEach(
                entry=>{


                    if(
                        entry.isIntersecting
                    ){



                        finalPage
                        .classList.add(
                            "show"
                        );



                    }



                }
            );


        },

        {
            threshold:0.5
        }

    );



    observer.observe(
        finalPage
    );



}
