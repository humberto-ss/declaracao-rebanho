export class Util{
    constructor(){}
    
    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }
    getRandomId(): number{
        return Math.floor(Math.random()*1000);
    }
    getFirstDateOfLastYear(year:number = null):Date{
        let dateInicio = new Date();
        dateInicio.setDate(1)
        dateInicio.setMonth(0)
        dateInicio.setFullYear(new Date().getFullYear()-1)
        return dateInicio;
    }
}