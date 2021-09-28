/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-28 20:37:10
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-28 20:48:29
 * @Description:
 */
/* 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 利用js Map数据结构
	let map = new Map();
	//遍历数组
	for (let i = 0; i < nums.length; i++) {
		// 计算差值，
		let cha = target - nums[i];
		if (map.has(cha)) {
			// 如果map中能找到差值，返回对应值 和 index
			return [map.get(cha), i];
		} else {
			// 如果map中没找到差值，将当前值作为key，index作为value存入到map中
			map.set(nums[i], i);
		}
	}
};

/* 
输入：nums = [3,2,4], target = 6
输出：[1,2]
*/
