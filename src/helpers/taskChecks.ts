export function createBodyCheck(
    title: string,
    description: string,
    finished: boolean,
    priority: number
):boolean{
    if(title == null || 
        description == null ||
        finished == null ||
        priority == null){
            return false
        } 
    return true
}

export function checkID(id: string): boolean{
    if(id.length < 20){
        return false
    }
    return true
}
