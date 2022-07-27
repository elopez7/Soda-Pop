function getValuesFromPage(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let generatedNumbers = [];

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        generatedNumbers = generateNumbersFromStartValueToEndValues(startValue, endValue);
    }
    else{
        alert("You must enter integers")
    }

    displayNumbers(generatedNumbers);
}

function generateNumbersFromStartValueToEndValues(startValue, endValue){
    let generatedNumbers = [];

    for(let index = startValue; index <= endValue; index++){
        generatedNumbers.push(index);
    }

    return generatedNumbers;
}

function displayNumbers(numbersToDisplay){
    let templateRow = "";
    for (let index = 0; index < numbersToDisplay.length; index++) {
        let number = numbersToDisplay[index];
        templateRow += markEvenNumbersBold(number);
    }
    document.getElementById("results").innerHTML = templateRow;
}

function markEvenNumbersBold(numberToMark){
    let className = "even"
    if(numberToMark % 2 == 0){
        return `<tr><td class="${className}">${numberToMark}</td></tr>`;
    }
    className = "odd";
    return `<tr><td class="${className}">${numberToMark}</td></tr>`;
}