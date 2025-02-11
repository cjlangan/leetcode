
var RandomizedSet = function() {
    this.map = new Map();
    this.arr = [];
    this.length = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let notin = false;

    // Check if the value is in the set
    if(this.map.get(val) === undefined) {
        this.map.set(val, this.length);
        this.arr[this.length++] = val;
        notin = true;
    }
    return notin;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let isin = false;

    if(this.map.get(val) !== undefined) {
        // Get idx and swap with last element
        let idx = this.map.get(val);

        // Save last value
        this.arr[idx] = this.arr[--this.length];

        // Set new indicie in map and remove other
        this.map.set(this.arr[idx], idx);
        this.map.delete(val);

        isin = true;
    }
    return isin;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

RandomizedSet.prototype.print = function() {
    console.log("List start");
    for(let i = 0 ; i < this.length; i++) {
        console.log(this.arr[i]);
    }
    console.log("List end");
};

var obj = new RandomizedSet();
obj.insert(1);
obj.print();
obj.remove(2);
obj.print();
obj.insert(2);
obj.print();
obj.remove(1);
obj.print();
console.log(obj.insert(2));
obj.print();

