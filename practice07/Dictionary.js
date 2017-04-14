function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove  = remove;
    this.showAll = showAll;
    this.showAll2 = showAll2;
    this.count = count;
    //this.clear = clear;
}

//add()
function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key]
}

function remove(key) {
    delete this.datastore[key] //delete是Object类的一部分，使用对键删掉键和与其无关的值。
}

function showAll() {
    for (var key in Object.keys(this.datastore)) {  //调用Object的keys()方法可以返回传入参数中储存的所有键
        console.log(key + " -> " + this.datastore[key])
    }
}

function showAll2() {
    for (var key in Object.keys(this.datastore).sort()) { //显示字典的内容时，结果是有序的。使用Object.keys()函数。
        console.log(key + " -> " + this.datastore[key])
    }
}

function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    console.log(n)
}

// function clear() {
//     for each (var key in Object.keys(this.datastore)) {
//         delete this.datastore[key];
//     }
// }


//测试
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David","345");
pbook.add("Cynthia","456");
console.log(" David's extension: " + pbook.find("David")) ;// David's extension: 345
pbook.remove("David");
pbook.showAll()
pbook.count()//2
//pbook.clear()
pbook.showAll2()