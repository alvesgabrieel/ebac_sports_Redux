import { useState } from 'react'
import { useDispatch } from 'react-redux/'

import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionarCarrinho } from '../../store/reducers/carrinho'
import { adicionarFavorito } from '../../store/reducers/favoritos'

type Props = {
  produto: ProdutoType
  //estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const [estaNosFavoritos, setEstaNosFavoritos] = useState(false)

  const adicionarAosFavoritos = () => {
    setEstaNosFavoritos(!estaNosFavoritos)
  }

  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          adicionarAosFavoritos()
          dispatch(adicionarFavorito(produto))
        }}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
