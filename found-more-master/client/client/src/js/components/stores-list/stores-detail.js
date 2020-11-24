import React, { useEffect } from 'react'
import styled from 'styled-components'
import STORE_QUERY from 'Common/graphql/queries/store.graphql'
import { useQuery } from 'react-apollo'
import DropDownButton from '../fragments/dropdownbutton'
import LoadingSpinner from '../fragments/loading-spinner'
import Modal from '../fragments/modal'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const LargeP = styled.p`
  font-size: 16px;
`
const Image = styled.div`
  flex-basis: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 280px;
  height: 180px;
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    flex-basis: 40%;
  }
`
const Adress = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    flex-basis: calc(60% - 40px);
    margin: 0 20px;
  }
`
const ButtonContainer = styled.div`
  flex-basis: 100%;
  align-self: flex-end;
  margin-top: 20px;
`
const AdressItems = styled.div`
  flex-basis: 100%;
`
const Specifications = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
`
const ContactPerson = styled.div`
  flex-basis: 40%;
  margin-right: 20px;
`
const GeneralContact = styled.div`
  flex-basis: 40%;
`
const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colorPrimary};
    font-weight: bold;
  }
`

const StoresDetail = ({ id }) => {
  console.log(id)
  const [visible, setVisible] = useState(false)
  const [lazy, { loading, error, data }] = useLazyQuery(STORE_QUERY, {
    variables: { where: { id } }
  })

  useEffect(() => {
    if (visible) {
      lazy()
    }
  }, [visible])

  const {
    email,
    phone,
    size,
    address,
    deliveryAddress,
    contactPerson,
    image,
    contactEmail,
    files
  } = data?.store

  const renderFiles = files.map(file => (
    <li key={file.id}>
      <a href={file.location} target="_blank" rel="noopener noreferrer">
        {file.originalName}
      </a>
    </li>
  ))

  return (
    <>
      <span onClick={() => setVisible(true)}>Info</span>
      <Modal visible={visible} closeModal={() => setVisible(false)}>
        <Container>
          {!image ? (
            <Image style={{ backgroundImage: 'url(images/no-image.jpg)' }} />
          ) : (
            <Image style={{ backgroundImage: `url(${image.location})` }} />
          )}
          <Adress>
            <AdressItems>
              <h5>Address</h5>
              <LargeP>
                {address.street} {address.number}
              </LargeP>
              <LargeP>
                {address.postalCode} {address.city}
              </LargeP>
            </AdressItems>
            {deliveryAddress && (
              <AdressItems>
                <h5>Delivery Address</h5>
                <LargeP>
                  {deliveryAddress.street} {deliveryAddress.number}
                </LargeP>
                <LargeP>
                  {deliveryAddress.postalCode} {deliveryAddress.city}
                </LargeP>
              </AdressItems>
            )}
          </Adress>
          <Specifications>
            <h5>Store specifications</h5>
            <LargeP>{size || 'No specifications provided'}</LargeP>
          </Specifications>
          <ContactPerson>
            <h5>Contactperson</h5>
            {email || phone ? (
              <React.Fragment>
                <LargeP>{contactPerson}</LargeP>
                <LargeP>
                  <ContactLink href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </ContactLink>
                </LargeP>
              </React.Fragment>
            ) : (
              <LargeP>No contactinformation provided</LargeP>
            )}
          </ContactPerson>
          <GeneralContact>
            <h5>General Contact</h5>
            {email || phone ? (
              <React.Fragment>
                <LargeP>
                  <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
                </LargeP>
                <LargeP>
                  <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
                </LargeP>
              </React.Fragment>
            ) : (
              <LargeP>No contactinformation provided</LargeP>
            )}
          </GeneralContact>
          {files.length > 0 && (
            <ButtonContainer>
              <DropDownButton text="Available downloads">
                {renderFiles}
              </DropDownButton>
            </ButtonContainer>
          )}
        </Container>
      </Modal>
    </>
  )
}
export default StoresDetail
