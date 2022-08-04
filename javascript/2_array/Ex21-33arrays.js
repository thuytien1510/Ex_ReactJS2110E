const a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] ;

//21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
function sum(arr){
    return arr.reduce(function s(sum,i){ return sum += i},0);
}
console.log(sum( a ))

//22. tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?

function findNumbers(arr){
    let max = Math.max.apply(Math,arr)
    let min = Math.min.apply(Math,arr)
    let avg = sum(arr)/arr.length
    console.log(max + ',' +min+',' +avg)
}
findNumbers(a)

//23.  tìm số có tần suất xuất hiện nhiều nhất?
function foo(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    let maxFrequency = Math.max.apply(Math,b)

    return maxFrequency;
}
console.log(foo(a))

//24.lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)

function isPrime(number){ 
    var answer = true;
    if (number < 2 ){
        answer = false;
    }else{
        for (var i = 2; i <= Math.sqrt(number); i++){
            if(number%i == 0){
                answer = false;
                break;
            }
        }
    }
    if(answer==true){
        return true;
    }else{
        return false;
    }
}
function PrimeArray(arr){
    return arr.filter(function primes(number){return isPrime(number)== true})
}
console.log('b = ['+ PrimeArray(a) + ']')

//25. tạo một mảng b là tập hợp bình phương của các số trong mảng a

function squaredNumbers(arr){
    return arr.map(function squareds(number){return number**2})
}
console.log('b = ['+squaredNumbers(a)+ ']')

const b =  [1,2,3,4,6,7];
//26. tìm trong mảng phần có khoảng cách tử gần với k nhất
function nearestNumbers(arr,k){
    let distances = [];
    distances =arr.map(function nearestNumber(number){return Math.abs(number-k)})
    return arr.filter(function(number){if(Math.min.apply(Math,distances)==Math.abs(number-k)){return number} })
}
console.log(nearestNumbers(b,5))

const students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
//27. tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
function getStudentsHaveNameOnRequest(arr){
    return arr.filter(request)
    function request(obj){
        obj.firstName = titleCase(obj.firstName);
        obj.lastName = titleCase(obj.lastName);
        for(var i=0; i<obj.firstName.length; i++){
            if ((obj.firstName.charAt(i)==='a' || obj.firstName.charAt(i)==='A') && obj.firstName.length >= 3){
                return obj
            }
        }
    }
}
console.log(getStudentsHaveNameOnRequest(students))

//28.  tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
function getInitiativeStudents(arr){
    return arr.filter(request)
    function request(obj) {
        if(obj.lastName.includes('Do')){return obj}
    }
}
console.log(getInitiativeStudents(students))

//29. sắp xếp danh sách học viên theo tên (firstName).
function sortStudentByName(arr){
    return arr.sort(function(a,b){return (a.firstName > b.firstName)? 1:-1})
}
console.log(sortStudentByName(students))


const c = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
const d = [1,1,1,1,1,1,1,1,1,1]

//30. tìm số lớn thứ nhì trong mảng,
function findSecondLargestNumber(arr){
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
        }
    }
    newArr.sort(function(a,b){return a-b});
    if(newArr.length == 1){
        console.log('-1')
    }else{
        console.log(newArr[newArr.length-2])
    }
}
findSecondLargestNumber(d)
//31.tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
function existSumOfThreeNumbersInArr(arr,k){
    
    
}
arr31 =  [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
console.log(existSumOfThreeNumbersInArr(arr31,26))