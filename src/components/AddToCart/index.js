import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Button } from '../../styles/Button'
import Quantity from '../Quantity'

const AddToCart = ({ product }) => {
  const { colors, stock } = product

  const [activeColor, setActiveColor] = useState(colors[0])

  const [qty, setQty] = useState(1)

  const decreaseQty = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1)
  }

  const increaseQty = () => {
    qty < stock ? setQty(qty + 1) : setQty(stock)
  }

  return (
    <Wrapper>
      <div className='colors'>
        <p>
          Colour:
          {colors.map((currColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: currColor }}
                className={
                  activeColor === currColor ? 'btnStyle active' : 'btnStyle'
                }
                onClick={() => setActiveColor(currColor)}
              >
                {activeColor === currColor && (
                  <FaCheck className='checkStyle' />
                )}
              </button>
            )
          })}
        </p>
      </div>
      {/* Qty Component  */}
      <Quantity qty={qty} decreaseQty={decreaseQty} increaseQty={increaseQty} />

      <NavLink to='/cart'>
        <Button>Add To Cart</Button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`

export default AddToCart
