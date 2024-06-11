import {Container} from './PercentageInformation'

import PropTypes from 'prop-types';

export function PercentageInformation ({numberPercentage, textInformation}){


    return (
        <Container>
            <strong className='number'> {numberPercentage}% </strong>
            <strong className='text'> {textInformation} </strong>
        </Container>
        
    )
}
PercentageInformation.propTypes = {
    numberPercentage: PropTypes.number.isRequired,
    textInformation: PropTypes.string.isRequired

}