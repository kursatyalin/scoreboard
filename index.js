// index.js
(function() {
    let homeScore = 0;
    const homeScoreEl = document.getElementById("home-score");
    let guestScore = 0;
    const guestScoreEl = document.getElementById("guest-score");

    function incrementScore(team, points) {
        if (team === 'home') {
            homeScore += points;
            homeScoreEl.textContent = homeScore;
        } else {
            guestScore += points;
            guestScoreEl.textContent = guestScore;
        }
    }

    function resetScores() {
        homeScore = guestScore = 0;
        homeScoreEl.textContent = guestScoreEl.textContent = 0;
    }

    // Make functions available globally
    window.incrementScore = incrementScore;
    window.resetScores = resetScores;
})();