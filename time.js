function calculateTimeDifference(dateStr) {
    const currentTime = new Date();
    const [day, month, year] = dateStr.split('-').map(Number);
    const inputTime = new Date(year, month - 1, day);
    
    let delta;
    if (currentTime > inputTime) {
        console.log("    Past");
        delta = new Date(currentTime - inputTime);
    } else {
        console.log("    Future");
        delta = new Date(inputTime - currentTime);
    }
    
    const years = Math.floor(delta / (1000 * 60 * 60 * 24 * 365));
    const remainingDays = Math.floor(delta / (1000 * 60 * 60 * 24)) % 365;
    const months = Math.floor(remainingDays / 30);
    const days = remainingDays % 30;
    const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    
    console.log(` years: ${years}\n months: ${months}\n days: ${days}\n hours: ${hours}\n minutes: ${minutes}`);
}

function startInputLoop() {
    const input = prompt("(dd-mm-yyyy): ");
    if (input) {
        calculateTimeDifference(input);
        console.log("");
        setTimeout(startInputLoop, 0); // Continue the loop
    }
}

startInputLoop();
