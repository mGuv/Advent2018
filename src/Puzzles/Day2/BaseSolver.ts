class BaseSolver
{
    protected ParseInput(input: string): string[]
    {
        if(input.indexOf("\n")) {
            input = input.replace("\n", " ");
        }

        return input.split(" ");
    }
}

export default BaseSolver;