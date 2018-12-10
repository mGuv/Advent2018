import BaseSolver from '../BaseSolver';
import List from '../../../Collections/List';
import Dictionary from '../../../Collections/Dictionary';


class Solver extends BaseSolver {
    public Solve(input: string): string {
        const result: RegExpMatchArray | null = /-?\d+/g[Symbol.match](input);
        if (!result) {
            return "Invalid";
        }

        const players: number = Number(result[0]);
        const scores: Dictionary<number, number> = new Dictionary<number, number>();
        for (let i = 0; i < players; i++) {
            scores.Set(i, 0);
        }


        const lastMarbleScore: number = Number(result[1]);
        let currentMarbleIndex: number = 1;
        let currentMarbleValue: number = 2;
        const marbles: List<number> = new List<number>();
        marbles.Insert(0);
        marbles.Insert(1);
        let currentPlayerIndex = 1;
        while (currentMarbleValue <= lastMarbleScore) {
            const currentPlayer = currentPlayerIndex % players;
            if (currentMarbleValue % 23 === 0) {
                let index = (currentMarbleIndex - 7) % marbles.Count;
                if(index < 0) {
                    index = index + marbles.Count;
                }
                const score = currentMarbleValue + marbles.RemoveAt(index);
                index = (currentMarbleIndex - 7) % marbles.Count;
                if (index < 0) {
                    index = marbles.Count + index;
                }
                currentMarbleIndex = index;
                scores.Set(currentPlayer, scores.Get(currentPlayer) + score);
                currentMarbleValue++;
                if(score === lastMarbleScore) {
                    break;
                }

            } else {
                currentMarbleIndex += 2;
                currentMarbleIndex = currentMarbleIndex % marbles.Count;
                marbles.InsertAt(currentMarbleIndex, currentMarbleValue);
                currentMarbleValue++;

            }
            currentPlayerIndex++
        }

        let highestScore = 0;
        scores.Values.forEach((next: number) => {
            if (next > highestScore) {
                highestScore = next;
            }
        });

        return highestScore.toString();
    }
}

export default Solver;