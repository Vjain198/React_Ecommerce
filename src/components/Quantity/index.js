import { FaMinus, FaPlus } from 'react-icons/fa'

const Quantity = ({ qty, decreaseQty, increaseQty }) => {
  return (
    <div className='cart-button'>
      <div className='amount-toggle'>
        <button onClick={() => decreaseQty()}>
          <FaMinus />
        </button>
        <div className='amount-style'>{qty}</div>
        <button onClick={() => increaseQty()}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default Quantity
