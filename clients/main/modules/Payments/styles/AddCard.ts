import styled from 'styled-components'

export const AddCardItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  max-width: 378px;
  width: 100%;
  height: 212px;
  border: 2px dashed #8dd3bb;
  border-radius: 16px;
  cursor: pointer;

  .icon {
    font-size: 2.5rem;
  }

  .text {
    color: #112211;
    opacity: 0.75;
    font-weight: 500;
    font-size: 12px;
  }
`
