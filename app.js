
fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(data => data.json())
.then(json => console.log(json))





function showWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(data => data.json())
    .then(obj => {
        let desc = document.querySelector(".description");
        let weather = obj.weather.description;
        desc.append("src",weather)

        let hum = document.querySelector(".humidity");
        let humidity = obj.main.humidity;
        hum.append("src",humidity)

        
    })
    .then(obj => {
        let pres = document.querySelector(".pressure");
        let pressure = obj.main.pressure;
        pres.setAttribute("src",pressure)
        document.body.append(pres)
    })
    .then(obj => {
        let ic = document.querySelector(".icon");
        let icon = obj.weather.icon;
        ic.setAttribute("src",icon)
        document.body.append("src",ic)
    })
    .then(obj => {
        let tem = document.querySelector(".temp");
        let temp = obj.main.temp;
        tem.setAttribute("src",)
    })
}

console.log(showWeather)
