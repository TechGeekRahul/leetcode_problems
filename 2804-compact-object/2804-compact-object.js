/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (!obj || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject); 
    }

    let result = {};
    for (let key in obj) {
        let value = compactObject(obj[key]); 
        if (value) result[key] = value; 
    }
    return result;
};
