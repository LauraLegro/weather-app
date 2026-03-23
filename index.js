
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener('click', async () => {
    const city = cityInput.value;

    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`)
        const data = await response.json();
        console.log(data);

        temp.textContent = "Temperature: " + data.current_condition[0].temp_F + "F";
        description.textContent = "Weather: " + data.current_condition[0].weatherDesc[0].value;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
})

