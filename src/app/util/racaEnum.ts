import {RacaDTO} from '../DTOs/racaDTO';

export class RacaEnum {
    public static Equinos:      RacaDTO   = {id:0, nome:"Equinos"};
    public static Muares:       RacaDTO   = {id:1, nome:"Muares"};
    public static Asininos:     RacaDTO   = {id:2, nome:"Asininos"};
    public static Peixes:       RacaDTO   = {id:3, nome:"Peixes"};
    public static Camarao:      RacaDTO   = {id:4, nome:"Camarao"};
    public static Moluscos:     RacaDTO   = {id:5, nome:"Moluscos"};
    public static Melifera:     RacaDTO   = {id:6, nome:"Melífera"};
    public static Meliponinia:  RacaDTO   = {id:7, nome:"Meliponínia"};
    public static Galinhas:     RacaDTO   = {id:8, nome:"Galinhas/Frangos"};
    public static Codornas:     RacaDTO   = {id:9, nome:"Codornas"};
    public static Perus:        RacaDTO   = {id:10, nome:"Perus"};
    public static Patos:        RacaDTO   = {id:11, nome:"Patos"};
    public static Marrecos:     RacaDTO   = {id:12, nome:"Marrecos"};
    public static Gansos:       RacaDTO   = {id:13, nome:"Gansos"};
    public static Faisoes:      RacaDTO   = {id:14, nome:"Faisões"};
    public static Galinhas_angola:RacaDTO = {id:15, nome:"Galinhas D'Angola"};
    public static Outras_Aves:  RacaDTO   = {id:16, nome:"Outras Aves"};

 
    public value = [
        RacaEnum.Equinos,
        RacaEnum.Muares,
        RacaEnum.Asininos,
        RacaEnum.Peixes,
        RacaEnum.Camarao,
        RacaEnum.Moluscos,
        RacaEnum.Melifera,
        RacaEnum.Meliponinia,
        RacaEnum.Galinhas,
        RacaEnum.Codornas,
        RacaEnum.Perus,
        RacaEnum.Patos,
        RacaEnum.Marrecos,
        RacaEnum.Gansos,
        RacaEnum.Faisoes,
        RacaEnum.Galinhas_angola,
        RacaEnum.Outras_Aves
    ]
    
    
}