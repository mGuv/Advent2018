import List from '../../../Collections/List';
import BaseSolver from '../BaseSolver';
import MetadataNode from '../MetadataNode';

class Solver extends BaseSolver {
        public Solve(input: string): string {
            // Build node stack
            const nodes: List<MetadataNode> = new List<MetadataNode>();
            nodes.Insert(this.ParseInput(input));

            // Pop a node, add its total to the total and add its children to the stack
            let total: number = 0;
            while (nodes.Count > 0) {
                const node: MetadataNode = nodes.RemoveAt(0);
                total += node.Total;
                for (let i = 0; i < node.Children.Count; i++) {
                    nodes.Insert(node.Children.GetAt(i));
                }

            }

            return total.toString();
        }
}

export default Solver;