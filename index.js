class Persona {
  #edad;
  #nombre;
  #telefono;

  constructor(edad, nombre, telefono) {
    this.#edad = edad;
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get edad() {
    return this.#edad;
  }

  set edad(edad) {
    this.#edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  get telefono() {
    return this.#telefono;
  }

  set telefono(telefono) {
    this.#telefono = telefono;
  }
}

const persona = new Persona();
persona.setEdad(30);
persona.setNombre("Juan");
persona.setTelefono("555-1234");

console.log("Edad:", persona.getEdad());
console.log("Nombre:", persona.getNombre());
console.log("Teléfono:", persona.getTelefono());
