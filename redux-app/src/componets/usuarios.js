import React from 'react'
import { connect } from 'react-redux'

export const Usuarios = ( props ) => {
    return (
        <div>
            <h2>
                Usuários ativo : {props.usuarios.action}    
            </h2>    
        </div>
    )
}




const mapStateToProps = (state) => ({
    usuarios : state.usuariosReducer 
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)



