//your JS code here. If required.

function updateTimer() {
    const timerElement = document.getElementById('timer');
    const currentDate = new Date();
    
    // Format date and time
    const formattedTime = currentDate.toLocaleString(); // Adjusts based on system locale
    
    timerElement.textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the time immediately when the page loads
updateTimer();
