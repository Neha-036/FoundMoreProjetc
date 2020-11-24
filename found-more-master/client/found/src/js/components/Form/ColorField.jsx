import React, { Component } from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

const ColorBlock = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`

const PickerPositioner = styled.div`
  position: absolute;
  z-index: 40;
  transform: translate3d(calc(-50% + 10px), 10px, 0);
`

export default class extends Component {
  constructor() {
    super()
    this.state = {
      showPicker: false
    }
    this.togglePicker = this.togglePicker.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }
  setWrapperRef(node) {
    this.wrapperRef = node
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.togglePicker()
    }
  }
  togglePicker() {
    this.setState({ showPicker: !this.state.showPicker })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <ColorBlock
            onClick={this.togglePicker}
            color={this.props.field.value}
          />
          {this.props.placeholder}
        </div>
        {this.state.showPicker && (
          <div ref={this.setWrapperRef}>
            <PickerPositioner>
              <ChromePicker
                color={this.props.field.value}
                onChangeComplete={({ hex }) =>
                  this.props.form.setFieldValue(this.props.field.name, hex)
                }
              />
            </PickerPositioner>
          </div>
        )}
      </React.Fragment>
    )
  }
}
