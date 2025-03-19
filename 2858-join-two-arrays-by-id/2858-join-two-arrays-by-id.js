/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map();

    [...arr1, ...arr2].forEach(obj => {
        map.set(obj.id, { ...map.get(obj.id), ...obj });
    });

    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
