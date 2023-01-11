const palindromes = function (str) {
    let reg = /[A-Za-z]/gi;
    let lowerdStr = str.toLowerCase();
    let chars1 = lowerdStr.match(reg);
    let chars2 = lowerdStr.match(reg);
    let chars3 = chars2.reverse();

    for (let i = 0, l = str.length; i < l; i++) {
        if (chars1[i] != chars3[i]){
            return false;
        }
    }
    return true;

    // let x2 = x.replace(/[\W_]g/, '').toLowerCase();
    // let i = 0;
    // let j = x2.length - 1;
    // while(i > x.length){
    //     if(x2[i] !== x2[j]) {
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
};

// Do not edit below this line
module.exports = palindromes;
