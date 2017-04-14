/**
 * Created by cuiwujie on 2017/4/11.
 */
// 递归
function recurFib(n) {
    if (n < 2) {
        return n;
    }
    else {
        return recurFib(n-1) + recurFib(n-2);
    }
}
动态规划
function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}
// 迭代版本的斐波那契函数
function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}
// 用于确定两个字符串中最长公共子串的函数
function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i <= word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j <= word2.length + 1; ++j) {
            lcsarr[i][j] = 0;
        }
    }
    for (var i = 0; i <= word1.length; ++i) {
        for (var j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i - 1] == word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    var str = "";
    if (max == 0) {
        return "";
    } else {
        for (var i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str;
    }
}

//测试 递归   动态规划
function text01(){
    var start = new Date().getTime();
    console.log(recurFib(10));
    var stop = new Date().getTime();
    console.log(" 递归计算耗时 - " + (stop-start) + " 毫秒 ");

    start = new Date().getTime();
    console.log(dynFib(10));
    stop = new Date().getTime();
    console.log(" 动态规划耗时 - " + (stop-start) + " 毫秒 ");
}
