import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const RedSection = ({title}) => {
    return (
        <Container>
            Red: {title}
        </Container>
    )
}

RedSection.propTypes = {
    title: PropTypes.string.isRequired
}


const Container = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 2px;
    margin-bottom: 2px;
    border: solid 1px #DC143C;    
    background #FA8072;    
    color: #000000;
`


