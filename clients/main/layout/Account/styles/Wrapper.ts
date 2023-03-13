import styled from 'styled-components'

export const AccountLayoutStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 7rem;

  .cover {
    max-width: 1232px;
    img {
      border-radius: 12px;
    }
  }

  .userInfo {
    width: 185px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    /* bottom: -166px; */
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    bottom: -305px;

    .avatar {
      width: 160px;
      height: 160px;
      border: 4px solid #ff8682;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08));
    }

    .title {
      font-weight: 600;
      font-size: 24px;
      color: #112211;
    }

    .subtitle {
      font-weight: 400;
      font-size: 16px;
      color: #112211;
      opacity: 0.75;
    }
  }
`
