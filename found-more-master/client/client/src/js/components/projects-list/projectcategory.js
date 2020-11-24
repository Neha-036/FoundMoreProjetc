import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import OrderableItemAmountChanger from '../orderable-item-amount-changer'

const ProductListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid #bebebe;
  width: 100%;
  height: 92px;
`

const ProductInfo = styled.div`
  @media (max-width: ${({ theme }) => theme.bpUpToTablet}) {
    & > h5 {
      font-size: 12px;
    }
  }
`

const Img = styled.a`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.image});
  width: 110px;
  height: 80%;
  margin-right: 10px;
`
const MoreInfo = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  &:hover {
    text-decoration: underline;
  }
`

const Box = styled.img`
  width: 12px;
  margin-left: 50px;
  margin-right: 10px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Product = ({ properties, id, product, state, ...props }) => {
  const renderProduct = properties => {
    return (
      <ProductListItem>
        <Img
          href={`/projects/detail/${id}`}
          image={
            Array.isArray(properties.images) && properties.images.length > 0
              ? properties.images[0].location
              : '/images/no-image.jpg'
          }
        />
        <Link
          style={{ flexGrow: 1 }}
          to={{ pathname: `/projects/detail/${id}`, state }}
        >
          <ProductInfo>
            <h5>{properties.name}</h5>
            <Container>
              <h6>{properties.articleNumber}</h6>
              <React.Fragment>
                <Box src="/images/box.svg" alt="Stock" />
                <p>{props.stock === null ? '0' : props.stock}</p>
              </React.Fragment>
            </Container>
            <MoreInfo>More information</MoreInfo>
          </ProductInfo>
        </Link>
        <OrderableItemAmountChanger
          id={id}
          properties={properties}
          product={product}
        />
      </ProductListItem>
    )
  }
  if (properties) return renderProduct(properties)
  if (product) return renderProduct(product.properties)
  return null
}

export default Product
