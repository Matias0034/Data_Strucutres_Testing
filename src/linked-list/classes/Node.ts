
import { HeadSingleList } from '../interfaces/singlyList'

export class Nodes implements HeadSingleList{

    next: Nodes | null;
    value: any;

    constructor(value: any) {
        this.value = value;
        this.next = null
    }
}