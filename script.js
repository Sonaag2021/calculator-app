let history = [];

function appendToDisplay(value) {
    let display = document.getElementById('display');
    // Limit input length to 12 characters
    if (display.value.length < 12) {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
        addToHistory(expression + ' = ' + result); 
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function addToHistory(calculation) {
    history.push(calculation);
    if (history.length > 20) {
        history.shift(); 
    }
}

function showHistory() {
    var modal = document.getElementById('history-modal');
    var historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    for (var i = 0; i < history.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = history[i];
        historyList.appendChild(listItem);
    }
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('history-modal');
    modal.style.display = 'none';
}
