let aap = document.querySelector('#aap');
let banaan = document.querySelector('#banaan');
let heart = document.querySelector('#heart');
let play = document.querySelector('#play');

//

let score = 0; 

function food() {
    banaan.src = "images/banaan.png";
    aap.src = "images/aapMetBanaan.png";
    updateScore(1); 
    setTimeout(function() {
        aap.src = "images/aap.png";
    }, 5000);
}

banaan.addEventListener('click', food);

function love() {
    heart.src = "images/heart.png";
    aap.src = "images/aapMetHartjes.png";
    updateScore(2); 
    setTimeout(function() {
        aap.src = "images/aap.png";
    }, 5000);
}

heart.addEventListener('click', love)

function playGame() {
    play.src = "images/play.png";
    aap.src = "images/monkWithBall.png";
    updateScore(3); 
    setTimeout(function() {
        aap.src = "images/aap.png";
    }, 5000);
}

play.addEventListener('click', playGame);

function updateScore(points) {
    score += points; 
    document.getElementById("score").textContent = score; 
    
    if (score >= 100) {
        extraFunction1();
        extraFunction2();
        extraFunction3();
        extraFunction4();
    }
}

function extraFunction1() {
    document.getElementById("letGo").style.display = "block";
}

function extraFunction2() {
    document.getElementById("LetGoCircus").style.display = "block";
}

function extraFunction3() {
    document.getElementById("release").style.display = "block";
}

function extraFunction4() {
    document.getElementById("circus").style.display = "block";
}

let letGo = document.getElementById('letGo');
let letGoCircus = document.getElementById('LetGoCircus');

letGo.addEventListener('click', function() {
    window.location.href = 'release.html'; 
});

letGoCircus.addEventListener('click', function() {
    window.location.href = 'circus.html'; 
});











