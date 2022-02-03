class Nodes {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


export class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Nodes(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}


let mySinglyLinkedList = new MySinglyLinkedList('ss');
mySinglyLinkedList.append(1);
