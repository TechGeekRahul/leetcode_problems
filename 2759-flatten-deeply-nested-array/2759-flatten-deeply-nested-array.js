/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0){
        return arr.slice();
    }
    let flatArr = [];
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let nested = flat(arr[i],n-1);
            flatArr.push(...nested);
        }else{
            flatArr.push(arr[i]);
        }
    }
    return flatArr;
};