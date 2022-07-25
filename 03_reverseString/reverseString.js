const reverseString = function(text) {
    const splitText = text.split('');
    const reverseText = splitText.reverse();
    const finalText = reverseText.join("");
    return finalText;
};

// Do not edit below this line
module.exports = reverseString;
