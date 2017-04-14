 /**
 * Created by cuiwujie on 2017/4/6. 栈操作
  * 栈（stack）又名堆栈，它是一种运算受限的线性表。其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。
  *
  *
  * LIFO  后入先出
  *
  * 作用：
  * 判断回文字符串
  * 数制之间的转换
  * 递归演示
 */
function Stack(){
    this.dataStore=[];
    this.top=0;
     this.push=push;
     this.pop=pop;
     this.peek=peek;
     this.length=length;
     this.clear=clear;
 }

 function push(element){
    this.dataStore[this.top++]=element;
 }
 function pop(){
     return this.dataStore[--this.top];
 }
 function peek(){
    return this.dataStore[this.top-1];
 }
 function length(){
     return this.top;
 }
 function clear(){
     this.top=0;
 }