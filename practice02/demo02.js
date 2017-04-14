/**
 * Created by cuiwujie on 2017/4/6.  浅复制
 */

function copy(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
        arr2[i]=arr1[i];
    }
}

var nums=[];
for(var i=0;i<100;i++){
    nums[i]=i+1;
}
copy(nums,samenums)
nums[1]=100;
console.log( nums +"<br>");
console.log( samenums);