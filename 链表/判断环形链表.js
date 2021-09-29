/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-29 14:45:29
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-29 14:52:36
 * @Description:
 */

/* 
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。
*/

/* 
思路：1.标记法；
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	while (head) {
		if (head.flag) {
			return true; // 如果节点变量存在 则有环
		}
		head.flag = true; // 给每个遍历的节点一个变量
		head = head.next; // 移动节点
	}
	return false;
};

/* 
思路：2.当一个链表有环时，快慢指针都会陷入环中进行无限次移动，然后变成了追及问题。想象一下在操场跑步的场景，只要一直跑下去，快的总会追上慢的。当两个指针都进入环后，每轮移动使得慢指针到快指针的距离增加一，同时快指针到慢指针的距离也减少一，只要一直移动下去，快指针总会追上慢指针
*/
const hasCycle = function (head) {
	if (head === null || head.next === null) {
		return false;
	}
	let slow = head;
	let fast = head.next;
	while (slow) {
		if (slow === fast) {
			return true;
		}
		slow = slow?.next || null;
		fast = fast?.next?.next || null;
	}
	return false;
};

/* 
思路：3.利用JSON.stringify()不能内循环解决
*/
var hasCycle = function (head) {
	try {
		JSON.stringify(head);
		return false;
	} catch {
		return true;
	}
};
