/*
 * @Author:  Findly <weninqiu42@gmail.com>
 * @Date: 2021-11-10 21:06:16
 * @LastEditors: Findly
 * @LastEditTime: 2021-11-10 21:33:21
 * @Description: 最长公共前缀
 */

/* 
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

输入：strs = ["flower","flow","flight"]
输出："fl"

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
*/

/* 
解题思路：
1.如果传入空数组，则返回'';
2.令最长公共前缀 result 的值为第一个字符串，进行初始化;
3.遍历剩余字符串数组，再遍历字符串的每一个值，一旦出现一个值不相等，则停止，并且更新result的值
4.如果在遍历过程中出现了result为'',则不存在最长公共前缀
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	// 如果传入空数组 则返回空字符串
	if (strs.length === 0) return '';
	// 默认公共前缀为传入数组的第一项
	let result = strs[0];
	for (let i = 1; i < strs.length; i++) {
		let j = 0;
		for (; j < result.length && j < strs[i].length; j++) {
			// 如果公共前缀的第j项不等于当前字符串的第j项就停止
			if (result[j] !== strs[i][j]) break;
		}
		// 更新公共前缀，取公共前缀的0-j作为结果
		result = result.substr(0, j);
		if (result === '') return '';
	}
	return result;
};


/* 
解题思路：
1.利用下标，设定初始下标为第一个数组元素的长度
2.设定下标flag为-1，如果第i个字符串的每个下标值都与strs[0]的每个下标志相等则flag++
3.如果不相等了就停止
4.如果下标flag还是为-1 则说明全部都不相等，返回''
5.截取strs[0]的0-flag处返回即为最长公共前缀
*/
let longestCommonPrefix = function (strs) {
	// write code here
	if (strs.length === 0 || strs === null) {
		return '';
	}
	let maxid = strs[0].length - 1;
	for (let i = 1; i < strs.length; i++) {
		var indx = -1; //下标flag
		while (indx < maxid && indx < strs[i].length - 1) {
			if (strs[0].charAt(indx + 1) === strs[i].charAt(indx + 1)) {
				indx++;
			} else {
				break;
			}
		}
		if (indx === -1) {
			return '';
		}
		maxid = indx;
	}
	return strs[0].substring(0, maxid + 1);
};
