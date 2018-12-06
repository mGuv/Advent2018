import Scanner from './Scanner';

import Coordinate from './Coordinate';

class Solver
{
    public Solve(input: string): string
    {
        const coord:string[] = input.split("\n");

        let minX:number = 10000;
        let minY:number = 10000;
        let maxX:number = -10000;
        let maxY:number = -10000;

        const points:Dictionary<boolean> = {};
        const all:Coordinate[] = [];

        coord.forEach((point:string) => {
           const parts:string[] = point.split(",");
           const x:number = Number(parts[0].trim());
           const y:number = Number(parts[1].trim());
           const c:Coordinate = new Coordinate(x, y);
           points[c.toString()] = true;
           all.push(c);

           if(x < minX) {
               minX = x;
           }

           if(x > maxX) {
               maxX = x;
           }

           if(y < minY) {
               minY = y;
           }

           if(y > maxY) {
               maxY = y;
           }
        });

        const min:Coordinate = new Coordinate(minX, minY);
        const max:Coordinate = new Coordinate(maxX, maxY);

        const scanner:Scanner = new Scanner(points, min, max);
        all.forEach((c:Coordinate) => {
            scanner.StartScan(c);
        })

        return (scanner.GetHighest()).toString();
    }
}

export default Solver;