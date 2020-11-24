import React from 'react'
import styled from 'styled-components'
import { connect } from 'redux-zero/react'
import { CSSTransition } from 'react-transition-group'
import IconButton from '../fragments/icon-button'

const transitionName = 'options'

const Check = styled.div`
  display: block;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 100%;
  height: 16px;
  width: 16px;
  z-index: 5;
  transition: border 0.1s linear;
  &:before {
    position: absolute;
    display: block;
    content: '';
    height: 6px;
    width: 6px;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    margin: auto;
  }
`

const OpenVariation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`
const ButtonWrapper = styled.div`
  align-self: center;
`

const CheckmarkSelection = styled.div``

const RadioSelection = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  position: relative;
  & > input[type='radio'] {
    position: absolute;
    visibility: hidden;
    &:checked {
      & ~ ${Check}:before {
        background: ${({ theme }) => theme.colorPrimary};
      }
      & ~ label {
        color: ${({ theme }) => theme.colorPrimary};
      }
    }
  }
  &:hover > ${Check} {
    border: 5px solid ${({ theme }) => theme.colorPrimary};
    &:before {
      height: 0;
      width: 0;
    }
  }
  & > label {
    display: flex;
    z-index: 9;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    padding: 4px 0 0 20px;
    cursor: pointer;
    transition: all 0.1s linear;
  }
`
const SelectConf = styled.p`
  flex: 1 0 auto;
  display: flex;
  & > span:first-child {
    flex: 1 0 auto;
  }
  & > span:not(:first-child) {
    margin-right: 10px;
  }
`

const Options = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  border-radius: 5px;
  padding: 10px 15px;
  min-width: 120px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  &.${transitionName}-enter {
    transform: translateY(-10px);
    opacity: 0;
  }
  &.${transitionName}-enter-active {
    transform: translateY(0);
    opacity: 1;
  }
  &.${transitionName}-exit {
    transform: translateY(0);
    opacity: 1;
  }
  &.${transitionName}-exit-active {
    transform: translateY(-10px);
    opacity: 0;
  }
`

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  padding-left: 8px;
`

class VariationSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSelection: false
    }
    this.selectOption = this.selectOption.bind(this)
  }
  selectOption() {
    this.setState({ showSelection: !this.state.showSelection })
  }
  render() {
    const { variations, setSelectedOptions, selectedOptions, type } = this.props
    const { showSelection } = this.state
    const isSelected = option =>
      selectedOptions.some(({ id }) => option.id === id)
    const selectOption = e => {
      const option = variations[e.target.value]
      const selection = () => {
        if (type === 'ONE') return [option]
        if (type === 'ZERO_OR_ONE') {
          if (isSelected(option)) return []
          return [option]
        }
        if (type === 'ONE_OR_MORE') {
          if (isSelected(option)) {
            if (selectedOptions.length > 1)
              return selectedOptions.filter(i => i.id !== option.id)
            return selectedOptions
          }
          return [...selectedOptions, option]
        }
        if (type === 'ZERO_OR_MORE') {
          if (isSelected(option))
            return selectedOptions.filter(i => i.id !== option.id)
          return [...selectedOptions, option]
        }
        return selectedOptions
      }
      setSelectedOptions(selection())
      this.setState({ showSelection: false })
    }
    const renderSelectButton = (option, i) => {
      if (type.includes('MORE')) {
        return (
          <CheckmarkSelection key={i}>
            <label htmlFor="option">
              <input
                id="option"
                type="checkbox"
                value={i}
                checked={isSelected(option)}
                readOnly
                onClick={selectOption}
              />
              <p style={{ display: 'inline-block', marginLeft: 5 }}>
                {option.filterOptions.language.isoCode ||
                  option.properties.name}
              </p>
            </label>
          </CheckmarkSelection>
        )
      }
      return (
        <RadioSelection key={i}>
          <input
            onClick={selectOption}
            id={`${i}option`}
            type="radio"
            value={i}
            checked={isSelected(option)}
            readOnly
          />
          <Check />
          <label htmlFor={`${i}option`}>
            {option.filterOptions.language.isoCode || option.properties.name}
          </label>
        </RadioSelection>
      )
    }
    return (
      <Container>
        <OpenVariation>
          <SelectConf>
            {selectedOptions.length > 0 ? (
              <>
                <span>
                  {((selectedOptions[0] || {}).properties || {}).name}
                </span>
                <span>{selectedOptions[0].filterOptions.language.isoCode}</span>
              </>
            ) : (
              'Select a configuration'
            )}
          </SelectConf>
          <ButtonWrapper>
            <IconButton
              onClick={this.selectOption}
              size="13px"
              icon={showSelection ? 'arrowUp' : 'arrowDown'}
            />
          </ButtonWrapper>
        </OpenVariation>
        <CSSTransition
          in={showSelection}
          classNames={transitionName}
          timeout={300}
          unmountOnExit
        >
          <Options>{variations.map(renderSelectButton)}</Options>
        </CSSTransition>
      </Container>
    )
  }
}

const actions = (_, { id }) => ({
  setSelectedOptions: ({ idValues }, selectedOptions) => {
    const idValue = idValues[id]
    return {
      idValues: {
        ...idValues,
        [id]: {
          ...idValue,
          selectedOptions
        }
      }
    }
  }
})

export default connect(null, actions)(VariationSwitcher)
