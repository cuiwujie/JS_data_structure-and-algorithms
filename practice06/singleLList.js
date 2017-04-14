/**
 * Created by cuiwujie on 2017/4/7.
 * 链表
 *百度百科：
 * 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。 相比于线性表顺序结构，操作复杂。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而线性表和顺序表相应的时间复杂度分别是O(logn)和O(1)。
 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。链表最明显的好处就是，常规数组排列关联项目的方式可能不同于这些数据项目在记忆体或磁盘上顺序，数据的存取往往要在不同的排列顺序中转换。链表允许插入和移除表上任意位置上的节点，但是不允许随机存取。链表有很多种不同的类型：单向链表，双向链表以及循环链表。链表可以在多种编程语言中实现。像Lisp和Scheme这样的语言的内建数据类型中就包含了链表的存取和操作。程序语言或面向对象语言，如C,C++和Java依靠易变工具来生成链表。
 */

// 单向链表

function Node(element){
    this.element = element;
    this.next=null;
}

function LList(){
    this.head = new Node("head");
    this.find=find;
    this.insert=insert;
    this.display=display;
    this.findPrev =findPrev;
    this.remove=remove;
    //是当前节点向前移动那个节点
    this.advance=advance;
    //当前节点就是头节点
    this.currentNode = this.head;
    this.length=length;
    //显示当前节点
    this.show = show;


}
function find(item){
    var currNode = this.head;
    while(currNode.element!=item){
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement,item){
    var newNode =new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}
function display(){
    var currNode = this.head;
    while(!(currNode.next==null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function findPrev(item){
    var currNode = this.head;
    while(!(currNode.next==null)&&(currNode.next.element!=item)){
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item){
    var prevNode = this.findPrev(item);
    if(!(prevNode.next==null)){
        prevNode.next = prevNode.next.next;

    }
}
function advance(n){
    while ((n>0) && !(this.currentNode.next==null)){
        this.currentNode = this.currentNode.next;
        n--
    }
}

//显示当前节点
function show(){
    document.write(this.currentNode.element);
}
function length(){
    var currNode = this.head;
    var i=0;
    while(currNode!=null){
        currNode = currNode.next;
        i++;
    }
    return i;
}

var cities = new LList();
cities.insert('Conway','head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma' , 'Carlisle');
cities.insert('dezhou' , 'Alma');
cities.insert('alasijia' , 'dezhou');
cities.display();
document.write('<br>');

cities.show();
cities.advance(4);
document.write('<br>');
cities.show();

document.write('<br>');
cities.show();