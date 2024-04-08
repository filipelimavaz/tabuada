const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTitle = document.querySelector("#multiplication-title span")
const multiplicationTable = document.querySelector("#multiplication-operations")

const createTable = (number, multicatorNumber) => {
    multiplicationTable.innerHTML = ""

    for(let i = 1; i <= multicatorNumber; i++) {
        const result = number * i;

        const template = `
            <div class="row">
                <div class="operation">${multicatorNumber} x ${i} =</div>
                <div class="result">${result}</div>
            </div>
        `
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerText = number;
}

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicatorNumber) {
        return
    }

    createTable(multiplicationNumber, multiplicatorNumber)
})