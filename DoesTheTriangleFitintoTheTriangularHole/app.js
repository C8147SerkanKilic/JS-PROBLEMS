//Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

doesTriangleFit = (brick,hole) => {
    let [a,b,c] = brick
    let [d,e,f] = hole
    console.log(a);
    console.log(b);
    console.log(e);
   let result = a+b > c && a+c > b && b+c > a && d+e > f && d+f > e && e+f> d && a <= d && b <= e && c <= f ? true:false;
    return result 
}
console.log(doesTriangleFit([1,1,1],[2,2,2]))
// console.log(doesTriangleFit([3,4,5],[1,1,1]))
// console.log(doesTriangleFit([1,1,1],[2,2,2]))
// console.log(doesTriangleFit([1,1,1],[1,3,5]))
