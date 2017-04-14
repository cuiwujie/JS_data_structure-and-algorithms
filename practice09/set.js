/**
 * Created by cuiwujie on 2017/4/8.
 *
 * 集合
 *包含不同元素的数据结构，集合中的元素称之为成员，集合中最重要的两个特性是：无序，不允许相同的成员存在
 *
 * 一些定义需要了解：
 * 空集，全集，集合相等，子集
 *
 * 对集合的操作：
 * 并集  交集   补集
 *
 * 集合的实现基于数组
 */

function set(){
    this.dataStore=[];
    // 添加元素
    this.add=add;
    // 移除集合中的某一个元素
    this.remove=remove;
    //判断集合大小
    this.size=size;
    //并集操作
    this.union=union;
    //计算来那个集合的交集
    this.intersect=intersect;
    //判断是否为子集
    this.subset=subset;
    //计算补集
    this.difference=difference;
    //显示集合元素
    this.show=show;
    //检查某一个元素是术语该集合
    this.contains=contains;

}
function add(data){
    //检测是否有相同元素
    if(this.dataStore.indexof(data)<0){
        this.dataStore.push(data);
        return true
    }else{
        return false;
    }
}
function remove(data){
    //查找元素在集合中的位置
    var pos=this.dataStore.indexOf(data);
    if(pos>-1){
        //删除元素
        this.dataStore.splice(pos,1);
        return true
    }else{
        return false
    }
}
function show(){
    return this.dataStore;
}
function contains(data){
    if(this.dataStore.indexof(data)>-1){
        return true
    }else{
        return false
    }
}
function union(set){
    var tempSet = new set();
    for(var i=0;i<this.dataStore.length;i++){
        tempSet.add(this.dataStore(i));
    }
    for(var i=0;i<set.dataStore.length;i++){
       if(!tempSet.contains(set.dataStore(i))){
           tempSet.dataStore.push(set.dataStore(i));
       }
    }
    return tempSet;
}
function intersect(set) {
    var tempSet = new set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore(i))) {
            tempSet.add(this.dataStore(i));
        }
    }
    return tempSet;
}
function subset(set){
    if(this.size()>set.size()){
        return false;
    }else{

        for(var member in this.dataStore){
            if(!set.contains(member)){
                return false;
            }
        }
    }
    return true;
}
function size(){
    return this.dataStore.length;
}

function difference(set){
    var tempSet = new set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore(i))) {
            tempSet.add(this.dataStore(i));
        }
    }
    return tempSet;
}