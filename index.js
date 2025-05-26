let homeScore = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScore = 0;
let guestScoreEl = document.getElementById("guest-score");


function incrementHomeScoreByOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore
}


function incrementHomeScoreByTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function incrementHomeScoreByThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function incrementGuestScoreByOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore
}


function incrementGuestScoreByTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function incrementGuestScoreByThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function resetScore() {
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
    
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    
}