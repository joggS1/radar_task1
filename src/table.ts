import { type } from "os";
import getElMaxLenght from "./utils/getElMaxLenght";
abstract class ATable{
    
    abstract print(): void 
    abstract deleteRow(rowNumber: number, data: (string[] | boolean)): boolean
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
    constructor(data:string  [][]) {
        super();
        this._rowsCount = data.length
        this._columnsCount = data[0].length
        this._data = data
        this.maxLength = getElMaxLenght(data)
    }

    deleteRow(rowNumber: number, data: (string[] | boolean)): boolean {
        if(rowNumber - 1  >= this._data.length){
            return false
        }
        if(typeof data === 'boolean'){
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