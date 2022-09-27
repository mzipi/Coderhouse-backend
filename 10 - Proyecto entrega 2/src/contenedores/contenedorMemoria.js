class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [
            {
                nombre: libros.nombre,
                autor: libros.autor
            }
        ]
        this.mascotas = [
            mascotas
        ]
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas = [...this.mascotas, mascota]
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }
    getBookNames(){
        return this.libros.map(i => i.nombre)
    }
}