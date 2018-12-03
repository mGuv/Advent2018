class BaseSolver
{
    protected ParseInput(input: string):string[]
    {
        // Strip new lines as input varies between tests and copying the puzzle input
        if(input.indexOf('\n')) {
            input = input.split('\n').join(" ");
        }

        return input.split(" ");
    }
}

export default BaseSolver;