"use strict";

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola mi nombre es: ${this.nombre} y tengo: ${this.edad}`);
  }

  static definicion(apellido) {
    console.log(`Una persona es un ser humano ${apellido}`);
  }
}

class Desarrollador extends Persona {
  saludoDesarrollador() {
    this.saludar();
    console.log("Soy un desarrollador de software");
  }
}

Persona.definicion("Ibarra");
