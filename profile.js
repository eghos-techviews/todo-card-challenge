const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);