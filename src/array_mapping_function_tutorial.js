const old_array=['ashwani','sumit'];

const new_array=old_array.map(function(cvalue){
    return cvalue + "kumar";
});
// old_array will not be modified
console.log(new_array);

const new_array=old_array.map(function(cvalue,i){
    return i + " : " + cvalue + "kumar";
});
console.log(new_array);

const new_array=old_array.map(function(cvalue,i,arr){
    console.log(arr);
});


// object array mapping
const studentdata=[
{id:1,name:"sumit",degree:"bca"},
{id:2,name:"ashwani",degree:"mca"},
];
const newdata = studentdata.map((cvalue)=>{
    return `my name is ${cvalue.name}. my degree is ${cvalue.degree}`;
});
console.log(newdata);
