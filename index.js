// 1
let nums = [1,2,3,4,5,6,7,8,9,10]
let even = nums.filter((nums) => nums % 2 === 0)
let odd = nums.filter((nums) => nums % 2 === 1)
console.log(
`четные ${even}
нечетные ${odd}`
);




// 2
let students = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod'];
let longestName = '';
students.filter((name) => {
    if (name.length > longestName.length) {
        longestName = name;
    }
} );
console.log(longestName);




// 3
let student = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod']
let index = prompt(student);
if (index >= 0 && index < student.length + 1) {
    student.splice(index - 1, 1);
    alert(student);
} else {
    alert('Error');
}




// 4
let prices = [20000, 16000, 40000, 30000, 35000, 60000, 13000, 15000, 45000, 110000];
alert(`доступные 
20000, 16000, 40000, 30000, 35000, 60000, 13000, 15000, 45000, 110000`)
let from = prompt('from');
let up = prompt('up');
let result = prices.filter((price) => price >= from && price <= up);
alert(result)




//5
let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'eror', 22]
let numbers = arr.filter((number) => typeof number === 'number')
console.log(`${numbers} Bad`);