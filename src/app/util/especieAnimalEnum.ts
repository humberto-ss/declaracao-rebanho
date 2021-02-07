import { EspecieAnimalDTO } from '../DTOs/especieAnimalDTO';
import { RacaEnum } from './racaEnum'

export class EspecieAnimalEnum{
    public static bovinos: EspecieAnimalDTO = {id: 0, nome:"Bovinos"};
    public static bubalinos: EspecieAnimalDTO = {id: 1, nome:"Bubalinos"};
    public static ovinos: EspecieAnimalDTO = {id: 2, nome:"Ovinos"};
    public static caprinos: EspecieAnimalDTO = {id: 3, nome:"Caprinos"};
    public static suinos: EspecieAnimalDTO = {id: 4, nome:"Suinos"};
    public static javalis: EspecieAnimalDTO = {id: 5, nome:"Javalis"};
    public static equideos: EspecieAnimalDTO = {id: 6, nome:"Equideos",
     raca:[RacaEnum.Equinos,RacaEnum.Muares, RacaEnum.Asininos]};

    public static Animais_Aquaticos: EspecieAnimalDTO = {id: 7, nome:"Animais Aquaticos",
    raca:[RacaEnum.Peixes, RacaEnum.Camarao, RacaEnum.Moluscos]};

    public static abelhas: EspecieAnimalDTO = {id: 8, nome:"Abelhas",
     raca:[RacaEnum.Melifera, RacaEnum.Meliponinia]};

    public static aves: EspecieAnimalDTO = {id: 9, nome:"Aves",
    raca:[RacaEnum.Galinhas, RacaEnum.Codornas, RacaEnum.Perus, RacaEnum.Patos,
         RacaEnum.Marrecos,RacaEnum.Gansos, RacaEnum.Faisoes, RacaEnum.Galinhas_angola,
         RacaEnum.Outras_Aves]}

    public static caes: EspecieAnimalDTO = {id: 10, nome:"Cães"};
    public static gatos: EspecieAnimalDTO = {id: 11, nome:"Gatos"};
    public static coelhos: EspecieAnimalDTO = {id: 12, nome:"Coelhos"};
    
    public values =[
        EspecieAnimalEnum.bovinos,
        EspecieAnimalEnum.bubalinos,
        EspecieAnimalEnum.ovinos,
        EspecieAnimalEnum.caprinos,
        EspecieAnimalEnum.suinos,
        EspecieAnimalEnum.javalis,
        EspecieAnimalEnum.equideos,
        EspecieAnimalEnum.Animais_Aquaticos,
        EspecieAnimalEnum.abelhas,
        EspecieAnimalEnum.aves,
        EspecieAnimalEnum.caes,
        EspecieAnimalEnum.gatos,
        EspecieAnimalEnum.coelhos
    ]
}
