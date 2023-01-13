const findTheOldest = function(arr) {
    let date = new Date();

    arr.forEach(element => {
        if (element["yearOfDeath"] == null) {
            element["yearOfDeath"] = date.getFullYear();
        }
        element["age"] = element["yearOfDeath"] - element["yearOfBirth"];
    });
    oldest = Math.max(...arr.map(o => o.age));
    //Or oldest = Math.max.apply(Math, arr.map(obj => obj.age))
    return arr.find(o => o.age == oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
