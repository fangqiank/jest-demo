const LinkedList = require("./linkedList");

const ll = LinkedList.fromValues(10, 20, 30, 40);

// console.log(ll.getByIndex(2).value);
ll.print();

ll.insertAtIndex(2, 60);
ll.print();

ll.removeHead();
ll.print();
