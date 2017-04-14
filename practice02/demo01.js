/**
 * Created by cuiwujie on 2017/4/6.  浅复制
 */
var nums=[];
for(var i=0;i<100;i++){
    nums[i]=i+1;
}
var samenums=nums;
nums[1]=100;
console.log( nums +"<br>");
console.log( samenums);