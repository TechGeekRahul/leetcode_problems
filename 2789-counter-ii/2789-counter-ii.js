/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let changedValue = init;
    return {
        increment: function(){
            changedValue = changedValue + 1;
            return changedValue;
        },
        decrement: function(){
            changedValue = changedValue - 1;
            return changedValue;
        },
        reset: function(){
            changedValue = init;
            return changedValue;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */