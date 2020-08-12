import { NumberToSexePipe } from 'src/app/number-to-sexe.pipe';
import { ActiviteEnum } from '../enums/activite.enum';
import { TypeSexe } from '../enums/type-sexe.enum';



export interface Personne {
        activite: ActiviteEnum;
        sexe: TypeSexe;
        age: number;
        poids: number;
        taille: number;
}
