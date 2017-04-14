/**
 * Created by cuiwujie on 2017/4/11.
 */

function seqSearch(arr,data){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==data){
            return true;
        }
    }
    return false;
}
//查找最小值
function findMin(arr){
    var min= arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min= arr[i];
        }
    }
    return min;
}
//查找最大值
function findMax(arr){
    var Max= arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>Max){
            Max= arr[i];
        }
    }
    return Max;
}

// 二分法

function binSearch(arr,data){
    var upperBound = arr.length-1;
    var lowerBound=0;
    while(lowerBound<=upperBound){
        var mid = Math.floor((lowerBound+lowerBound)/2);
        if(arr[mid]<data){
            lowerBound = mid+1;
        }else if(arr[mid]>data){
            upperBound =mid-1;
        }else{
            return mid;
        }
    }
}

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
    }
    for (var i = position+1; i < arr.length; ++i) {
        if (arr[i] == data) {
            ++count;
        }
        else {
            break;
        }
    }

    return count;
}



//测试二分法查找
function text01(){
    var nums=[];
    for(var i=0;i<100;i++){
        nums[i]=Math.floor(Math.random()*101);
    }
    var val = 2;
    console.log(nums);
    var retVal = binSearch(nums, val);
    if (retVal >= 0) {
        console.log(" 已找到 " + val + " ，所在位置为：" + retVal);
    }
    else {
        console.log(val + " 没有出现在这个数组中。");
    }
}




//测试二分法查找 与计数
function text02(){
    var nums=[11,22,22,22,11,13,14,154];
    // for(var i=0;i<100;i++){
    //     nums[i]=Math.floor(Math.random()*101);
    // }
    var val = 22;
    var retVal = count(nums, val);
    console.log(" 找到了 " + retVal + " 次重复出现的 " + val + "。");
}
text02();