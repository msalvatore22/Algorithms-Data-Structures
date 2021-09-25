!#/usr/bin/python3

class Node:
  def __init__(self, value=None, next):
    self.value = value
    self.next = None


class SinglyLinkedList:
  def __init__(self, head=None, tail=None):
    self.head = None
    self.tail = None
    self.length = 0

  
  def push(self, value):
    new_node = Node(value)
    if self.head is None:
      self.head=new_node
      self.tail=self.head
    
    else:
      self.tail.next = new_node
      self.tail = new_node
    
    self.length += 1
    return self

  
      


