const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    else {
        let callTxt = ""
        for (let i = 0; i < num; i++) {
        callTxt += string;
        }
    return callTxt;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
