class Coordinate {
    public X:number;
    public Y:number;

    public constructor(x:number, y:number)
    {
        this.X = x;
        this.Y = y;
    }

    public toString():string {
        return this.X +"," + this.Y;
    }

    public GetNeighbours():Coordinate[] {
        return [
          new Coordinate(this.X + 1, this.Y),
            new Coordinate(this.X - 1, this.Y),
            new Coordinate(this.X, this.Y - 1),
            new Coordinate(this.X, this.Y + 1),


        ];
    }

    public Distance(other:Coordinate):number {
        return Math.abs(this.X - other.X) + Math.abs(this.Y - other.Y);
    }
}

export default Coordinate;