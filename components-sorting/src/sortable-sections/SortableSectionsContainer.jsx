import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const SortableSectionsContainer = ({children, sortable}) => {
    const sortFactor = sortable === 'ASC' ? 1 : -1;

    const sort = (x1, x2) => !x1.props.order ? sortFactor * 1 :
        !x2.props.order ? sortFactor * -1 :
            sortFactor * (x1.props.order - x2.props.order);

    const render = [...children].sort(sort);

    return (
        <Container>
            {render}
        </Container>
    )

}

SortableSectionsContainer.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    sortable: PropTypes.oneOf(['ASC', 'DESC'])
}

SortableSectionsContainer.defaultProps = {
    sortable: 'ASC'
}


const Container = styled.div`
    display: inline-block;
    width: 250px;    
`