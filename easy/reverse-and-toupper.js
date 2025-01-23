function reverseOrUpper(strs) {
    for(let i = 0; i < strs.length; i++) {
        if(strs[i].length % 2 === 0) {
            console.log(strs[i].toUpperCase());
        } else {
            console.log(strs[i].split("").reverse().join(""));
        }
    }
}

const words = ["cow", "fart", "tomato", "doritos", "no", "municipality"];

reverseOrUpper(words);
