
// we need to alter these 3 values i.e., count, error message & clear button
// that's why we are taking these 3 as a variable
var number = document.getElementsByTagName('b')[0];
var error = document.getElementById('div3');
var buttonClear = document.getElementById('button3');

buttonClear.style.display = 'none'

// function to increase the value of count 
function increment(){
    number.innerHTML++;
    error.innerHTML = ''
    if(number.innerHTML>1){
    buttonClear.style.display = 'inline-block'
    }
}

// function to decrease the value of count 
function decrement(){

    // we are writing this condition just to avoid the negative counts
    if(number.innerText>0){
        number.innerHTML--;
    }

    else if(number.innerHTML==0){
        error.innerHTML = 'Error : Cannot go below 0'
        buttonClear.style.display = 'none'
    }

    else if(number.innerHTML>0){
        error.innerHTML = ''
        buttonClear.style.display = 'inline-block'
    }
}

// function to clear the value of count
buttonClear.onclick = function clear(){
    number.innerText=0;
    // error.innerHTML = 'Error : Cannot go below 0'
    buttonClear.style.display = 'none'
}



