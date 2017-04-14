/**
 * Created by cuiwujie on 2017/4/9.
 *
 * 数组测试平台
 */

function CArray(numElements){
    this.dataStore=[];
    this.pos=0;
    this.numElements = numElements;
    this.insert=insert;
    this.toString=toString;
    this.clear=clear;
    this.setData=setData;
    this.swap=swap;
    for(var i=0;i<this.numElements;i++){
        this.dataStore[i]=i;
    }
    //冒泡排序
    this.bubbleSort=bubbleSort;
    //选择排序
    this.selectionSort=selectionSort;
    //插入排序
    this.insertionSort=insertionSort;
    // 希尔排序
    this.shellSort =shellSort;

    //归并排序
    this.mergeSort=mergeSort;

    this.mergeArrays=mergeArrays;

    //定义希尔排序需要的对间隔序列
    this.gaps=[5,3,1];

    //快速排序
    this.qSort=qSort;

}
//生成随机数组
function setData(){
    for(var i=0;i<this.numElements;i++){
        this.dataStore[i]=Math.floor(Math.random() * (this.numElements+1));
    }
}
function clear(){
    for(var i=0;i<this.dataStore.length;i++){
        this.dataStore[i]=0;
    }
}
function insert(element){
    this.dataStore[this.pos++]=element
}
function toString(){
    var restr = "";
    for(var i=0;i<this.dataStore.length;i++){
        restr+= this.dataStore[i]+" ";
        if(i<0 && i%10==0){
            restr+="\n";
        }
    }
    return restr;
}
function swap(arr ,index1,index2){
    var temp = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}
//冒泡排序
function bubbleSort(){
    var numElements = this.dataStore.length;
    var temp ;
    for(var outer=numElements;outer>=2;--outer){
        for(var inner=0;inner<=outer-1;++inner){
                if(this.dataStore[inner]>this.dataStore[inner+1]){
                    this.swap(this.dataStore,inner,inner+1);
                }
        }
        console.log("第"+(numElements-outer+1)+"次排序:"+this.toString());
    }
}
//选择排序
function selectionSort(){
    var min,temp;
    for(var outer=0;outer<=this.dataStore.length-2;++outer){
        min=outer;
        for(var inner=outer+1;inner<=this.dataStore.length-1;++inner){
            if(this.dataStore[inner]<this.dataStore[min]){
                min=inner;
            }
            this.swap(this.dataStore,outer,min);

        }
        console.log("第"+(outer+1)+"次排序:"+this.toString());
    }
}
//插入排序
function insertionSort(){
    var currtemp,inner;
    for(var outer=1;outer<=this.dataStore.length-1;++outer){
        //当前值
        currtemp = this.dataStore[outer];
        inner = outer;
       while(inner>0 && (this.dataStore[inner-1]>=currtemp)){
           this.dataStore[inner] = this.dataStore[inner-1];
            --inner;
       }
       this.dataStore[inner] = currtemp;
        console.log("第"+(outer+1)+"次排序:"+this.toString());
    }
}
// 希尔排序  优化插入排序
function shellSort(){
    for(var g=0;g<this.gaps.length;g++){
        for(var i=this.gaps[g];i<this.dataStore.length;++i){
            var temp = this.dataStore[i];
            for(var j=i;j>=this.gaps[g]&&this.dataStore[j-this.gaps[g]]>temp;j-=this.gaps[g]){
                this.dataStore[j] = this.dataStore[j-this.gaps[g]];
            }
            this.dataStore[j]=temp;
        }
        console.log("第"+(g)+"次排序:"+this.toString());
    }
}
//归并排序
function mergeSort() {
    if (this.dataStore.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < this.dataStore.length) {
        left = 0;
        right = step;
        while (right + step <= this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
        }
        step *= 2;
    }
}
function mergeArrays(arr,startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length-1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length-1] = Infinity; // 哨兵值
    leftArr[leftArr.length-1] = Infinity; // 哨兵值
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
}

//快速排序
function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        console.log(" 基准值：" + pivot + " 当前元素：" + arr[i]);
        if (arr[i] < pivot) {
            console.log(" 移动 " + arr[i] + " 到左边 ");
            left.push(arr[i]);
        } else {
            console.log(" 移动 " + arr[i] + " 到右边 ");
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}



// 测试冒泡排序
function test01(){
    var numElements = 10;
    var myNums = new CArray(numElements);
    myNums.setData();
    console.log("---------冒泡排序 start--------------");
    console.log("生成数组："+myNums.toString());
    myNums.bubbleSort();
    console.log("---------冒泡排序 end--------------");
}
//测试选择排序
function test02(){
    var numElements = 10;
    var myNums = new CArray(numElements);
    myNums.setData();
    console.log("---------选择排序 start--------------");
    console.log("生成数组："+myNums.toString());
    myNums.selectionSort();
    console.log("---------选择排序 end--------------");
}
//测试插入排序
function test03(){
    var numElements = 10;
    var myNums = new CArray(numElements);
    myNums.setData();
    console.log("---------插入排序 start--------------");
    console.log("生成数组："+myNums.toString());
    myNums.insertionSort();
    console.log("---------插入排序 end--------------");
}
//测试希尔排序
function text04(){
    var numElements = 10;
    var myNums = new CArray(numElements);
    myNums.setData();
    console.log("---------希尔排序 start--------------");
    console.log("生成数组："+myNums.toString());
    myNums.shellSort();
    console.log("---------希尔排序 end--------------");
}
//测试归并排序
function text05(){
    var nums = new CArray(10);
    nums.setData();
    console.log("---------归并排序 start--------------");
    console.log("生成数组："+myNums.toString());
    myNums.mergeSort();
    console.log("---------归并排序 end--------------");
}
//测试快速排序
function text06(){
    var nums = new CArray(10);
    nums.setData();
    console.log("---------快速排序 start--------------");
    console.log("生成数组："+nums.toString());
    console.log( nums.qSort(nums.dataStore));
    console.log("---------快速排序 end--------------");
}




