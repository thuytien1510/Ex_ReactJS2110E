//10. In bảng cửu chương ra màn hình
let text = "";

for (let i = 2; i <=9; i++) {
  for (let j = 1; j <= 9; j++) {
  text +=  i  + "x" + j + "=" + (i*j)+ "<br>";
  }
}
document.getElementById("bcc").innerHTML = text;

//11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
function searchspace(a){
    let n=0;
    for(let i = 0; i < a.length; i++){
        if(a[i]==" "){
            n++;
        }
    }
    
    console.log(n);
}
searchspace("    Hello  world")

//12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
function removespace(a){
    let n;
    for(let i = 0; i < a.length; i++){
           n = a.replace(/\s/g, '');
        
    }
    
    console.log(n);
}
removespace("    Hello  world")

//13. Hãy viết chương trình đảo ngược sau s.
function reverse(a){
    let n ="";
    for(let i = a.length - 1; i >= 0; i--){
        n += a[i];
    }
    
    console.log(n);
}
reverse("This is a beautiful day")

//14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
function findposition(s1,s2){
    let n ;
    n = s1.indexOf(s2);
    console.log(n);
}
findposition('This is a beautiful day','is')

//15. Viết chương trình chuẩn hóa họ tên.
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
  console.log(titleCase("I'm a little tea pot"));

  //16. Viết chương trình lấy  id name của fb.
function findId(str) {
    let n = "";
    for(let i= str.length-1; i >= 0; i--){
        if(str[i] =='/'){
            n =str.slice(i+1);
            break;
        }
    }
    console.log(n);
}
findId('https://www.facebook.com/ngothucdat');

//17.  Viết hàm số tính min, max của 3 số?
function findmin(a,b,c){
    let min = a; 
    if (min > b){
        min=b;
    }
    else if(min > c ){
        min = c;
    }
    console.log(min);
}
findmin(8,10,7)

//18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?
function findposition2(s1,s2){
    let n,m = "" ;
    n = s1.lastIndexOf(s2);
    m = s1.slice(0,n);
    console.log(m.lastIndexOf(s2));
}
findposition2('hi hi hi hi hi','hi')

//19.  Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive
function total(n){
    if (n == 0) {
        return 0;
    }
   return n + total(n-1);
  
}
console.log(total(9))
// function ignoreSt(str){
//     let n ="";
//     for(let i = 0; i < n.length; i++){
//         n = str.replace(/\s+/g, '');
     
//  }
// }
// ignoreSt('computer =            " ngan 98    " AND class = "  REACTJS2002 AND \= " OR name = “hieu”');
