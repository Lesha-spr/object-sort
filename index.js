module.exports = function(obj, reverse) {
    var newObject = {};
    var keys = Object.keys(obj).sort();

    if (reverse) {
        keys.reverse();
    }

    keys.forEach(function(key) {
        newObject[key] = obj[key];
    });

    return newObject;
};