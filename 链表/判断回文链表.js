/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-30 13:50:33
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-30 14:01:49
 * @Description:
 */

/* 
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

输入：head = [1,2,2,1]
输出：true

输入：head = [1,2]
输出：false

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	//遍历链表，将链表的每个节点值加入到数组中， 遍历数组，i=0 从数组头开始,j=length-1;从数组末开始
	let arr = [];
	while (head !== null) {
		arr.push(head.val);
		head = head.next;
	}
	for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
		if (vals[i] !== vals[j]) {
			return false;
		}
	}
	return true;
};
