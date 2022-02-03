import { MySinglyLinkedList } from './classes/SinglyList'

export default {
    execute(): void {
        let mySinglyLinkedList: MySinglyLinkedList = new MySinglyLinkedList('ss')
        
        mySinglyLinkedList.append(1)
    
        console.log(mySinglyLinkedList)
    }
}
