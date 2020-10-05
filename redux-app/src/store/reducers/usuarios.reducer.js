


const initialState = {
    usuarios : {
        action : null, 
        list : [
            'pedro',
            'carlos',
            'jorge',
            'luciano',
            'alex'
        ]
    }
}



const usuariosReducer = (state = initialState.usuarios, action ) => {
    if ( action.type === 'CHANGE_USER') {
        return {
            ...state,
            action: action.payload
        }
    }
    return state;
}



export default usuariosReducer;