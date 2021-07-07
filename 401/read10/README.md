# Read: Stacks & Queues

## Content

Stack data structure that consists of Nodes each Node references the next Node in the stack

Stack: 

- Push - Nodes or items that are put into the stack are pushed

```
SUBROUTINE is_full(top)
    IF top = MAX_SIZE - 1 THEN  
        return True
    ELSE
        return False
    ENDIF
ENDSUBROUTINE

SUBROUTINE push(stack, top, data)
    IF is_full(top) = True THEN
        OUTPUT "Stack is full"
    ELSE
        top ← top + 1
        stack[top] ← data
    ENDIF
    RETURN top
ENDSUBROUTINE
```

- Pop - Nodes or items that are removed from the stack are popped

```
SUBROUTINE is_empty(top)
    IF top = -1 THEN
        RETURN True
    ELSE
        RETURN False
    ENDIF
ENDSUBROUTINE

SUBROUTINE pop(stack, top)  
    IF is_empty(top) = True THEN
        OUTPUT "Stack is empty"
        popped_item ← Null
    ELSE
        popped_item ← stack[top]
        top ← top - 1
    ENDIF
    RETURN (popped_item, top)
ENDSUBROUTINE
```

- Top - top of the stack. When you push something to the stack it will go on top.
- Peek - view the value of the top Node in the stack

```
SUBROUTINE peek(stack, top) 
    IF is_empty(top) = True THEN
        OUTPUT "Stack is empty"
        peeked_item = Null
    ELSE
        peeked_item ← stack[top]
    ENDIF
    RETURN peeked_item
ENDSUBROUTINE
```

- IsEmpty - returns true when stack is empty otherwise returns false
- top.next - when you pop something from the stack, you pop the current top and set the next top
- FILO (First In Last Out) - the first item added in the stack will be the last item popped out of the stack
- LIFO (Last In First Out) - that the last item added to the stack will be the first item popped out of the stack
- Push O(1) - pushing a Node onto a stack is an O(1) operation. Adding a Node will push it into the stack by assigning it as - the new top, with its next property equal to the original top.
- Pop O(1) - popping a Node off a stack is the action of removing a Node from the top, and the top Node will be re-assigned to - the Node that lives below and the top Node is returned to the user
- Peek O(1) - inspecting the top Node of the stack
- IsEmpty O(1) - pseudocode for it: ALGORITHM isEmpty() // INPUT <-- none // OUTPUT <-- boolean

Queue:

- Enqueue - Nodes or items that are added to the queue

```
SUBROUTINE is_full(rear)
    IF (rear + 1) = MAX_SIZE THEN
        RETURN True
    ELSE
        RETURN False
    ENDIF
ENDSUBROUTINE

SUBROUTINE enqueue(queue, rear, data)
    IF is_full(rear) = True THEN
        OUTPUT 'Queue is full'
    ELSE
        rear ← rear + 1
        queue[rear] ← data
    ENDIF
    RETURN rear
ENDSUBROUTINE
```

- Dequeue - Nodes or items that are removed from the queue

```
SUBROUTINE is_empty(front, rear)
    IF front > rear THEN
        RETURN True
    ELSE
        RETURN False
    ENDIF
ENDSUBROUTINE

SUBROUTINE dequeue(queue, front, rear)
    IF is_empty(front, rear) = True THEN
        OUTPUT "Queue is empty"
        dequeued_item ← Null
    ELSE
        dequeued_item ← queue[front]
        front ← front + 1
    ENDIF
    RETURN (dequeued_item, front)
ENDSUBROUTINE
```

- Front - the front/first Node of the queue
- Rear - the rear/last Node of the queue
- Peak - view the value of the front Node in the queue
- IsEmpty - returns true when queue is empty otherwise returns false
- FIFO (First In First Out) - the first item in the queue will be the first item out of the queue
- LILO (Last In Last Out) - the last item in the queue will be the last item out of the queue
- Enqueue O(1) - the enqueue action is when an item is added to a queue

```
SUBROUTINE is_full(front, rear)
    IF (rear + 1) MOD MAX_SIZE = front THEN
        RETURN True     
    ELSE
        RETURN False
    ENDIF
ENDSUBROUTINE

SUBROUTINE enqueue(queue, front, rear, data)
    IF is_full(front, rear) = True THEN
        OUTPUT 'Queue is full'
    ELSE
        rear ← (rear + 1) MOD MAX_SIZE
        queue[rear] ← data
        IF front = -1 THEN //first item to be queued
            front ← 0
        ENDIF
    ENDIF
    RETURN (front, rear)
ENDSUBROUTINE
```

- Dequeue O(1) - the dequeue action is when an item is removed from a queue

```
SUBROUTINE is_empty(rear)
    IF front = -1 THEN
        RETURN True     
    ELSE
        RETURN False
    ENDIF
ENDSUBROUTINE

SUBROUTINE dequeue(queue, front, rear)
    IF is_empty(rear) = True THEN
        OUTPUT "Queue is empty"
        dequeued_item ← Null
    ELSE
        dequeued_item ← queue[front]
        IF front = rear THEN # nothing left in queue
            front ← -1
            rear ← -1
        ELSE        
            front ← (front + 1) MOD maxsize
        ENDIF
    ENDIF
    RETURN (dequeued_item, front, rear)
ENDSUBROUTINE
```

- Peek O(1) - inspecting the front Node of the queue, and you want to check the isEmpty before hand
- IsEmpty O(1) - pseudocode for it: ALGORITHM isEmpty() // INPUT <-- none // OUTPUT <-- boolean

***

[⇐ Home Page](../../README.md)