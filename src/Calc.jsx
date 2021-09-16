import React from "react";

function add(a,b){
    let add=a+b;
    return add;
}
function sub(a,b){
    let sub=a-b;
    return sub;
}
function mul(a,b){
    let mul=a*b;
    return mul;
}
function div(a,b){
    let div=a/b;
    div=div.toPrecision(3);
    return div;
}

export default add;
export {sub,mul,div};


