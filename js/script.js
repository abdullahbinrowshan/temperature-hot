// console.log('hello world');
const API_KEY = `e9e5d25056711d47d987e9bbb004f620`;

const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const res = await fetch(url)
        const data = await res.json();
        displayTemperature(data);
    } catch (error) {
        console.error(error);
    }
}

const displayTemperature = data => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('city', data.name);
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    document.getElementById(id).innerText = text;
}

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('input-field');
    loadTemperature(city.value)
    city.value = '';
})

loadTemperature('comilla')