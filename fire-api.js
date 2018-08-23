/*
  MIT License

  Copyright (c) 2018 Renaud

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

/**************************************/
/*         FIRE-API CONSTANTS         */
/**************************************/
var API_VERSION = "1.0";
var CHAMPERNOWNE = 0.12345678910111213;


/*************************************/
/*          STARTUP MESSAGE          */
/*************************************/
console.log("-------------------------------------------------------\nFire-API v" + API_VERSION + " by Renaud42 from Fire-Softwares enabled !\n-------------------------------------------------------");


/**************************************/
/*          FIRE-API STUFF            */
/**************************************/

// Loggers
function log(text) {
  console.log("[Fire-API] " + text);
}
function errLog(text) {
  console.error("[Fire-API Error] " + text);
}

// Copy to clipboard
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');

    if(successful)
      log('Successfully copied "' + text + '" to clipboard.');
    else
      errLog('Unable to copy "' + text + '" to clipboard.');
  } catch(err) {
    errLog('Unable to copy text to clipboard.\n' + err);
  }

  document.body.removeChild(textArea);
}
function copyToClipboard(text) {
  if(!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text).then(function() {
    log('Successfully copied "' + text + '" to clipboard.');
  }, function(err) {
    fallbackCopyTextToClipboard(text);
  });
}

// Closing alert boxes
var close = document.getElementsByClassName("alert-close");
var i;
// Loop all buttons
for(i = 0; i < close.length; i++) {
    // On click on a close button
    close[i].onclick = function() {
        // Getting parent element
        var div = this.parentElement;

        // Setting opacity to 0
        div.style.opacity = "0";

        setTimeout(function() {
          div.style.display = "none";
        }, 300);
    }
}
