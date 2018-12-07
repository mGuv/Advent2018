class List<T>
{
    private list:T[] = [];
    
    get Count():number {
        return this.list.length;
    }
    
    public GetAt(index:number)
    {
        if(index < 0 || index >= this.Count) {
            throw new Error("Index " + index + " out of range on List");
        }
        return this.list[index];
    }

    public Insert(item:T)
    {
        this.list.push(item);
    }

    public Sort(sorter:(a:T, b:T) => number)
    {
        this.list.sort(sorter);
    }

    public Remove(item:T)
    {
        this.RemoveAt(this.list.indexOf(item));
    }

    public RemoveAt(index:number):T
    {
        if(index < 0 || index >= this.Count) {
            throw new Error("Index " + index + " out of range on List");
        }

        return this.list.splice(index, 1)[0];
    }

    public InsertAt(index:number, item:T)
    {
        if(index < 0 || index > this.Count) {
            throw new Error("Index " + index + " out of range on List");
        }
        this.list.splice(index, 0, item);
    }
}