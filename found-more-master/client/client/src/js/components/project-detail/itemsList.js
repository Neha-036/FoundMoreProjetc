import React from 'react'
import styled from 'styled-components'
import IconButton from '../../components/fragments/icon-button'

const InludingItems = styled.div`
  position: relative;
  flex-basis: 100%;
  @media (min-width: ${({ theme }) => theme.bpLarge}) {
    flex-basis: 30%;
  }
`

const IncludingItemsTitle = styled.p`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontBold};
`
const IncludingItemsList = styled.div`
  position: relative;
  margin: 10px 0 20px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  max-height: 70px;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`
const IconButtonContainer = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
`

const Variations = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colorTertiaryMedium};
`
const ArticleNumber = styled.p`
  margin-right: 10px;
`

const renderItem = item => {
  const { articleNumber, name, id } = item.product.properties
  return (
    <Item key={id}>
      <ArticleNumber>{articleNumber}</ArticleNumber>
      <p>{name}</p>
    </Item>
  )
}
class ItemsList extends React.Component {
  constructor() {
    super()
    this.state = {
      maxHeight: 0,
      open: false
    }
    this.toggleAccordion = this.toggleAccordion.bind(this)
    this.closeAccordion = this.closeAccordion.bind(this)
  }

  componentDidMount() {
    this.calculateHeight()
  }

  calculateHeight() {
    const newheight = this.container.getBoundingClientRect().height
    this.setState({ maxHeight: newheight })
  }

  toggleAccordion() {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  closeAccordion() {
    this.setState({ open: false })
  }

  render() {
    const { open, maxHeight } = this.state
    const toggleHeight = open ? maxHeight : '270px'
    const { orderTemplate } = this.props
    return (
      <InludingItems>
        <IncludingItemsTitle>Including Items</IncludingItemsTitle>
        <p>The grey area shows all possible options of the configurations</p>
        <IncludingItemsList
          style={{ overflow: 'hidden', maxHeight: toggleHeight }}
        >
          <section
            ref={e => {
              this.container = e
            }}
          >
            {orderTemplate.children.map(item => {
              if (item.product) return renderItem(item)
              if (item.filterOptions) {
                return (
                  <React.Fragment key={item.id}>
                    {(item.filterOptions || {}).language && (
                      <>
                        <p>{item.properties.name}</p>
                        <p>Language: {item.filterOptions.language.isoCode}</p>
                      </>
                    )}
                    <Variations key={item.id}>
                      {item.children.map(renderItem)}
                    </Variations>
                  </React.Fragment>
                )
              }
              return null
            })}
          </section>
        </IncludingItemsList>
        {orderTemplate.children.length > 2 && (
          <IconButtonContainer onClick={this.toggleAccordion}>
            <IconButton
              style={{ backgroundColor: '#000', color: '#fff' }}
              size="10px"
              icon={open ? 'arrowUp' : 'arrowDown'}
            />
          </IconButtonContainer>
        )}
      </InludingItems>
    )
  }
}

export default ItemsList
