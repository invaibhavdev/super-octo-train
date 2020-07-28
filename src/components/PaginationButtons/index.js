import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'components/UI/Button'

const PaginationButton = styled(Button)`
  padding: 5px;
  outline: none;
  border: none;
  color: ${(props) => (props.disabled ? '#e5e6e0' : '#ff6600')};
  font-weight: bold;
  background: transparent;
`
const PaginationButtons = (props) => (
  <React.Fragment>
    <PaginationButton disabled={!props.prevPage} onClick={props.onPrevClick}>
      Previous
    </PaginationButton>
    <span>|</span>
    <PaginationButton disabled={!props.nextPage} onClick={props.onNextClick}>
      Next
    </PaginationButton>
  </React.Fragment>
)

PaginationButtons.propTypes = {
  prevPage: PropTypes.bool,
  nextPage: PropTypes.bool,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
}

export default PaginationButtons
