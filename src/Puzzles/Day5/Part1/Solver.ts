
class Solver
{
    public Solve(input: string): string
    {
        let index:number = 0;
        const parts:string[] = input.split("");

        while(index < parts.length) {
            if(parts[index] === parts[index + 1]) {
                index += 1;
                continue;
            }


            let remove:boolean = false;
            if(parts[index].toUpperCase() === parts[index+1]) {
                remove = true;
            }

            if(parts[index].toLowerCase() === parts[index+1]) {
                remove = true;
            }

            if(remove) {
                parts.splice(index, 2);
                if(index >= 1) {
                    index -= 1;
                }
            }
            else {
                index+=1;
            }
        }

       return parts.join("").length.toString();
    }
}

export default Solver;