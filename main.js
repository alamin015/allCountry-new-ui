
const loadAllCountry  = async(name) => {
    const dynamicName = name ? `name/${name}`: '';
    const url = name ? `https://restcountries.com/v3.1/${dynamicName}` : `https://restcountries.com/v3.1/all`

   const myData = await fetch(url)
   const myAllData = await myData.json();
   if(name){
    showSingleCountryByClicking(myAllData)
   }else{
    displayCountry(myAllData)
   }
   
}

const displayCountry = (data) => {
    let allCountryName = document.getElementById("allCountryName");
    data.forEach(element => {
        let li = document.createElement("li")
        li.setAttribute("onclick",`showSingle('${element.name.common}')`)
        li.innerHTML = element.name.common;
        allCountryName.appendChild(li);
    });
}


const showSingle = (name) => {
    loadAllCountry(name)
}

const showSingleCountryByClicking = (data) => {
    const displaySingleCountry = document.getElementById("displaySingleCountry");
    displaySingleCountry.innerHTML = '';
    displaySingleCountry.innerHTML =  `
    
    <img src="${data[0].flags.png}" alt="">
    <h4>${data[0].name.common}</h4>


    `;
    console.log(data)
}

loadAllCountry("Russia");
loadAllCountry();