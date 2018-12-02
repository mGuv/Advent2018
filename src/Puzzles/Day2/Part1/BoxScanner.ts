import IScanResult from './IScanResult';

class BoxScanner
{
    public Scan(box:string): IScanResult {

        const lettersFound:Dictionary<number> = {};

        const letters:string[] = box.split("");

        letters.forEach((letter: string) => {
            if(!lettersFound.hasOwnProperty(letter)) {
                lettersFound[letter] = 0;
            }

           lettersFound[letter] = lettersFound[letter] + 1;
        });

        const result: IScanResult = {two: 0, three: 0};

        Object.keys(lettersFound).forEach((letter:string) => {
            const count: number = lettersFound[letter];

            if(count === 2) {
                result.two = 1;
            } else if (count === 3) {
                result.three = 1;
            }
        });

        return result;
    }
}

export default BoxScanner;