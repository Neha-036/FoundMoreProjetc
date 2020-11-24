import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-apollo'
import UPDATE_ORDER_MUTATION from 'Common/graphql/mutations/updateOrder.graphql'
import Button from '../../components/fragments/button'
import Modal from '../fragments/modal'
import IconButton from '../fragments/icon-button'

const Wrapper = styled.div`
  padding: 20px;
`

const Textfield = styled.textarea`
  font-size: 16px;
  line-height: 1;
  height: 200px;
  -webkit-appearance: none;
  background-color: rgb(243, 243, 243);
  color: ${({ theme }) => theme.colorText};
  padding: 10px 20px;
  border: none;
  margin-top: 30px;
  border: 1px solid #d3d3d3;
  &:focus {
    outline: none;
  }
`
const ButtonContainer = styled.div`
  width: 50%;
  float: right;
  margin-top: 20px;
  padding: 20px;
`

const Backorder = ({ id, userId }) => {
  const [visible, setVisible] = useState(false)
  const [updateOrder] = useMutation(UPDATE_ORDER_MUTATION)
  const [comment, setComment] = useState('')

  const handleSubmit = () =>
    updateOrder({
      variables: {
        where: { id },
        input: {
          comments: {
            create: {
              content: comment,
              user: {
                connect: {
                  id: userId
                }
              }
            }
          }
        }
      }
    })
      .then(() => setVisible(false))
      .catch(e => console.log(e)) // eslint-disable-line

  return (
    <>
      <IconButton
        onClick={() => setVisible(true)}
        invert
        border
        size="20px"
        icon="plus"
      />
      <Modal visible={visible} closeModal={() => setVisible(false)}>
        <Wrapper>
          <h5>Let us know what is the issue</h5>
          <Textfield
            placeholder="create backorder or just leave a comment"
            onChange={e => setComment(e.target.value)}
            value={comment}
          />
          <ButtonContainer onClick={handleSubmit}>
            <Button type="button">Send</Button>
          </ButtonContainer>
        </Wrapper>
      </Modal>
    </>
  )
}

export default Backorder
