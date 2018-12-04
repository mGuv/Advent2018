import { Moment} from 'moment';

class SleepWindow
{
    public GuardId:number;
    public Start:Moment;
    public End:Moment;

    public constructor(guardId:number, start:Moment, end:Moment)
    {
        this.GuardId = guardId;
        this.Start = start;
        this.End = end;
    }

    public GetMinutes(): number[]
    {
        const minutes:number[] = [];

        const start:Moment = this.Start.clone();
        while(start < this.End) {
            minutes.push(Number(start.format('mm')));
            start.add("1", "minute");
        }

        return minutes;
    }

}

export default SleepWindow;