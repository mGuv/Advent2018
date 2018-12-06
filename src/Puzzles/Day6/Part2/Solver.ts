
import Coordinate from '../Part1//Coordinate';

class Solver
{
    public Solve(input: string): string
    {
        const coord:string[] = input.split("\n");

        let minX:number = 10000;
        let minY:number = 10000;
        let maxX:number = -10000;
        let maxY:number = -10000;
        const all:Coordinate[] = [];

        coord.forEach((point:string) => {
            const parts:string[] = point.split(",");
            const x:number = Number(parts[0].trim());
            const y:number = Number(parts[1].trim());
            const c:Coordinate = new Coordinate(x, y);
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

        const maxDistance:number = 10000;
        let safe:number = 0;
        for(let x = minX; x <= maxX; x++) {
            for(let y = minY; y <= maxY; y++) {
                let distance:number = 0;

                const c:Coordinate = new Coordinate(x, y);
                all.forEach((a:Coordinate) => {
                    distance+=c.Distance(a);
                });
                if(distance < maxDistance) {
                    safe+=1;
                }
            }
        }

        return safe.toString();
    }
}

export default Solver;