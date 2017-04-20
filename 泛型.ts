/**
 * Created by 周婷 on 2017/4/21.
 */
class MinHeap<T> {
    list: T[] = [];

    add(element: T): void {
        this.list.push(element);
        this.list.sort(numberSort())
        function numberSort() {
            if ((typeof element) == 'number')
                return function (a: any, b: any) {
                    return a - b;
                }
        }
    }

    min(): T {
        return this.list.length ? this.list[0] : null;
    }
}

let heap1 = new MinHeap<number>();
heap1.add(111);
heap1.add(5);
console.log(heap1.min());

let heap2 = new MinHeap<string>();
heap2.add('d');
heap2.add('c');
console.log(heap2.min());
