import { persona } from './persona.modules';

export class personaService{
  personas:persona[]=[new persona("Andres","Posada"), new persona("David","Cadena")]


agregarPersona (person:persona){
  this.personas.push(person);
}
}
