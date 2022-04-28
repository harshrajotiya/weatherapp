
const apiKey = "4d8fb5b93d4af21d66a2948710284366";


document.getElementById("btn").addEventListener("click",function(){

    let city=document.getElementById("hehe").value;
    document.getElementById("hehe").value="";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const markup = `
      <div style=" border: 2px solid; margin: 5vh; padding:5vh; border-radius: 8px;" >
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div style="font-size: 5vh;" class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption style="font-size: 5vh;">${weather[0]["description"]}</figcaption>
        </figure>
      </div>`;
      document.getElementsByClassName("temp")[0].innerHTML+=markup;
    })

});