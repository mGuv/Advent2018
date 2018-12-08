import List from '../../Collections/List';

class MetadataNode
{
    public Children:List<MetadataNode> = new List<MetadataNode>();
    public NumberOfChildren:number = 0;
    public DataLength: number = 0;
    public Parent:MetadataNode | null;
    public Value:number = 0;
    public Total:number = 0;

    public constructor(numberOfChildren:number, dataLength:number, parent:MetadataNode|null = null)
    {
        this.NumberOfChildren = numberOfChildren;
        this.DataLength = dataLength;
        this.Parent = parent;
    }
}

export default MetadataNode;