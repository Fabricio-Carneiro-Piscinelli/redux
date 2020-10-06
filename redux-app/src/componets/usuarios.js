import React from 'react'
import { connect } from 'react-redux'

export const Usuarios = ( props ) => {


    return (
        <div>
            <ul>
                <li>Nome : { props.usuarios.nome }</li>    
                <li>Cidade : {props.usuarios.cidade}</li>
            </ul>    
        </div>
    )
}

//responsavel por receber os dados armazanados dentro do state do redux
const mapStateToProps = (state) => ({
    usuarios : state.usuariosReducer 
})

//responsave por disparar alguma acao para o action
const mapDispatchToProps = {
    
}


//conecta a function Usuarios com o react-redux
export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)



