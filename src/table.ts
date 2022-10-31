import { type } from "os";
import getElMaxLenght from "./utils/getElMaxLenght";
abstract class ATable{
    
    abstract print(): void 
    abstract deleteRow(rowNumber: number, data?: string[] ): boolean
}

class Table extends ATable{
     private _rowsCount: number;
     private _columnsCount: number;
     private maxLength: number;
     private _data: string [][];
     get rowsCount(): number{
        return this._rowsCount
     }
     get columnsCount(): number{
        return this._columnsCount
     }
    constructor(data:string  [][]);
    constructor(data:  string[], rowCount: number, columnCount: number);
     constructor(...args: any[])
    {
        super();
            if(args.length == 1 && typeof args[0] === 'object') {
                this._data = args[0].slice(0)
                this._rowsCount = this._data.length
                this._columnsCount = this._data[0].length
                this.maxLength = getElMaxLenght(this._data)
            }
            else if(args.length == 3, args[1] !== undefined && args[2] !== undefined){
                this._data = []
                let temp:string[] = args[0].slice(0)
                for(let i:number = 0; i<args[1]; i ++){
                    this._data[i] = []
                    for(let j:number = 0; j<args[2]; j ++){
                        this._data[i][j] = temp[i*args[2]+j]
                        
                    }
                    
                }
                this.maxLength = getElMaxLenght(this._data)
                this._rowsCount = args[1]
                this._columnsCount = args[2]
            }
            else {
                throw new Error('Undefined constructor.');
            }
            
    }

    deleteRow(rowNumber: number, data?: string[] ): boolean {
        if(rowNumber - 1  >= this._data.length){
            return false
        }
        if(typeof data === 'undefined'){
            this._data.splice(rowNumber-1, 1);
            this._rowsCount -= 1
            return true
        }
        else if ( Array.isArray(data)  && data.length == this._data[rowNumber-1].length ){
            this._data[rowNumber-1].splice(0, data.length, ...data)
            this.maxLength = getElMaxLenght(this._data)
            return true
        }
        return false
    }

    print(): void {
    let result: string [] = [];
        for( let i:number = 0; i < this._rowsCount;  i++){
            result[i] = ""
            for( let j:number = 0; j < this._columnsCount;  j++){
                if (j === 0 ){
                    result[i] +=  '| ' + this._data[i][j] 
                }
                else
                {
                    result[i] +=  ' | '+  this._data[i][j] + " ".repeat((this.maxLength - this._data[i][j].length))
                }
            }
        result[i] += ' |'
        }

        console.log(result.join('\n' + '―'.repeat(result[0].length)+ '\n') + "\n\n")
    }
    
}

export default Table;