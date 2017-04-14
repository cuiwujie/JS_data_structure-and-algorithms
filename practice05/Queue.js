/**
 * Created by cuiwujie on 2017/4/6.
 * 队列是一种列表，队尾插入，队首删除
 *
 * 先进先出 FIFO
 */
function Queue(){
    this.dataStore=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.front=front;
    this.back=back;
    this.toString=toString;
    this.empty=empty;
}

function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(element){
    this.dataStore.shift();
}
function front(){
    return this.dataStore[0];
}
function back(){
    return this.dataStore[this.dataStore.length-1];
}
function toString(){
    var retstr="";
    for(var i=0;i<this.dataStore.length;i++){
        retstr +=this.dataStore[i] +"\n";
    }
    return retstr;
}
function empty(){
    if(this.dataStore.length==0){
        return true;
    }else{
        return false;
    }
}
