import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum assumenda
      sunt, perferendis dicta enim, veritatis quisquam veniam iure ipsam et
      libero odio soluta dolore quae quaerat! Facilis recusandae illo porro!
    </Descricao>
  </Card>
)

export default Product
