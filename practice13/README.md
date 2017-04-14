# 检索算法

## 顺序查找
从列表的第一个元素开始对列表元素逐个进行判断，知道找到想要找的结果，或者直到列表结尾也没有找到。也称作为线性查找。属于暴力查找技巧的一种，在执行查找的时候会访问到数据结构的所有元素。

    seqSearch()
## 二分法查找

算法：当数据量很大适宜采用该方法。采用二分法查找时，数据需是排好序的。主要思想是：（设查找的数组区间为array[low, high]）
（1）确定该区间的中间位置K（2）将查找的值T与array[k]比较。若相等，查找成功返回此位置；否则确定新的查找区域，继续二分查找。区域确定如下：a.array[k]>T 由数组的有序性可知array[k,k+1,……,high]>T;故新的区间为array[low,……，K-1]b.array[k]<T 类似上面查找区间为array[k+1,……，high]。每一次查找与中间值比较，可以确定是否查找成功，不成功当前查找区间缩小一半，递归找，即可。时间复杂度:O(log2n)。

## 算法
[一维数组，折半查找]
假如有一组数为3，12，24，36，55，68，75，88要查给定的值24.可设三个变量front，mid，end分别指向数据的上界，中间和下界，mid=（front+end）/2.

1.开始令front=0（指向3），end=7（指向88），则mid=3（指向36）。因为mid>x，故应在前半段中查找。

2.令新的end=mid-1=2，而front=0不变，则新的mid=1。此时x>mid，故确定应在后半段中查找。

3.令新的front=mid+1=2，而end=2不变，则新的mid=2，此时a[mid]=x，查找成功。
如果要查找的数不是数列中的数，例如x=25，当第三次判断时，x>a[mid]，按以上规律，令front=mid+1，即front=3，出现front>end的情况，表示查找不成功。
例：在有序的有N个元素的数组中查找用户输进去的数据x。
算法如下：

1.确定查找范围front=0，end=N-1，计算中项mid=（front+end）/2。

2.若a[mid]=x或front>=end,则结束查找；否则，向下继续。

3.若a[mid]<x,说明待查找的元素值只可能在比中项元素大的范围内，则把mid+1的值赋给front，并重新计算mid，转去执行步骤2；若a[mid]>x，说明待查找的元素值只可能在比中项元素小的范围内，则把mid-1的值赋给end，并重新计算mid，转去执行步骤2.

## 算法复杂度分析
时间复杂度

    1.最坏情况查找最后一个元素（或者第一个元素）Master定理T(n)=T(n/2)+O(1)所以T(n)=O(logn)
    2.最好情况查找中间元素O(1)查找的元素即为中间元素（奇数长度数列的正中间，偶数长度数列的中间靠左的元素）

空间复杂度：

    S(n)=n
