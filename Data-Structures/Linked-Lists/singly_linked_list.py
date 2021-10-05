
class Node:
	def __init__(self, data=None):
		self.data = data
		self.next = None


class SinglyLinkedList:
	def __init__(self):
		self.head = None
		self.tail = None
		self.length = 0

	def len(self):
		cur = self.head
		total = 0
		while cur.next != None:
			total+=1
			cur = cur.next
		return total

	
	def append(self, data):
		new_node = Node(data)
		if self.head is None:
			self.head = new_node
			self.tail = self.head
		else:
			cur_node = self.head
			while cur_node.next != None:
				cur_node = cur_node.next
			cur_node.next = new_node
			cur_node.next = self.tail
		self.length += 1

	def append_2(self, data):
		new_node = Node(data)
		if self.head is None:
			self.head = new_node
			self.tail = self.head
		else:
			self.tail.next = new_node
			self.tail = new_node
		self.length += 1
	
	def display(self):
		elems =  []
		cur_node = self.head
		while cur_node:
			elems.append(cur_node.data)
			cur_node=cur_node.next
			
		print(elems)

	
	def get(self, index):
		if index>=self.len():
			print("error index out of range")
			return None
		
		cur_idx=0
		cur_node=self.head
		while True:
			cur_node=cur_node.next
			if cur_idx==index: return cur_node.data
			cur_idx+=1

	def get_2(self, index):
		if index>=self.length:
			print("error index out of range")
			return None
		cur_node = self.head
		counter = 0
		while counter != index:
			cur_node = cur_node.next
			counter += 1
		
		return cur_node

	def erase(self, index):
		if index>=self.len():
			print("error index out of range")
			return None
		
		cur_idx=0
		cur_node=self.head
		while True:
			last_node=cur_node
			cur_node=cur_node.next
			if cur_idx==index:
				last_node.next=cur_node.next
				return
			cur_idx+=1

	def pop(self):
		if self.head is None:
			print("error linked list is empty")
			return None

		cur = self.head
		new_tail = cur

		while cur.next:
			new_tail = cur
			cur = cur.next

		self.tail = new_tail
		self.tail.next = None
		self.length -= 1

		if self.length == 0:
			self.head = None
			self.tail = None

		return cur

	def shift(self):
		if self.head is None:
			print("error linked list is empty")
			return None
		cur_head = self.head
		self.head = cur_head.next
		self.length -= 1
		if self.length == 0:
			self.tail = None
		
		return cur_head
	
	def unshift(self, data):
		new_node = Node(data)
		if self.head is None:
			self.head = new_node
			self.tail = self.head
		else:
			new_node.next = self.head
			self.head = new_node
		self.length += 1
	 
	def set_value(self, index, value):
		find_node = self.get_2(index)
		if find_node:
			find_node.data = value
			return True
		return False
	

	

my_list = SinglyLinkedList()
my_list.display()
my_list.append_2(3)
my_list.append_2(6)
my_list.append_2(9)
my_list.append_2(2)
my_list.display()
print(my_list.get_2(0).data)
my_list.erase(1)
my_list.display()
my_list.pop()
my_list.append_2(10)
my_list.append_2(93)
my_list.append_2(19)
my_list.set_value(2, 22)
my_list.display()

	
			


