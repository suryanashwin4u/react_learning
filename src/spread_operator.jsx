const fullname = ['ashwani','kumar'];
const biodata = [1,...fullname,26,male];
console.log(biodata);//automatically add fullname array into biodata using spread operator

const games=['cricket','hockey'];
const sports=['ludo','fan'];
const mixed=[...games,...sports];
console.log(mixed);//return mixed array containing games, sports using spread operator

const games=['cricket','hockey','polo'];
const [first,...remaining] = games;
console.log(remaining);//return a new array using spread operator

const fullName={
    fname:"ashwani",
    lname:"kumar",
};
const biodata={
id:1,
...fullname,
age:26,
gender:male,
};
console.log(biodata);//return an object containing all fullname object inside biodata


