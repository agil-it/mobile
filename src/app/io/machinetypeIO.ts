import { GenericIO } from './genericIO';

export class MachineTypeIO extends GenericIO {
    private _description : string;
    
    get description() : string{
        return this._description;
    }
    set description(value : string){
        this._description = value;
    }
}