class Solver
{
    public Solve(input: string): string
    {
        if(input.indexOf("\n")) {
            input = input.replace("\n", " ");
        }

        const results:string[] = [];

        const boxIds: string[] = input.split(" ");
                // compare every string against every other string
        for(let i = 0; i < boxIds.length; i++) {
            for(let j = i + 1; j < boxIds.length; j++) {
                const firstId:string = boxIds[i];
                const secondId:string = boxIds[j];

                // compare each character, building a string as you go
                let result = "";
                for(let c = 0; c < firstId.length; c++)
                {
                    if(firstId.charAt(c) === secondId.charAt(c)) {
                        result += firstId.charAt(c);
                    }
                }
                results.push(result);
            }
        }

        let longestString: string = "";
        results.forEach((result:string) =>{
            if(result.length > longestString.length) {
                longestString = result;
            }
        });

        return longestString;
    }
}

export default Solver;