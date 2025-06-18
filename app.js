const dayEl = document.querySelector('.default_day');
const dateEl = document.querySelector('.default_date');

const btnEl = document.querySelector('.btn_search');
const searchBar = document.querySelector('.search_bar');

const appContainer = document.querySelector('.icons');
const description = document.querySelector('.icons img');
const dayInfo = document.querySelector('.day_info .currentData');

const weekTemp = document.querySelectorAll('.list_content .day_temp');
const weekImg = document.querySelectorAll('.list_content img')
const weekDay = document.querySelectorAll('.list_content .week_day');


const currentDeg = document.querySelector('.weather_temp');
const currentCloud = document.querySelector('.cloudtxt');
const img = document.querySelector('.weather_icon')

const apiKey = '173623ae52e316a5245c191d628e93ab';

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// ✅ Bugünkü tarix və günün adı
const today = new Date();
const dayName = days[today.getDay()];
dayEl.textContent = dayName;

const month = today.toLocaleString('en', { month: "long" });
const date = today.getDate();
const year = today.getFullYear();
dateEl.textContent = `${month} ${date} ${year}`;

// ✅ Şəhərə görə hava məlumatı
btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    const city = searchBar.value.trim();
    
    if (city !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    appContainer.style.display = 'none';
                }
                else {
                    appContainer.style.display = 'block'
                    console.log(data); // burada məlumat işlənə bilər
                    appContainer.innerHTML = `
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"  class="weather_icon">
                    <h3 class="weather_temp">${data.name}</h2>
                        <h2 class="weather_temp">${Math.round(data.main.temp)} &degC</h2>
                        <h3 class="cloudtxt">${data.weather[0].description}</h3>
                    
                    `
                    // https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt=




                    dayInfo.innerHTML = `
           <div class="content">
                        <p class="title">Name</p>
                        <span class="value">${data.name}</span>
                    </div>
                    <div class="content">
                        <p class="title">temp</p>
                        <span class="value">${Math.round(data.main.temp)}&degC</span>
                    </div>
                    <div class="content">
                        <p class="title">Humidity</p>
                        <span class="value">${data.main.humidity} %</span>
                    </div>
                    <div class="content">
                        <p class="title">Wind Speed</p>
                        <span class="value">${Math.round(data.wind.speed)} km/h</span>
                    </div>`

                }
            });
    }

    function getForecast() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const dailyForecast = data.list.filter(item => item.dt_txt.includes("00:00:00"));
                showDays(dailyForecast);
                console.log(dailyForecast);
                console.log(data);
            });
    }

    // ✅ Günlərin qısa adını göstər

    function showDays(forecastArray) {
        forecastArray.slice(0, weekDay.length).forEach((item, index) => {
            const forecastDate = new Date(item.dt_txt);
            const shortDay = days[forecastDate.getDay()].slice(0, 3); // "Mon", "Tue" və s.
            weekDay[index].innerText = shortDay;
            weekTemp[index].innerText = `${Math.round(item.main.temp)}°C`;
            weekImg[index].src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`

        });
    }


    getForecast()
});

// ✅ 5 günlük hava proqnozu

// ✅ Başlanğıcda proqnozu göstər
