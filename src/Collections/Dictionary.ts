class Dictionary<TKey, TValue>
{
    private lookup: { [key: string]: TValue } = {};

    get All(): { key: TKey, value: TValue }[] {
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
        return this.lookup[JSON.stringify(key)];
    }

    public Add(key: TKey, value: TValue) {
        this.lookup[JSON.stringify(key)] = value;
    }

    public Has(key: TKey): boolean {
        return this.lookup.hasOwnProperty(JSON.stringify(key));
    }

    public Delete(key: TKey) {
        delete this.lookup[JSON.stringify(key)];
    }
}

export default Dictionary;