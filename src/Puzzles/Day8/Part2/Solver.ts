import List from '../../../Collections/List';
import BaseSolver from '../BaseSolver';
import MetadataNode from '../MetadataNode';

class Solver extends BaseSolver
{
    public Solve(input: string): string
    {
        // Value was calucalted during parsing for ease so just return the root nodes value
        const total:number = this.ParseInput(input).Value;
        return total.toString();
    }
}

export default Solver;