class Dictionary<TKey, TValue>
{
    private lookup: { [key: string]: TValue } = {};

    get All(): Array<{ key: TKey, value: TValue }> {
        return Object.keys(this.lookup).map((key: string) => {
            return { key: JSON.parse(key), value: this.lookup[key] };
        });
    }

    get Keys(): TKey[] {
        return Object.keys(this.lookup).map((key: string) => {
            return JSON.parse(key);
        });
    }

    get Values(): TValue[] {
        return Object.keys(this.lookup).map((key: string) => {
            return this.lookup[key];
        });
    }

    public Get(key: TKey): TValue {
        if(!this.Contains(key)) {
            throw new Error("Element with key " + JSON.stringify(key) + " does not exist");
        }
        return this.lookup[JSON.stringify(key)];
    }

    public Set(key: TKey, value: TValue) {
        this.lookup[JSON.stringify(key)] = value;
    }

    public Contains(key: TKey): boolean {
        return this.lookup.hasOwnProperty(JSON.stringify(key));
    }

    public Delete(key: TKey) {
        delete this.lookup[JSON.stringify(key)];
    }
}

export default Dictionary;