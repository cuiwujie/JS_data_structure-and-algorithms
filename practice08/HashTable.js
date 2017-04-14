/**
 * Created by cuiwujie on 2017/4/6.
 * 散列
 *
 *
 */

//使用一个类来表示散列表
function HashTable(data){
    this.table = new Array(137);
    //散列表中数据分布的方法
    this.simpleHash = simpleHash;
    //从散列表中读取数据的方法
    this.showDistro = showDistro;
    //向散列表中插入数据的方法
    this.put = put;
}
function simpleHash(data){
    var total = 0;
    //将字符串中每个字符的ascII码值相加
    for(var i = 0; i < data.length; ++i){
        total += data.charCodeAt(i);
    }
    //将ascII值的和除以数组长度的余数作为散列值
    return total % this.table.length;
}
function put(data){
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}
function showDistro(){
    var n = 0;
    for(var i = 0; i < this.table.length; ++i){
        if(this.table[i] != undefined){
            console.log(i + ":" + this.table[i]);
        }
    }
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for(var i = 0; i < someNames.length; ++i){
    hTable.put(someNames[i]);
}
hTable.showDistro();