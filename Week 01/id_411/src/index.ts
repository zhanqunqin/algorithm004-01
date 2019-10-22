/**
 * 循环双端队列
 * */
class CircularQueue {
    readonly arrDeque: Array<any>;
    private frontIndex: number = 0;
    private tailIndex: number = 0;
    readonly size: number;

    constructor (size: number) {
        const realSize = size + 1;
        this.arrDeque = new Array<any>(realSize);
        this.size = realSize;
    }

    /**
     * 头部入队
     * */
    public addToHead<E> (e: E) {
        if (this.isFull()) return false;
        const { size } = this;
        this.frontIndex = (--this.frontIndex + size) % size;
        this.arrDeque[this.frontIndex] = e;
        return true;
    }

    /**
     * 尾部入队
     * */
    public addToTail<E> (e: E) {
        if (this.isFull()) return false;
        this.arrDeque[this.tailIndex] = e;
        this.tailIndex = (++this.tailIndex) % this.size;
        return true;
    }

    /**
     * 头部出队
     * */
    public delFromHead () {
        if (this.isEmpty()) return false;
        const { size } = this;
        this.frontIndex = (++this.frontIndex) % size;
        return true;
    }

    /**
     * 尾部出队
     * */
    public delFromTail () {
        if (this.isEmpty()) return false;
        const { size } = this;
        this.tailIndex = (--this.tailIndex + size) % size;
        return true;
    }

    /**
     * 查询队满
     * */
    public isFull () {
        const { frontIndex, tailIndex, size } = this;
        return (tailIndex + 1) % size === frontIndex;
    }

    /**
     * 查询队空
     * */
    public isEmpty () {
        const { frontIndex, tailIndex } = this;
        return frontIndex === tailIndex;
    }

    /**
     * 查询长度
     * */
    public length () {
        const { frontIndex, tailIndex, size } = this;
        return (tailIndex - frontIndex + size) % size;
    }

    /**
     * 获取头部元素
     * */
    public getHead () {
        return this.isEmpty() ? -1 : this.arrDeque[this.frontIndex];
    }

    /**
     * 获取头部元素
     * */
    public getTail () {
        const { size } = this;
        return this.isEmpty() ? -1 : this.arrDeque[(this.tailIndex - 1 + size) % size];
    }

    /**
     * 清空队列
     * */
    public clear () {
        this.frontIndex = this.tailIndex = 0;
    }
}