class Stack{
    constructor(){
        this.data = {};  //size
        this.size = 0;
    }

    push(item){
        this.data[this.size] = item;
        this.size +=1;
    }

    pop(){
        if (this.size ===0) return undefined;

        const item = this.peek();
        this.size -=1;
        delete this.data[this.size]
        return item;
    }

    peek(){
        if (this.size === 0) return undefined
        return this.data[this.size-1];
    }
}

module.exports = Stack;