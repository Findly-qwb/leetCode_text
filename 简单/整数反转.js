/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-28 20:50:55
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-28 20:56:36
 * @Description:
 */
/* 
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
输入：x = 123
输出：321;

输入：x = -123
输出：-321
*/

/* 
思路：分别用求摩得到余数就是我们要的数，在通过除以10得到整数部分  再循环
*/

const MAX_INT = 2 ** 31 - 1;
const MIN_INT = -(2 ** 31);
var reverse = function (x) {
	// x = -123
	let ret = 0;
	if (x > MAX_INT || x < MIN_INT) return 0; // 边界判断传入的值

	while (x !== 0) {
		const value = x % 10; // 求摩得到余数既是每位数
		x = ~~(x / 10); // 除以10得到整数 用于下一次求摩
		ret = 10 * ret + value; // 返回值就是倒叙后的值
	}

	if (ret > MAX_INT || ret < MIN_INT) return 0; // 边界判断返回的值
	return ret;
};


/* 
思路：通过字符串转数组反转再转字符串转Number
*/
