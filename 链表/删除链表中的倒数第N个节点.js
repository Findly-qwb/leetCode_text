/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-29 14:22:57
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-29 14:23:44
 * @Description: 
 */
/* 
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

输入：head = [1,2], n = 1
输出：[1]
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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let prevNode = new ListNode(0,head); // 定义虚拟头节点

  let slow = prevNode; // 定义快慢节点
  let fast = prevNode;
  while(n--){
      fast = fast.next; // 先让快节点走n步
  }
  while(fast.next){  // 在让快慢节点同时走，直到快指针的next为null
      fast =fast.next;
      slow = slow.next;
  }
  slow.next = slow.next.next;
  return prevNode.next
};