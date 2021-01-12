
fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(data => data.json())
.then(json => console.log(json))





function showWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(data => data.json())
    .then(obj => {
        let desc = document.querySelector(".description");
        let weather = obj.weather[0].description;
        desc.append(weather)

        let hum = document.querySelector(".humidity");
        let humidity = obj.main.humidity;
        hum.append(humidity)

        let pres = document.querySelector(".pressure");
        let pressure = obj.main.pressure;
        pres.append(pressure)

        let ic = document.querySelector(".icon");
        let icon = obj.weather[0].icon;
        let url = ("http://openweathermap.org/img/w/" + icon + ".png")
        let img = document.querySelector(".imeg");
        img.setAttribute("src",url)
        
        let tem = document.querySelector(".temp");
        let temp = obj.main.temp;
        tem.append(temp)

        let spe = document.querySelector(".speed");
        let speed = obj.wind.speed;
        spe.append(speed + "км/год")

        let de = document.querySelector(".deg");
        let deg = obj.wind.deg;
        de.append(deg)
    })
}

document.querySelector(".butt").addEventListener("click",showWeather)


