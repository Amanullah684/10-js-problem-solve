let a = 720;
let b = 1080;
let c = 1420;
let bignumber = (a > b && a > c) ?
    a : (b > a && b > c) ?
        b : c
console.log("bignumber", bignumber);

// (condition)? true:false;