


const arr=[1, 4, 4, 7, 9];//khai báo mảng 5 phần tử như đề bài yêu cầu
let arrLe=[];// khai báo hàm chưa các số lẻ
let arrChan=[];// khai báo hàm chưa các số chẵn
let countArr=0;

function checkDuplicate(variable,array){
    for(let index=0;index<array.length;index++)
    {
        if(variable===array[index])
        {
            return 1;// nếu có trùng số trong mảng thì trả về 1
        }
    }
    return 0;// nếu 1 số không tồn tại trong mảng
}

// tổng 4 số lớn nhất trong 5 số 
function TongMax4Arr(arr){
    let tong=0;
    let min=100000;
   let indexArrChan=0;
   let indexArrLe=0;
    for(let i=0;i<arr.length;i++)
    {
        tong=tong+arr[i];
        if(min>=arr[i])
        {
            min=arr[i];
        }
        if(arr[i]%2===0)//Nếu là số chẵn 
        {
            if(checkDuplicate(arr[i],arrChan)===0)// nếu không trùng thì add phẩn tử đó vào mảng
            {
                arrChan[indexArrChan]=arr[i];
                indexArrChan++;
            }
        }else if(arr[i]%2!==0)
        {
            if(checkDuplicate(arr[i],arrChan)===0)// nếu không trùng thì add phẩn tử đó vào mảng
            {
                arrLe[indexArrLe]=arr[i];
                indexArrLe++;
            }
        }
    }
    countArr=tong;// gán tổng mảng cho biến countArray
    return tong-min;// tim max 4 số thì phải trừ  cho số min của mảng
}

// tổng 4 số bé
function TongMin4Arr(arr){
    let tong=0;
    let min=0;// gán bằng 0 vì đề cho mảng là các số nguyên dương
    for(let i=0;i<arr.length;i++)
    {
        tong=tong+arr[i];
        if(min<=arr[i])
        {
            min=arr[i];
        }
    }
    return tong-min;
}
var max=TongMin4Arr(arr)
console.log({Min4:max});// in ra tổng 4 số nhỏ nhất trong mảng 5 số 
var temple=TongMax4Arr(arr)
console.log({Max4:temple}); // in ra tổng 4 số  lớn nhất trong mảng
// in ra mảng các số lẻ
console.log({MangLe:arrLe});
console.log({MangChan:arrChan});