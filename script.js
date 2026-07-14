document.addEventListener("DOMContentLoaded", function(){
    console.log("Birthday Page Loaded 🎉");
});

const startBtn = document.getElementById("startBtn");

if(startBtn){
    startBtn.addEventListener("click", () => {
        const now = new Date();
        const birthdayTarget = new Date(2026, 6, 19, 0, 0, 0);

        if (now < birthdayTarget) {
            alert("等到生日再打开吧");
            return; 
        }

        const letterPage = document.getElementById("letter");
        if(letterPage) letterPage.style.display = "flex"; 

        setTimeout(() => {
            letterPage.scrollIntoView({ behavior:"smooth" });
            startTyping();
        }, 50);
    });
}

const message = `
亲爱的 李媛媛：

今天是你的生日。
十九年前，
一个特别的女孩来到了这个世界。
希望未来的每一天，
你都能保持喜欢的样子。
愿你被温柔对待，
也愿你永远勇敢。
愿所有努力都有收获，
所有期待都能实现。

生日快乐 🎉
`;

let typingStarted = false;

function startTyping(){
    if(typingStarted) return;
    typingStarted = true;
    let index = 0;
    const box = document.getElementById("typingText");

    function typing(){
        if(index < message.length){
            box.innerHTML += message[index].replace("\n", "<br>");
            index++;
            setTimeout(typing, 80);
        } else {
            const pagesToReveal = ["timeline", "wish", "giftPage"];
            pagesToReveal.forEach(id => {
                const el = document.getElementById(id);
                if(el) el.style.display = "flex"; 
            });
        }
    }
    typing();
}

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createStars(){
    stars = [];
    let count = Math.floor(window.innerWidth / 5);
    for(let i=0; i<count; i++){
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.02 + 0.005
        });
    }
}
createStars();

function drawStars(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();

        star.size += star.speed;
        if(star.size > 3){
            star.speed = -Math.abs(star.speed);
        }
        if(star.size < 0.5){
            star.speed = Math.abs(star.speed);
        }
    });
    requestAnimationFrame(drawStars);
}
drawStars();

const petalBox = document.getElementById("petals");

function createPetal(){
    if(!petalBox) return;
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random()*100 + "%";
    const size = Math.random()*15 + 10;
    petal.style.width = size + "px";
    petal.style.height = size + "px";
    const duration = Math.random()*5 + 5;
    petal.style.animationDuration = duration + "s";
    petal.style.transform = `rotate(${Math.random()*360}deg)`;
    petalBox.appendChild(petal);
    setTimeout(() => { petal.remove(); }, duration*1000);
}
setInterval(createPetal, 300);

document.addEventListener("click", function(e){
    const heart = document.createElement("div");
    heart.innerHTML = "🎉";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = Math.random()*20 + 15 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.animation = "heartFloat 1.5s ease forwards";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 1500);
});

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

if(musicBtn){
    musicBtn.addEventListener("click", () => {
        if(!playing){
            music.play().then(() => {
                playing = true;
                musicBtn.innerHTML = "⏸️";
            }).catch(() => {
                alert("请再次点击播放音乐");
            });
        } else {
            music.pause();
            playing = false;
            musicBtn.innerHTML = "🎵";
        }
    });
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

if(topBtn){
    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

const heartStyle = document.createElement("style");
heartStyle.innerHTML = `
@keyframes heartFloat{
    0%{ opacity:1; transform: translateY(0) scale(1); }
    100%{ opacity:0; transform: translateY(-120px) scale(1.8); }
}
`;
document.head.appendChild(heartStyle);

window.addEventListener("load", () => {
    const gift = document.querySelector("#gift");
    const openGift = document.querySelector("#openGift");

    if(openGift && gift){
        openGift.onclick = function(){
            gift.classList.add("open");
            setTimeout(() => {
                const final = document.querySelector("#finalPage");
                if(final){
                    final.style.display = "flex";
                    setTimeout(() => {
                        final.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                }
                startFirework();
            }, 1000);
        };
    }
});

function startFirework(){
    const area = document.getElementById("fireworkArea");
    if(!area) return;
    const canvas = document.createElement("canvas");
    area.appendChild(canvas);
    canvas.width = area.clientWidth;
    canvas.height = area.clientHeight;
    const ctx = canvas.getContext("2d");
    let particles = [];

    function createExplosion(x, y){
        for(let i=0; i<80; i++){
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random()*5 + 2;
            particles.push({
                x: x,
                y: y,
                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed,
                life: 100
            });
        }
    }

    function randomFirework(){
        createExplosion(Math.random() * canvas.width, Math.random() * canvas.height * 0.7);
    }
    setInterval(randomFirework, 800);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI*2);
            ctx.fillStyle = "white";
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;
            p.dy += 0.05;
            p.life--;
            if(p.life <= 0){
                particles.splice(index, 1);
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

const finalPage = document.getElementById("finalPage");

if(finalPage){
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                finalPage.classList.add("show");
            }
        });
    }, { threshold: 0.5 });
    observer.observe(finalPage);
}

function checkBirthday(){
    const now = new Date();
    const birthdayText = document.querySelector(".birthday");
    if(!birthdayText) return;

    if(now.getMonth() === 6 && now.getDate() === 19){
        birthdayText.innerHTML = "🎂 今天就是你的生日！";
        return;
    }

    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const birthdayTarget = new Date(2026, 6, 19);

    if (todayMidnight < birthdayTarget) {
        const diff = birthdayTarget - todayMidnight;
        const days = Math.round(diff / (1000 * 60 * 60 * 24));
        
        if (days === 1) {
            birthdayText.innerHTML = "✨ 明天就是你的生日啦！🎉";
        } else {
            birthdayText.innerHTML = `距离生日还有 ${days} 天 🎉`;
        }
    } else {
        const diff = todayMidnight - birthdayTarget;
        const days = Math.round(diff / (1000 * 60 * 60 * 24));
        
        birthdayText.innerHTML = `十九岁生日已经过了 ${days} 天 🎉`;
    }
}
checkBirthday();

const finalTitle = document.querySelector(".finalTitle");

if(finalTitle){
    let count = 0;
    finalTitle.addEventListener("click", () => {
        count++;
        if(count >= 5){
            const secret = document.getElementById("secret");
            if(secret){
                secret.style.display = "block";
            }
            count = 0;
        }
    });
}

const secret = document.getElementById("secret");
if(secret){
    secret.addEventListener("click", () => {
        secret.style.display = "none";
    });
}

document.addEventListener("touchstart", function(){
    document.body.classList.add("mobile");
}, { once:true });

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

let lastTouchEnd = 0;
document.addEventListener("touchend", function(event){
    const now = Date.now();
    if(now - lastTouchEnd <= 300){
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

document.addEventListener("visibilitychange", () => {
    if(document.hidden){
        document.title = "回来继续看生日礼物 🎉";
    } else {
        document.title = "Happy Birthday 李媛媛 🎉";
    }
});