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
