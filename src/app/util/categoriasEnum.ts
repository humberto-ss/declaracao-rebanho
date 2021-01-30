export interface CategoriasType{
    id: number,
    nome: string,
    complemento?:string 
}
export class CategoriasEnum{
    public static ate_12_meses: CategoriasType = {id:0, nome:"Até 12 meses", complemento:" (1 ano)"};
    public static de_13_a_24_meses: CategoriasType = {id:1, nome:"13 a 24 meses", complemento:" (Sobreano)"};
    public static de_25_a_36_meses: CategoriasType = {id:2, nome:"25 a 36 meses", complemento:" (2 a 3 anos)"};
    public static mais_de_36_meses: CategoriasType = {id:3, nome:"+ de 36 meses", complemento:" (+ 3 anos)"};
    public static mais_de_12_meses: CategoriasType = {id:4, nome:"+ de 12 meses"};
    public static leitoes: CategoriasType = {id:5, nome:"Leitões"};
    public static cachacos: CategoriasType = {id:6, nome:"Cachaços"};
    public static matrizes: CategoriasType = {id:7, nome:"Matrizes"};
    public static ate_6_meses: CategoriasType = {id:8, nome:"Até 6 meses"};
    public static mais_de_6_meses: CategoriasType = {id:9, nome:"+ de 6 meses"};

    public values=[
        CategoriasEnum.ate_12_meses,
        CategoriasEnum.de_13_a_24_meses,
        CategoriasEnum.de_25_a_36_meses,
        CategoriasEnum.mais_de_36_meses,
        CategoriasEnum.mais_de_12_meses,
        CategoriasEnum.leitoes,
        CategoriasEnum.cachacos,
        CategoriasEnum.matrizes,
        CategoriasEnum.ate_6_meses,
        CategoriasEnum.mais_de_6_meses
    ];
}
