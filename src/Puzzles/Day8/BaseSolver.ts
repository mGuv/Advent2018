import MetadataNode from "./MetadataNode";
import List from '../../Collections/List';

class BaseSolver
{
    protected ParseInput(input:string): MetadataNode
    {
        // Build input data stream
        const dataStream: List<number> = new List<number>();
        for(const n of input.split(" ")) {
            dataStream.Insert(Number(n));
        }

        // Build the stack of nodes to burn through, starting with the initial root node
        const nodeStack:List<MetadataNode> = new List<MetadataNode>();
        const rootNode:MetadataNode = new MetadataNode(dataStream.RemoveAt(0), dataStream.RemoveAt(0));
        nodeStack.Insert(rootNode);
        while(dataStream.Count > 0) {
            // get next node
            const node:MetadataNode = nodeStack.RemoveAt(nodeStack.Count - 1);
            if(node.Children.Count < node.NumberOfChildren) {
                // This node's children aren't done so reinsert it and then insert it's new child afterwards to keep order
                const child:MetadataNode = new MetadataNode(dataStream.RemoveAt(0), dataStream.RemoveAt(0), node);
                node.Children.Insert(child);
                nodeStack.Insert(node);
                nodeStack.Insert(child);
            } else {
                // All of the children are done so can read the metadata now
                if(node.Children.Count === 0) {
                    // Childless nodes use their total as the value
                    for(let i = 0; i < node.DataLength; i++) {
                        const data:number = dataStream.RemoveAt(0);
                        node.Total += data;
                    }
                    node.Value = node.Total;
                } else {
                    // Nodes with children use the metadata as indexs and use matching childrens' values
                    for(let i = 0; i < node.DataLength; i++) {
                        const data:number = dataStream.RemoveAt(0);
                        node.Total += data;
                        const index = data - 1;
                        if(index >= 0 && index < node.Children.Count) {
                            node.Value += node.Children.GetAt(index).Value;
                        }
                    }
                }
            }
        }

        return rootNode;
    }
}

export default BaseSolver;