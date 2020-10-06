import React from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../store/actions/usuarios.action';

//neste componente mostramos todos os usuarios que estao na lista 
//dentro de usuario.reducer.js localizado em um array
export const SideBar = (props) => {
    return (
        <div>
            {
                props.usuarios.list.map(( dados, index) => {
                    return (
                        <li key={ index }>
                            {dados.nome} <button onClick={()=>props.changeUser( dados ) }> Active </button>
                        </li>
                    )
                })
            }
        </div>
    )
}

//responsavel por pegar todos os dados que estao dentro do state redux 
const mapStateToProps = (state) => ({
    usuarios : state.usuariosReducer
})

//dispara uma acao para o action do redux
const mapDispatchToProps = dispatch => ({
    changeUser : ( user ) => dispatch( changeUser( user ))
})


//connect => conecta o SideBar com o react-redux
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
