var place = prompt("Enter the location : ");

const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=e342367614d61e912d92e29103041f54`;
console.log(api_url);
// const api_url = "https://v2.jokeapi.dev/joke/Any"

async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  console.log(data.main.temp);
  document.getElementById("Location").innerHTML = data.name;
  document.getElementById("feel").innerHTML = Math.round(
    conv(data.main.feels_like)
  );
  document.getElementById("temp").innerHTML = Math.round(conv(data.main.temp));
  document.getElementById("high").innerHTML = Math.round(
    conv(data.main.temp_max)
  );
  document.getElementById("lowest").innerHTML = Math.round(
    conv(data.main.temp_min)
  );
}

function conv(f) {
  return f - 273;
}

getapi(api_url);
// const location = prompt("Enter Location");

// api.openweathermap.org/data/2.5/weather?q=London&appid={api_key}
