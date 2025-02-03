// return the hashmap index if the indicies are in one
// otherwise returns -1
function island(x, y, genMap) {
    let key = [x, y].toString();

    if(genMap.get(key) != undefined) {
        return genMap.get(key);
    } else {
        return -1;
    }
}


/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const hashes = []; // array of hashmaps
    const genMap = new Map(); // maps indicies to hashmap idx

    // Place 1's into island groups
    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid.length; x++) {
            if(grid[x][y] === 1) {
                // Check if previous elements are in islands
                let map1 = -1;
                let map2 = -1;
                const key = [x, y].toString();

                // Left element check
                if(x-1 >= 0 && grid[x-1][y] === 1) { 
                    // Get island, if exists
                    map1 = island(x-1, y, genMap);

                    // If previous in island, add current to it
                    if(map1 >= 0) {
                        hashes[map1].set(key, 1);
                        genMap.set(key, map1);
                    }
                }
                // Above element check
                if(y-1 >= 0 && grid[x][y-1] === 1) { 
                    // Get island, if exists
                    map2 = island(x, y-1, genMap);

                    // If previous in island, add current to it
                    if(map2 >= 0) {
                        hashes[map2].set(key, 1);
                        genMap.set(key, map2);
                    }
                }
                // If both neighbors are in diff maps, connect them.
                if(map1 >= 0 && map2 >= 0 && map1 !== map2) {
                    for (let [theKey, value] of hashes[map2]) {
                        hashes[map1].set(theKey, 1);
                        genMap.set(theKey, map1);
                    }
                    hashes[map2] = undefined; // don't need second map now
                }
                // If no neighbors are in maps, make own
                if(map1 < 0 && map2 < 0) {
                    const myMap = new Map();
                    myMap.set(key, 1);
                    hashes.push(myMap);

                    genMap.set(key, hashes.length - 1);
                }
            }
        }
    }

    let maxSize = 0;

    // Determine largest island
    for(let i = 0; i < hashes.length; i++) {
        if(hashes[i] != undefined) {
            let size = hashes[i].size;

            if(size > maxSize) {
                maxSize = size;
            }
        }
    }

    // Test all flips, hypothetically combining island sizes
    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid.length; x++) {
            if(grid[x][y] === 0) {

                const maps = [];
                const islands = [0, 0, 0, 0];

                // Check left
                if(x-1 >= 0 && grid[x-1][y] === 1) {
                    let num = island(x-1, y, genMap);

                    if(num >= 0 && !maps.includes(num)) {
                        maps.push(num);
                        islands[0] = hashes[num].size;
                    }
                }
                // Check right
                if(x+1 < grid.length && grid[x+1][y] === 1) {
                    const num = island(x+1, y, genMap);

                    if(num >= 0 && !maps.includes(num)) {
                        maps.push(num);
                        islands[1] = hashes[num].size;
                    }
                }
                // Check up
                if(y-1 >= 0 && grid[x][y-1] === 1) {
                    const num = island(x, y-1, genMap);

                    if(num >= 0 && !maps.includes(num)) {
                        maps.push(num);
                        islands[2] = hashes[num].size;
                    }
                }
                // Check down
                if(y+1 < grid.length && grid[x][y+1] === 1) {
                    const num = island(x, y+1, genMap);

                    if(num >= 0 && !maps.includes(num)) {
                        maps.push(num);
                        islands[3] = hashes[num].size;
                    }
                }

                // Get hypothetical island size, including flipped bit
                let size = islands[0] + islands[1] + islands[2] + islands[3] + 1;

                if(size > maxSize) {
                    maxSize = size;
                }
            }
        }
    }
    
    return maxSize;
};

const grid = [[1, 0], [0, 1]];
console.log(largestIsland(grid));

const grid2 = [[1, 1], [1, 0]];
console.log(largestIsland(grid2));

const grid3 = [[1, 1], [1, 1]];
console.log(largestIsland(grid3));

const grid4 = [[0]];
console.log(largestIsland(grid4));

const grid5 = [ [0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1],
                [1, 1, 0, 1, 1, 1],
                [0, 0, 1, 0, 0, 0],
                [1, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1]];
console.log(largestIsland(grid5));
