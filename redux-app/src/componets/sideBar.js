import React from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../store/actions/usuarios.action';

export const SideBar = (props) => {
    return (
        <div>
            {
                props.usuarios.list.map((user, index) => {
                    return (
                        <li key={ index }>
                            {user} <button onClick={()=>props.changeUser( user ) }> Active </button>
                        </li>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    usuarios : state.usuariosReducer
})

const mapDispatchToProps = dispatch => ({
    changeUser : ( user ) => dispatch( changeUser( user ))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
