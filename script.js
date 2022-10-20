let result = document.getElementById('inputext');

let calculate = (number) => {
    result.value += number;
}

let Result = () => {
    try{
        result.value = eval(result.value);
    }
    catch(err) {
        alert('Enter valid input');
    }
}

let cancel = () => {
    result.value = '';
}

let del = () => {
    result.value= result.value.slice(0,-1);
}

let percentile = () => {
    result.value = eval(result.value) / 100;
}