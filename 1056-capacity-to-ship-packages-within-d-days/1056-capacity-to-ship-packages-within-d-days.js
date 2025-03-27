/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let sum=0;
    for(let weight of weights){
        sum+=weight;
    }
    let right = sum;

    while(left<right){
        let mid = Math.floor((left + right)/2);
        if(canShip(weights,days,mid)){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return left;
};

var canShip = function(weights,days,mid){
    let startDay = 1;
    let startWeight = 0;
    for(let weight of weights){
        startWeight += weight;
        if(startWeight > mid){
            startDay++;
            startWeight = weight;
        }
    }
    return startDay<=days;
}