class HashSet<TValue>
{
    private lookup: {[key:string]:TValue} = {};

    get Count(): number {
        return Object.keys(this.lookup).length;
    }

    get Values():TValue[] {
        return Object.keys(this.lookup).map((key:string) => {
            return this.lookup[key];
        });
    }

    public Add(value:TValue): boolean {
        if(this.Contains(value)) {
            return false;
        }
        this.lookup[JSON.stringify(value)] = value;
        return true;
    }

    public Contains(value:TValue): boolean {
        return this.lookup.hasOwnProperty(JSON.stringify(value));
    }

    public Remove(value:TValue):boolean {
        if(!this.Contains(value)) {
            return false;
        }
        delete this.lookup[JSON.stringify(value)];
        return true;
    }
}

export default HashSet;