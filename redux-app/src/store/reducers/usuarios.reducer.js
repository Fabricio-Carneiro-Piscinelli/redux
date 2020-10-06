

const initialState = {
    usuarios : {
        action : null, 
        list : [
            {
                "nome" : "fabricio",
                "cidade" : "borebi" 
            },
            {
                "nome" : "jose felipe",
                "cidade" : "presidente alves"
            }
        ]
    }
}

const usuariosReducer = (state = initialState.usuarios, action ) => {
    console.log( action )
    if ( action.type === 'CHANGE_USER') {
        return {
            ...state,
            nome: action.nome,
            cidade : action.cidade
        }
    }
    return state;
}



export default usuariosReducer;