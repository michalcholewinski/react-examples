import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const BlueSection = ({title}) => {
    return (
        <Container>
            Blue: {title}
            <Text>I'm blue section</Text>
        </Container>
    )
}

BlueSection.propTypes = {
    title: PropTypes.string.isRequired
}


const Container = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 2px;
    margin-bottom: 2px;
    border: solid 1px #00BFFF;    
    background #B0E0E6;    
    color: #000000;
`

const Text = styled.div`
    color: #000;
    font-size: 11px;
`


