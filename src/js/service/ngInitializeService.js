export class ngInitializeService {
    constructor($q) {
        this.$q = $q;
        this.stack = [];
    }

    setPromisesStack(stack) {
        this.stack = stack;
    }

    addPromiseToStack(promise) {
        this.stack.push(promise);
    }

    clearStack() {
        this.stack = [];
    }

    getPromises() {
        return this.$q.all(this.stack);
    }
}
