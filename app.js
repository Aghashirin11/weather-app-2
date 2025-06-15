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







