export interface SubCategoriaType{
    id: number,
    nome: string
}
export class SubCategoriaEnum{
    public static macho: SubCategoriaType = {id:0, nome:"Macho"};
    public static femea: SubCategoriaType = {id:1, nome:"Fêmea"};

    public values=[
        SubCategoriaEnum.macho,
        SubCategoriaEnum.femea
    ];
}
