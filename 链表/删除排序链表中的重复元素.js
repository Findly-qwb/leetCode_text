/*
 * @Author:  QWB <wenbin.qiu@hand-china.com>
 * @Date: 2021-09-29 14:39:58
 * @LastEditors: QWB
 * @LastEditTime: 2021-09-29 14:43:21
 * @Description:
 */

/* 
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
返回同样按升序排列的结果链表。

输入：head = [1,1,2]
输出：[1,2]

输入：head = [1,1,2,3,3]
输出：[1,2,3]
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
var deleteDuplicates = function (head) {
  // 从头结点开始遍历，如果当前节点值和下一节点值相等，则删除
  if(!head) return head;
  let cur = head;
  while(cur.next){
    if(cur.val === cur.next.val){
      cur.next = cur.next.next
    }else{
      cur = cur.next
    }
  }
  return head;
};
