//actions e reducers
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Produto ja adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

//função casa fosse trabalhar com 'UseState'
//function adicionarAoCarrinho(produto: Produto) {
// if (carrinho.find((p) => p.id === produto.id)) {
// alert('Item já adicionado')
//} else {
//setCarrinho([...carrinho, produto])
//}
//}

//exportar meu reducer e action
export const { adicionarCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
