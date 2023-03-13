import styled from 'styled-components'

export const ItemPaymentsWrapper = styled.section`
  padding: 16px;
  display: flex;
  flex-direction: column;
  max-width: 378px;
  width: 100%;
  min-height: 212px;
  background: #8dd3bb;
  border-radius: 16px;

  * {
    font-weight: 500;
  }

  .delete-icon {
    color: ${props => props.theme.colors.danger};
    font-size: 1.3rem;
    cursor: pointer;
  }
`
