/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-28 20:57:14
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-28 20:58:41
 * @Description:
 */

/* 
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

输入：x = 121
输出：true

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
*/

var isPalindrome = function (x) {
	// 字符串转数字反转再转Number判断是否相等
	let str = x.toString();
	let arr = str.split('');
	return Number(arr.reverse().join('')) === x;
};
