let whiteDisplay = [];
let calculsDisplay = [];
let result = 0;

function displayNumber(num) {
    if ($(num).data('value') < 10 && $(num).data('value') > -1) {
        handleNumbers(num);
    } else if ($(num).data('value') == '*' || $(num).data('value') == '/' || $(num).data('value') == '-' || $(num).data('value') == '+') {
        handleSigns(num);
    }
}

function handleNumbers(num) {
    // handle after having a result
    if (calculsDisplay.join('').includes('=')) {
        setToZero();
    }
    // get the data value
    let numberValue = $(num).data('value');

    // update the white display
    whiteDisplay.push(numberValue);
    $('#display').text(whiteDisplay.join(''));
    // update the calculs display
    calculsDisplay.push(numberValue);
    $('#displayCalcul').text(calculsDisplay.join(''));
}

function handleSigns(num) {
    // handle after having a result
    if (calculsDisplay.join('').includes('=')) {
        useTheResultForNewCalcul();
    }
    // get the sign
    let signValue = $(num).data('value');

    // update the white display replacing the previous sign ou number
    whiteDisplay.push(signValue);
    whiteDisplay = [];
    $('#display').text(signValue);
    // check if the last sign is +-/* and delete it if yes
    let string = calculsDisplay.join('').toString();
    if (string[string.length - 1].includes('+') || string[string.length - 1].includes('-') || string[string.length - 1].includes('*') || string[string.length - 1].includes('/')) {
        calculsDisplay.pop();
    }
    // update the calculs display
    calculsDisplay.push(signValue)
    $('#displayCalcul').text(calculsDisplay.join(''));
}

function equal() {
    // make the calculs
    let arrayToString = calculsDisplay.join('');
    result = eval(arrayToString);
    // display the equal and update the calculs display
    calculsDisplay.push('=');
    calculsDisplay.push(result)
    $('#displayCalcul').text(calculsDisplay.join(''));
    // update the white display
    whiteDisplay = [];
    whiteDisplay.push(result);
    $('#display').text(whiteDisplay);
}

function useTheResultForNewCalcul() {
    calculsDisplay = [];
    calculsDisplay.push(result);
}

function handlePoint() {
    // display a zero before the point if there is nothing
    if (whiteDisplay.length === 0) {
        addZero();
    } else if (whiteDisplay.length > 0 && whiteDisplay.join('').includes('.')) {
        // do nothing: do not display and do not add another point
    } else if (calculsDisplay.join('').includes('=')) {
        // handle if we type on the point after having the result
        setToZero();
        addZero();
    } else {
        // allow to make calcul with point
        // get the data signValue
        let numberValue = '.';
        // update the white display
        whiteDisplay.push(numberValue);
        $('#display').text(whiteDisplay.join(''));
        // update the calculs display
        calculsDisplay.push(numberValue);
        $('#displayCalcul').text(calculsDisplay.join(''));
    }

    function addZero() {
        // add the zero before the point
        whiteDisplay.push(0);
        calculsDisplay.push(0);
        whiteDisplay.push('.');
        calculsDisplay.push('.');
        $('#display').text(whiteDisplay.join(''));
        $('#displayCalcul').text(calculsDisplay.join(''));
    }
}

function setToZero() {
    whiteDisplay = [];
    $('#display').text('0');
    calculsDisplay = [];
    $('#displayCalcul').text('');
}

function deleteNumber() {
    whiteDisplay.pop();
    $('#display').text(whiteDisplay.join(''));
    calculsDisplay.pop();
    $('#displayCalcul').text(calculsDisplay.join(''));
}

// allow to use the calculator with the keyboard
function handleKeyboard() {
    $(this).keyup((e) => {
        let keyValue = e.keyCode;
        switch (keyValue) {
            case 48:
                val = 0;
                keyboardNumbers(val);
                break;
            case 96:
                val = 0;
                keyboardNumbers(val);
                break;
            case 49:
                val = 1;
                keyboardNumbers(val);
                break;
            case 97:
                val = 1;
                keyboardNumbers(val);
                break;
            case 50:
                val = 2;
                keyboardNumbers(val);
                break;
            case 98:
                val = 2;
                keyboardNumbers(val);
                break;
            case 51:
                val = 3;
                keyboardNumbers(val);
                break;
            case 99:
                val = 3;
                keyboardNumbers(val);
                break;
            case 52:
                val = 4;
                keyboardNumbers(val);
                break;
            case 100:
                val = 4;
                keyboardNumbers(val);
                break;
            case 53:
                val = 5;
                keyboardNumbers(val);
                break;
            case 101:
                val = 5;
                keyboardNumbers(val);
                break;
            case 54:
                val = 6;
                keyboardNumbers(val);
                break;
            case 102:
                val = 6;
                keyboardNumbers(val);
                break;
            case 55:
                val = 7;
                keyboardNumbers(val);
                break;
            case 103:
                val = 7;
                keyboardNumbers(val);
                break;
            case 56:
                val = 8;
                keyboardNumbers(val);
                break;
            case 104:
                val = 8;
                keyboardNumbers(val);
                break;
            case 57:
                val = 9;
                keyboardNumbers(val);
                break;
            case 105:
                val = 9;
                keyboardNumbers(val);
                break;
            case 189:
                val = '-';
                keyboardSigns(val);
                break;
            case 109:
                val = '-';
                keyboardSigns(val);
                break;
            case 187:
                val = '+';
                keyboardSigns(val);
                break;
            case 107:
                val = '+';
                keyboardSigns(val);
                break;
            case 191:
                val = '/';
                keyboardSigns(val);
                break;
            case 111:
                val = '/';
                keyboardSigns(val);
                break;
            case 221:
                val = '*';
                keyboardSigns(val);
                break;
            case 106:
                val = '*';
                keyboardSigns(val);
                break;
            case 13:
                equal();
                break;
            case 8:
                deleteNumber();
                break;
            case 190:
                handlePoint();
                break;
            case 110:
                handlePoint();
                break;

            default:
        }
    });

    function keyboardNumbers(num) {
        // handle after having a result
        if (calculsDisplay.join('').includes('=')) {
            setToZero();
        }
        // get the data value
        let numberValue = num;

        // update the white display
        whiteDisplay.push(numberValue);
        $('#display').text(whiteDisplay.join(''));
        // update the calculs display
        calculsDisplay.push(numberValue);
        $('#displayCalcul').text(calculsDisplay.join(''));
    };

    function keyboardSigns(num) {
        // handle after having a result
        if (calculsDisplay.join('').includes('=')) {
            useTheResultForNewCalcul();
        }
        // get the sign
        let signValue = num;
        // update the white display replacing the previous sign ou number
        whiteDisplay.push(signValue);
        whiteDisplay = [];
        $('#display').text(signValue);
        // check if the last sign is +-/* and delete it if yes
        let string = calculsDisplay.join('').toString();
        if (string[string.length - 1].includes('+') || string[string.length - 1].includes('-') || string[string.length - 1].includes('*') || string[string.length - 1].includes('/')) {
            calculsDisplay.pop();
        }
        // update the calculs display
        calculsDisplay.push(signValue)
        $('#displayCalcul').text(calculsDisplay.join(''));
    }
}
handleKeyboard();
