/**
 * Created by cuiwujie on 2017/4/8.
 *
 * 二叉树 二叉树查找
 *
 * 非线性的结构，以分层的方式存储数据，具有层级关系，
 *
 * 二叉树：
 *二叉树的每个结点至多只有二棵子树(不存在度大于2的结点)，二叉树的子树有左右之分，次序不能颠倒。二叉树的第i层至多有2^{i-1}个结点；深度为k的二叉树至多有2^k-1个结点；对任何一棵二叉树T，如果其终端结点数为n_0，度为2的结点数为n_2，则n_0=n_2+1。
 一棵深度为k，且有2^k-1个节点称之为满二叉树；深度为k，有n个节点的二叉树，当且仅当其每一个节点都与深度为k的满二叉树中，序号为1至n的节点对应时，称之为完全二叉树。

 左侧子节点数值 < 父节点数值 < 右侧子节点数值
 *
 *
 * 二叉查找树是满足以下条件的二叉树：1.左子树上的所有节点值均小于根节点值，2右子树上的所有节点值均不小于根节点值，3，左右子树也满足上述两个条件。

 　　二叉查找树的插入过程如下：1.若当前的二叉查找树为空，则插入的元素为根节点，2.若插入的元素值小于根节点值，则将元素插入到左子树中，3.若插入的元素值不小于根节点值，则将元素插入到右子树中。

 　　二叉查找树的删除，分三种情况进行处理：

 　　1.p为叶子节点，直接删除该节点，再修改其父节点的指针（注意分是根节点和不是根节点），如图a。

 　　2.p为单支节点（即只有左子树或右子树）。让p的子树与p的父亲节点相连，删除p即可；（注意分是根节点和不是根节点）；如图b。

 　　3.p的左子树和右子树均不空。找到p的后继y，因为y一定没有左子树，所以可以删除y，并让y的父亲节点成为y的右子树的父亲节点，并用y的值代替p的值；或者方法二是找到p的前驱x，x一定没有右子树，所以可以删除x，并让x的父亲节点成为y的左子树的父亲节点。
 *
 */
// 实现二叉树查找
// var data=[];
function Node(data,left,right){
    this.data=data;
    this.left=left;
    this.right=right;
    this.show=show;
}
function show(){
    return this.data;
}
function BST(){
    this.root=null;
    this.insert = insert;//插入
    this.inOrder = inOrder;//中序遍历(升序)
    this.preOrder = preOrder;//先序遍历
    this.postOrder = postOrder;//后续遍历
    this.getMin = getMin;//最大值
    this.getMax = getMax;//最小值
    this.find =  find;//查找值
    this.remove = remove;//删除节点
    this.count = count;//获取节点数量
}
function insert(data){
    //创建一个新的节点
    var newNode  = new Node(data,null,null);
    //判断是否存在根节点，没有将新节点存入
    if(this.root == null){
        this.root = newNode;
    }else{
        //获取根节点
        var current = this.root;
        var parent;
        while(true){
            //将当前节点保存为父节点
            parent = current;
            //将小的数据放在左节点
            if(data < current.data){
                //获取当前节点的左节点
                //判断当前节点下的左节点是否有数据
                current = current.left;
                if(current == null){
                    //如果没有数据将新节点存入当前节点下的左节点
                    parent.left = newNode;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}
function inOrder(node){
    if(!(node == null)){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}
function preOrder(node){
    if(!(node == null)){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
function postOrder(node){
    if(!(node == null)){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}
function getMin(){
    var current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data;
}
function getMax(){
    var current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
}
function find(data){
    var current = this.root;
    while(current != null){
        if(data == current.data){
            return current;
        }else if(data < current.data){
            current = current.left;
        }else{
            current = current.right;
        }
    }
    return null;
}

function remove(data){
    root = removeNode(this.root,data);
}
function removeNode(node,data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        //如果没有只节点
        if(node.left == null &&  node.right){
            return null;
        }
        //如果没有左节点
        if(node.left == null){
            return node.right;
        }
        //如果没有右节点
        if(node.right == null){
            return node.left;
        }
        //有两节点
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right,tempNode.data);
        return node;
    }else if(data < node.data){
        node.left = removeNode(node.left,data);
        return node;
    }else{
        node.right = removeNode(node.right,data);
        return node;
    }
}
function getSmallest(node){
    var current = node;
    while(!(current.left == null)){
        current = current.left;
    }
    return current;
}
function count(){
    var counts = 0;
    var current = this.root;
    if(current == null){
        return counts;
    }
    return _count(current,counts);
}
function _count(node,counts){
    debugger;
    if(!(node == null)){
        counts ++;
        counts = _count(node.left,counts);;
        counts = _count(node.right,counts);
    }
    return counts;
}
var nums=new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log(nums.count());
inOrder(nums.root);
console.log("移除：");
nums.remove(23);
inOrder(nums.root);
console.log(nums.count());
