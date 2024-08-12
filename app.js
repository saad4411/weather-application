var searchButton = document.querySelector(".sbtn");
    const url1 = "https://api.openweathermap.org/data/2.5/weather?q="
    var searchBox= document.querySelector(".search input");
    const url2= "&appid=b48cd167f07b16bdb751bf1eaf89b818&units=metric";



async function checkWeather(city){
const response = await fetch(url1 + city + url2);
 var data = await response.json();

console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + ("°C");
document.querySelector(".humidity").innerHTML=(data.main.humidity + " %");
document.querySelector(".wind").innerHTML=(data.wind.speed + " km/hr");
}

searchButton.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
 });