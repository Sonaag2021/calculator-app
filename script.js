let history = []; // Array to store calculation history

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
        addToHistory(expression + ' = ' + result); // Add calculation to history
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function addToHistory(calculation) {
    history.push(calculation);
    if (history.length > 20) {
        history.shift(); // Remove oldest calculation if history exceeds 20 entries
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

// function toggleShareMenu() {
//     var menu = document.getElementById('share-menu');
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//       } else {
//         menu.style.display = "block";
//       }
// }

// function toggleSocialMedia() {
//     var submenu = document.getElementById('social-media-submenu');
//     submenu.classList.toggle('show');
// }

// function shareByEmail() {
//     var subject = encodeURIComponent("Check out this calculation result!");
//     var body = encodeURIComponent("The result of my calculation is: " + document.getElementById('display').value);
//     window.location.href = "mailto:?subject=" + subject + "&body=" + body;
// }


// function shareOnInstagram() {
//     // Construct the message to share
//     var message = encodeURIComponent("Check out this calculation result: " + document.getElementById('display').value);

//     // Construct the URL of the Instagram app with the message to share
//     var urlToShare = "instagram://share?text=" + message;

//     // Attempt to open the Instagram app
//     window.location.href = urlToShare;

//     // If the Instagram app is not installed or the share fails, fallback to the Instagram website
//     setTimeout(function() {
//         window.location.href = "https://www.instagram.com/";
//     }, 300);
// }


// function shareOnTwitter() {
//     var tweetText = encodeURIComponent("Check out this calculation result: " + document.getElementById('display').value);
//     window.open("https://twitter.com/intent/tweet?text=" + tweetText);
// }


// function shareOnFacebook() {
//     // Construct the URL to share, typically the current page URL
//     var urlToShare = encodeURIComponent(window.location.href);

//     // Open the Facebook Share Dialog with the URL to share
//     window.open("https://www.facebook.com/sharer/sharer.php?u=" + urlToShare, "_blank");
// }


// function shareOnWhatsApp() {
//     // Construct the message to share
//     var message = encodeURIComponent("Check out this calculation result: " + document.getElementById('display').value);

//     // Construct the URL with the message to share
//     var urlToShare = "https://wa.me/?text=" + message;

//     // Open WhatsApp with the message to share
//     window.open(urlToShare, "_blank");
// }


// function shareDirectLink() {
//     var calculatorUrl = window.location.href;
//     navigator.clipboard.writeText(calculatorUrl).then(function() {
//         alert("Direct link copied to clipboard!");
//     }, function() {
//         alert("Failed to copy direct link to clipboard.");
//     });
// }

