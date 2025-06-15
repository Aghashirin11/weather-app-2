const dayEl = document.querySelector('.default_day');
const dateEl = document.querySelector('.default_date');
const btnEl  = document.querySelector('.btn_search')
const searchBar = document.querySelector('.search_bar')



const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


const day = new Date();
const dayName = days[day.getDay()]
dayEl.textContent = dayName


let month =day.toLocaleString('en', {month: "long"});
let date =day.getDate();
let year = day.getFullYear();

dateEl.textContent =  month+" "+date+" "+year


btnEl.addEventListener('click',(e) =>{
    e.preventDefault();
    if(searchBar.value !==""){

        'https://api.openweathermap.org/data/2.5/weather?q={baku}&appid={06a2f9757d140674b85df2280064ce9f}'
       
        
    }
    else{
        alert('You must be write Something !!!')
        
    }
    
    
} )


____________________________________________________________________________________________--

const dayEl = document.querySelector('.default_day');
const dateEl = document.querySelector('.default_date');
const btnEl = document.querySelector('.btn_search')
const searchBar = document.querySelector('.search_bar');

const appContainer = document.querySelector('.icons')

const description = document.querySelector('.icons img')

const apiKey = '173623ae52e316a5245c191d628e93ab'

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


const day = new Date();
const dayName = days[day.getDay()]
dayEl.textContent = dayName


let month = day.toLocaleString('en', { month: "long" });
let date = day.getDate();
let year = day.getFullYear();

dateEl.textContent = month + " " + date + " " + year


btnEl.addEventListener('click', (e) => {
    e.preventDefault();

    if (searchBar.value !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === '404') {
                    appContainer.style.display = 'none'
                }
                else {
                    console.log(json);

                }
            }

            )

    }
    else {
        return;

    }


})



function get(){fetch(`https://api.openweathermap.org/data/2.5/forecast?q=baku&appid=173623ae52e316a5245c191d628e93ab&units=metric`)
.then(response => response.json())
.then(json => {
    console.log(json);
    
})}
            


get()







