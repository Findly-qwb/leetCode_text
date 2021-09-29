/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-29 14:54:39
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-29 14:54:40
 * @Description: 
 */
/* 
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
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
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let prev = null;  // 定义前置节点为null
  let cur = head; // 当前节点为head
  while(cur){
      const next = cur.next; // 保存下一节点
      cur.next = prev; // 反转当前节点
      prev = cur; // 前置节点也后移
      cur = next; // 迭代后移
  }
  return  prev
};