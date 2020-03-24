import { Competence } from './competence.model';
import { Metier } from './metier.model';

export class Candidat{
	public nom: string;
	public prenom: string;
	public telephone: string;
	public ville: string;
	public age: number;
	public disponibilite: string;
	public experience: string;
	public salaire: number;
	public competence: Competence;
    public metier: Metier;

}