
function getElMaxLenght(dataArray: string [][]): number {
    let elMaxLenght = dataArray[0][1].length;
    for (const row of dataArray) {
        row.forEach(el =>{
            if (el.length > elMaxLenght){
                elMaxLenght = el.length
            }
        } )
    }
    return elMaxLenght;
}

export default getElMaxLenght;