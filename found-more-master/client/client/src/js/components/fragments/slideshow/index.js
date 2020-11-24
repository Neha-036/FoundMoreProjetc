import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Control from './controls'

export const SliderContainer = styled.article`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    width: ${({ width }) => width};
  }
`

const Container = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  background-color: #fff;
  margin-bottom: 40px;
`

const SlideshowContainer = styled.article`
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  max-height: 100%;
`

const SlidesContainer = styled.div`
  text-align: left;
  float: none;
  height: 300px;
  position: relative;
  height: 300px;
`

const ControlsContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
`

export const Image = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity 1s ease-in-out;
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
  transition: opacity 0.4s ease, transform 0.2s ease-out;
  background-color: white;
  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    width: ${({ imageWidth }) => imageWidth};
  }
`

const Text = styled.h4`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  padding-left: 10px;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
`

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
  & > a {
    display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};
  }
`

class Slideshow extends React.Component {
  constructor() {
    super()
    this.imgRef = React.createRef
    this.state = {
      currentSlide: 0,
      xCoord: '',
      yCoord: ''
    }

    this.goToSlide = this.goToSlide.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
    this.removeCoordinates = this.removeCoordinates.bind(this)
  }

  componentDidMount() {
    this.resetInterval()
  }

  componentWillUnmount() {
    this.clearInterval()
  }

  getCoordinates(e) {
    this.clearInterval()
    const xPos = this.container.getBoundingClientRect().left
    const yPos = this.container.getBoundingClientRect().top

    this.setState({
      xCoord: e.clientX - xPos,
      yCoord: e.clientY - yPos
    })
  }

  removeCoordinates() {
    this.resetInterval()
    this.setState({ xCoord: '', yCoord: '' })
  }

  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  resetInterval() {
    this.clearInterval()

    this.interval = setInterval(() => {
      this.nextSlide()
    }, 6000)
  }

  nextSlide() {
    const { currentSlide } = this.state
    this.setState({
      currentSlide: (currentSlide + 1) % this.props.images.length
    })
  }
  goToSlide(index) {
    this.resetInterval()

    this.setState({ currentSlide: index })
  }
  render() {
    const { currentSlide, xCoord, yCoord } = this.state

    const sliderHeight = 300

    const renderControls =
      this.props.images.length > 0 &&
      this.props.images.map((image, index) => {
        const isCurrent = currentSlide === index
        return (
          <Control
            isCurrent={isCurrent}
            onClick={() => this.goToSlide(index)}
            key={image.id}
          />
        )
      })

    const renderImage = this.props.images.map((pic, index) => {
      const isCurrent = currentSlide === index
      return (
        <ImageContainer key={pic.id} isCurrent={isCurrent}>
          {pic.link ? (
            <Link
              to={pic.link}
              style={{
                height: '300px',
                overflow: 'hidden',
                backgroundColor: 'white'
              }}
            >
              <section
                ref={e => {
                  this.container = e
                }}
                style={{
                  height: this.props.height,
                  width: this.props.imageWidth,
                  overflow: 'hidden',
                  backgroundColor: 'white'
                }}
              >
                <Image
                  backgroundImage={pic.location}
                  sliderHeight={sliderHeight}
                  isCurrent={isCurrent}
                  imageMobileWidth={this.props.imageMobileWidth}
                />
              </section>
              {pic.name && <Text>{pic.name}</Text>}
            </Link>
          ) : (
            <React.Fragment>
              <section
                ref={e => {
                  this.container = e
                }}
                style={{
                  height: this.props.height,
                  width: this.props.imageWidth,
                  overflow: 'hidden'
                }}
              >
                <Image
                  backgroundImage={pic.location}
                  sliderHeight={sliderHeight}
                  isCurrent={isCurrent}
                  imageMobileWidth={this.props.imageMobileWidth}
                  onMouseMove={this.getCoordinates}
                  onMouseLeave={this.removeCoordinates}
                  style={{
                    transform: xCoord && yCoord && 'scale(1.6)',
                    transformOrigin:
                      xCoord && yCoord && `${xCoord}px ${yCoord}px`
                  }}
                />
              </section>
              {pic.name && <Text>{pic.name}</Text>}
            </React.Fragment>
          )}
        </ImageContainer>
      )
    })

    return (
      <SliderContainer width={this.props.width}>
        {this.props.images.length > 1 ? (
          <React.Fragment>
            <ControlsContainer>{renderControls}</ControlsContainer>
            <Container height={this.props.height}>
              <SlideshowContainer>
                <SlidesContainer>{renderImage}</SlidesContainer>
              </SlideshowContainer>
            </Container>
          </React.Fragment>
        ) : (
          <Container height={this.props.height}>
            <section
              ref={e => {
                this.container = e
              }}
              style={{
                height: this.props.height,
                width: this.props.imageWidth,
                overflow: 'hidden'
              }}
            >
              {renderImage}
            </section>
          </Container>
        )}
      </SliderContainer>
    )
  }
}

export default Slideshow
