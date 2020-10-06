
//responsavel por promover uma acao 
export const changeUser = dt => ({
    type : 'CHANGE_USER',
    nome : dt.nome,
    cidade : dt.cidade 
})

