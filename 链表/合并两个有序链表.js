/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-29 16:19:17
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-29 16:24:18
 * @Description:
 */

/* 
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

输入：l1 = [], l2 = [0]
输出：[0]
*/

/* 
思路：递归解法，如果 l1 的 val 值更小，则将 l1.next 与排序好的链表头相接，l2 同理(暂时未理解)
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (l1 === null) {
		return l2;
	}
	if (l2 === null) {
		return l1;
	}
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};
