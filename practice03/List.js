/**
 * Created by cuiwujie on 2017/4/6.
 列表是一种数据项构成的有限序列，即按照一定的线性顺序，排列而成的数据项的集合，在这种数据结构上进行的基本操作包括对元素的的查找，插入，和删除
 列表的两种主要表现是数组和链表，栈和队列是两种特殊类型的列表
 */

function List(){
    //列表元素个数
    this.listSize=0;
    //列表当前位置
    this.pos=0;
    this.dataStore=[];
    this.clear=clear;
    this.find=find;
    this.tostring=tostring;
    this.insert=insert;
    this.append=append;
    this.remove=remove;
    this.front=front;
    this.end=end;
    this.prev=prev;
    this.next=next;
    this.length=length;
    this.currPos=currPos;
    this.moveTo=moveTo;
    this.getElement=getElement;
    this.contains=contains;
}
function append(element){
    this.dataStore[this.listSize++]=element;
}
function remove(element){
    var foundAt = this.find(element);
    if(foundAt>-1){
        this.dataStore.splice(foundAt);
        --this.listSize;
        return true;
    }
    return false;
}
function find(element){
    for(var i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return i;
        }
    }
    return -1;
}
function length(){
    return this.listSize;
}
function tostring(){
    return this.dataStore;
}
function clear(){
    delete this.dataStore;
    this.dataStore=[];
    this.listSize = this.pos=0;
}
function insert(element,after){
    var inserPos = this.find(after);
    if(inserPos>-1){
        this.dataStore.splice(inserPos+1,0,element);
        ++this.listSize;
        return true;
    }
    return false;
}
function front(){
    this.pos=0;
}
function end(){
    this.pos=this.listSize-1;
}
function prev(){
    if(this.pos>0){
        --this.pos;
    }
}
function next(){
    if(this.pos<this.listSize-1){
        ++this.pos;
    }
}
function currPos(){
    return this.pos;
}
function moveTo(position){
    this.pos=position;
}
function getElement(){
    return this.dataStore[this.pos];
}
function contains(Element){
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i]==Element){
            return true;
        }
    }
    return false;
}

var names= new List();
names.append("A");
names.append("ZB");
names.append("C");

names.front();
names.next();
console.log(names.getElement());