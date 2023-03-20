export class Task{
    constructor( private _detail: string){}

    public get detail():string{
        return this._detail;
    }
}