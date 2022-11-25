export function registrarUsuario(datosUsuario) {

    function crearId() {
        return `${Date.now()}`
    }
    function crearUsuario({ id = crearId(), username, password, direccion }) {
        if (!username) throw new Error(`MISSING_ARGS: el campo 'username' es obligatorio`)
        if (!password) throw new Error(`MISSING_ARGS: el campo 'password' es obligatorio`)
        if (!direccion) throw new Error(`MISSING_ARGS: el campo 'direccion' es obligatorio`)

        return {
            id,
            username,
            password,
            direccion,
        }
    }
    const usuario = crearUsuario(datosUsuario)
    guardarUsuario(usuario)
    return usuario
}