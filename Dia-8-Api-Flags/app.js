const apiFlags = "https://flagcdn.com/es/codes.json"

fetch(apiFlags)
    .then(response => response.json())
    .then(data => {

        const countryList = document.querySelector('.list')

        for (const code in data) {
            const countryName = data[code];

            const listFlagsItem = document.createElement("li")
            const flagImg = document.createElement("img")
            flagImg.src = `https://flagcdn.com/64x48/${code}.png`
            flagImg.alt = `${countryName} Flag`;

            const countryText = document.createTextNode(`${countryName} (${code.toUpperCase()})`)
            listFlagsItem.appendChild(flagImg)
            listFlagsItem.appendChild(countryText)

            countryList.appendChild(listFlagsItem)
        }
    })
    .catch(error => console.log("Error al cargar la API", error))