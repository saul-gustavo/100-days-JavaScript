const currentDateParagraph = document.getElementById("current-date")
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${dia}-${mes}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${mes}-${dia}-${year} ${hours} : ${minutes} `;
            break;
        default:
            currentDateParagraph.textContent = formattedDate
    }
})