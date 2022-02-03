import { HeadSingleList } from '../interfaces/singlyList'
import { Nodes } from './Node'

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
