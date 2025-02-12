/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let returnIdx = - 1;
    let n = gas.length;
    let tank = 0;
    let i = 0;
    let counter = 0
    let done = false;
    let start = 0;
    let distance = 0;

    while(!done) {
        // Update gas tank
        tank += gas[i];
        tank -= cost[i];

        // If no gas, reset gas to zero and reset start
        if(tank < 0) {
            tank = 0;
            start = (i + 1) % n;
            distance = 0;

            // If we reset and have no more left to cover we are done
            if(counter >= n) {
                done = true;
            }
        } else if(i === start && distance > 1) {
            // If have gas we are done if we got back to start
            returnIdx = start;
            done = true;
        }
        if( ++i === n) {
            i = 0;
        }
        counter++;
        distance++;
    }
    return returnIdx;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));


const gas2 = [2, 3, 4];
const cost2 = [3, 4, 3];
console.log(canCompleteCircuit(gas2, cost2));
