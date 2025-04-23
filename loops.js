let studentsArray = [1,2,3,4,5,6,7,8,9,10];


function checkItemValue(item,index,array) {
    console.log(index,item,array); 
    return item === 10;
}

studentsArray.find(checkItemValue);
studentsArray.map
studentsArray.filter
studentsArray.reduce
studentsArray.forEach
studentsArray.every
studentsArray.some  
studentsArray.includes
studentsArray.indexOf
studentsArray.lastIndexOf
studentsArray.splice(2,3,100,200,300)
studentsArray.slice(2,5)
studentsArray.unshift(100,200,300)
studentsArray.shift()
studentsArray.push(100,200,300)

// age = 34;
let random = ()=>{};
//3

function printDetails(param) {
    console.log("Details are",this.age);
}


printDetails(()=>{
    console.log("Details are",this.age);
})

printDetails