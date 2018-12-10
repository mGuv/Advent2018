import BaseSolver from '../BaseSolver';
import List from '../../../Collections/List';
import Dictionary from '../../../Collections/Dictionary';
import Marble from '../Marble';
import { number } from 'prop-types';

class Solver extends BaseSolver {
        public Solve(input: string): string {
            const start:number = new Date().getTime();
            
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
            let currentMarbleValue: number = 2;
            const marbleOne:Marble = new Marble();
            const marbleTwo:Marble = new Marble();
            marbleOne.index = 0;
            marbleOne.value = 0;
            marbleTwo.index = 1;
            marbleTwo.value = 1;
            marbleOne.previous = marbleTwo;
            marbleOne.next = marbleTwo;
            marbleTwo.previous = marbleOne;
            marbleTwo.next = marbleOne;
            let currentMarble:Marble = marbleTwo;
            
            let currentPlayerIndex = 1;
            while (currentMarbleValue <= lastMarbleScore) {
                const newMarble = new Marble();
                newMarble.value = currentMarbleValue;
                const currentPlayer = currentPlayerIndex % players;
                currentPlayerIndex++;

                if (currentMarbleValue % 23 === 0) {
                    const affectedMarble:Marble = currentMarble.previous.previous.previous.previous.previous.previous.previous;
                    currentMarble = affectedMarble.next;
                    const prev:Marble = affectedMarble.previous;
                    const next:Marble = affectedMarble.next;
                    prev.next = next;
                    next.previous = prev;
                    currentMarbleValue++;
                    scores.Set(currentPlayer, scores.Get(currentPlayer) + newMarble.value + affectedMarble.value);
                } else {
                    currentPlayerIndex++;
                    // place marble two to the right
                    const atIndex:Marble = currentMarble.next.next;
                    const beforeIndex:Marble = atIndex.previous;
                    beforeIndex.next = newMarble;
                    atIndex.previous = newMarble;
                    newMarble.next = atIndex;
                    newMarble.previous = beforeIndex;
                    currentMarble = newMarble;
                    currentMarbleValue++;
                }
            }
    
            let highestScore = 0;
            scores.Values.forEach((next: number) => {
                if (next > highestScore) {
                    highestScore = next;
                }
            });
        console.log("B took " + ((new Date().getTime() - start)/ 1000) + "s");
            
            return highestScore.toString();
        }
}

export default Solver;