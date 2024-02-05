import { signal, computed } from "@angular/core";
import { Habilitat } from "app/models/Habilitat.model";


export const habilitats = signal<Habilitat[]>([]);
export const currentPage = signal(1);

export const labelTotalHabilitats = computed( () => `Total de habilitats ${ habilitats().length }`);
