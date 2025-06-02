function calculateTimeDifference(dateStr) {
            const currentTime = new Date();
            const [day, month, year] = dateStr.split('-').map(Number);
            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                return "Invalid date format. Please use dd-mm-yyyy.";
            }
            const inputTime = new Date(year, month - 1, day);
            if (isNaN(inputTime.getTime())) {
                return "Invalid date. Please check your input.";
            }

            let delta;
            let period;
            if (currentTime > inputTime) {
                period = "In The Past";
                delta = new Date(currentTime - inputTime);
            } else {
                period = "In The Future";
                delta = new Date(inputTime - currentTime);
            }

            const years = Math.floor(delta / (1000 * 60 * 60 * 24 * 365));
            const remainingDays = Math.floor(delta / (1000 * 60 * 60 * 24)) % 365;
            const months = Math.floor(remainingDays / 30);
            const days = remainingDays % 30;
            const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));

            return `${period}\n years: ${years}\n months: ${months}\n days: ${days}\n hours: ${hours}\n minutes: ${minutes}`;
        }

        function handleCalculate() {
            const dateInput = document.getElementById('dateInput').value;
            const resultDiv = document.getElementById('result');
            const result = calculateTimeDifference(dateInput);
            resultDiv.textContent = result;
        }

        // Optional: Allow pressing Enter to calculate
        document.getElementById('dateInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleCalculate();
            }
        });
