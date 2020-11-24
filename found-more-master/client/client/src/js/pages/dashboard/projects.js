import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { Link } from 'react-router-dom'
import Slideshow, {
  SliderContainer,
  ImageContainer
} from '@/components/fragments/slideshow'
import useIsMaxWidth from '@/helpers/useIsMaxWidth'
import ROOT_ORDER_TEMPLATES_QUERY from './rootOrderTemplatesQuery.graphql'
import useDomain from '@/helpers/useDomain'
import { useMeStore } from '@/stores/meStore'

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  & ${SliderContainer} {
    width: 100%;
    margin-bottom: 0;
    ${ImageContainer} {
      width: 90%;
    }
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.colorPrimary};
`
const Name = styled.h4`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 0 10px;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
`
const Project = styled.div`
  flex-basis: calc(33% - 12px);
  margin: 20px 20px 0 0;
  position: relative;
  overflow: hidden;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    & ${Overlay} {
      opacity: 1;
    }
    & ${Name} {
      z-index: 5;
      color: ${({ theme }) => theme.colorSecondary};
      background-color: transparent;
      top: 50%;
      left: 50%;
      bottom: unset;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
`

const Img = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.image});
  width: 100%;
  height: 200px;
  margin-right: 10px;
`

const Images = props => {
  const renderImage =
    Array.isArray(props.properties.images) && props.properties.images.length > 0
      ? props.properties.images[props.properties.images.length - 1].location
      : '/images/no-image.jpg'
  return <Img image={renderImage} />
}

const DashboardProjects = () => {
  const [isMobile] = useIsMaxWidth('1023px')
  const { storeLanguages } = useMeStore()
  const domain = useDomain()
  const { loading, error, data } = useQuery(ROOT_ORDER_TEMPLATES_QUERY, {
    variables: { storeLanguages, domain }
  })

  if (loading || error) return null

  const slideshowImages = data.orderTemplates.reduce((acc, curr) => {
    const hasImage = !!curr.properties.images.length
    const { id } = curr
    const location = hasImage
      ? curr.properties.images.slice(0, 1)[0].location
      : '/images/no-image.jpg'
    const link = {
      pathname: '/projects',
      state: {
        current: {
          id: curr.id,
          name: curr.properties.name
        }
      }
    }
    return [
      ...acc,
      {
        id,
        link,
        location,
        name: curr.properties.name
      }
    ]
  }, [])
  const renderProjects = data.orderTemplates.map(project => {
    if (project.deletedAt !== null) {
      return null
    }
    return (
      <Project key={project.id}>
        <Link
          to={{
            pathname: '/projects',
            state: {
              current: {
                id: project.id,
                name: project.properties.name
              }
            }
          }}
        >
          {!isMobile && <Name>{project.properties.name}</Name>}
          {!isMobile && <Images {...project} />}
          <Overlay />
        </Link>
      </Project>
    )
  })
  return (
    <ProjectContainer>
      {renderProjects}
      {isMobile && (
        <Slideshow
          images={slideshowImages}
          imageMobileWidth="100%"
          height="300px"
        />
      )}
    </ProjectContainer>
  )
}

export default DashboardProjects
