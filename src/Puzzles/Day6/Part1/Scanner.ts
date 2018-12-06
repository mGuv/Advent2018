import Coordinate from './Coordinate';

class Scanner {
    private min: Coordinate;
    private max: Coordinate;
    private allCoordinates: Dictionary<boolean>;
    private infinitePoints: Dictionary<boolean>;
    private tiedPoints: Dictionary<boolean>;
    private lowestPoint: Dictionary<{ who: Coordinate, val: number }>;

    public constructor(allCoordinates: Dictionary<boolean>, min: Coordinate, max: Coordinate) {
        this.max = max;
        this.min = min;
        this.allCoordinates = allCoordinates;
        this.infinitePoints = {};
        this.tiedPoints = {};
        this.lowestPoint = {};
    }

    public GetHighest(): number {
        // first check the edges, anyone lowest here is infinite?
        for (let x = this.min.X; x <= this.max.X; x++) {
            for (let y = this.min.Y; y <= this.max.Y; y++) {
                let atleastone: boolean = false;
                // well I only want to scan the edges
                if (x === this.min.X || x === this.max.X) {
                    atleastone = true;
                }

                if (y === this.min.Y || y === this.max.Y) {
                    atleastone = true;
                }
                if (!atleastone) {
                    continue;
                }
                // on the edge
                if (this.tiedPoints.hasOwnProperty(x + "," + y)) {
                    continue;
                }
                if (this.allCoordinates.hasOwnProperty(x + "," + y)) {
                    continue;
                }
                this.infinitePoints[this.lowestPoint[x + "," + y].who.toString()] = true;
            }
        }

        const scores: Dictionary<number> = {};
        Object.keys(this.lowestPoint).forEach((key: string) => {
            const entry: { who: Coordinate, val: number } = this.lowestPoint[key];
            if(this.tiedPoints.hasOwnProperty(key)) {
                return;
            }
            if (!scores.hasOwnProperty(entry.who.toString())) {
                scores[entry.who.toString()] = 0;
            }

            scores[entry.who.toString()] += 1;
        });

        let maxScore = 0;
        Object.keys(scores).forEach((key: string) => {
            if (this.infinitePoints.hasOwnProperty(key)) {
                return;
            }
            if (scores[key] > maxScore) {
                maxScore = scores[key];
            }
        });
        return maxScore + 1;
    }

    public StartScan(who: Coordinate) {
        const seen: Dictionary<boolean> = {};
        const stack: Coordinate[] = who.GetNeighbours();

        while (stack.length > 0) {
            const next: Coordinate = stack.splice(0, 1)[0];
            if (seen.hasOwnProperty(next.toString())) {
                continue;
            }

            seen[next.toString()] = true;

            if (this.allCoordinates.hasOwnProperty(next.toString())) {
                continue;
            }

            if (next.X < this.min.X || next.Y < this.min.Y || next.X > this.max.X || next.Y > this.max.Y) {
                continue;
            }

            // so start scoring
            const distance: number = next.Distance(who);
            if (!this.lowestPoint.hasOwnProperty(next.toString())) {
                this.lowestPoint[next.toString()] = {who, val: distance};
            } else {
                if (this.lowestPoint[next.toString()].val > distance) {
                    this.lowestPoint[next.toString()] = {who, val: distance};
                    delete this.tiedPoints[next.toString()];
                } else if (this.lowestPoint[next.toString()].val === distance) {
                    this.tiedPoints[next.toString()] = true;
                }
            }
            next.GetNeighbours().forEach((c: Coordinate) => {
                stack.push(c);
            })
        }
    }
}

export default Scanner;