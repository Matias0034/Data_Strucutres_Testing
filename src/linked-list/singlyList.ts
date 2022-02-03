interface HeadSingleList {
    value: any,
    next: Nodes | null
}

class Nodes implements HeadSingleList{

    next: Nodes | null;
    value: any;

    constructor(value: any) {
        this.value = value;
        this.next = null
    }
}

export class MySinglyLinkedList {
    private head: HeadSingleList
    private tail: HeadSingleList
    private length: number
    constructor(value: any) {
        this.head = {
            value: value,
            next: null
        }


        this.tail = this.head

        this.length = 1
    }


    append(value: any) {
        const newNode = new Nodes(value)
        this.tail = newNode
        this.tail.next = newNode
        this.length++
    }
}

let mySinglyLinkedList = new MySinglyLinkedList('ss')

mySinglyLinkedList.append(1)