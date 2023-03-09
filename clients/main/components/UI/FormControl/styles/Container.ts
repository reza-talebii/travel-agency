import styled from 'styled-components'

export const FormControlContainer = styled.section<{ height?: string }>`
  width: 100%;
  display: inline-flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;

  .ant-select-focused .ant-select-selector,
  .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
  }

  .label {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    padding: 0;
    position: relative;
    display: block;
    transform-origin: top left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 24px);
    position: absolute;
    left: 15px;
    top: -10px;
    font-size: 14px;
    color: #1c1b1f;
    z-index: 1;
    pointer-events: auto;
    font-size: 0.85em;
  }

  .childrenContainer {
    display: flex;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    color: rgba(0, 0, 0, 0.87);
    box-sizing: border-box;
    position: relative;
    cursor: text;
    display: inline-flex;
    align-items: center;
    position: relative;
    width: 100%;
    border-radius: 4px;
    height: ${props => props.height};

    .icon span {
      font-size: 21px;
      vertical-align: bottom;
      margin-right: 5px;
    }
  }

  fieldset {
    text-align: left;
    position: absolute;
    bottom: 0;
    right: 0;
    top: -5px;
    left: 0;
    margin: 0;
    padding: 0 8px;
    pointer-events: none;
    border-radius: inherit;
    overflow: hidden;
    min-width: 0%;
    border: 1px solid rgba(86, 87, 91, 1);
  }

  legend {
    float: unset;
    width: auto;
    overflow: hidden;
    display: block;
    padding: 0;
    height: 11px;
    font-size: 0.85em;

    visibility: hidden;
    max-width: 100%;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
    white-space: nowrap;
    color: rgba(148, 148, 148, 1);
  }
`
