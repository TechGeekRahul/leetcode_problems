/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let low = 0;
    let high = m*n-1;
    let row,column;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        row = Math.floor(mid/n);
        column = mid%n;
        if(matrix[row][column] === target){return true;
        }else if(matrix[row][column] < target){low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return false;
};