function getCities() {
    const cities = [];
    for (let i = 0; i < 50; i++) {
        cities.push({
            name: `City ${i}`,
            population: Math.floor((Math.random() * 9000000) + 50000)
        })
        
    }
    return cities;
}

// 1. მოცემულია ცხრილი, რომელშიც დატა უნდა შეავსოთ getCities ფუნქციის გამოყენებით.

// ეს კოდი უნდა ჩაჯდეს ცხრილის ტანში თითოეული ქალაქისთვის:

// `<tr>
// <td>${name}</td>
// <td>${population}</td>
// </tr>`


const citiesArray = getCities();

const tbody = document.querySelector('#cities-table tbody');
console.log(citiesArray);

citiesArray.forEach(city1 => {
    let row = document.createElement("tr");

    row.innerHTML = (`<td>${city1.name}</td>
    <td>${city1.population}</td>`);

    tbody.appendChild(row);
});