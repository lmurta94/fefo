import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    SalesContainer,
    TitleSales,
    IconSales,
    InformationSales,
    PercentageContainer
} from './Sales'
import { PercentageInformation } from '../PercentageInformation/PercentageInformation.jsx';

import PropTypes from 'prop-types';


export function Sales({salesOverview}) {

    const {uploads, successfulUploads, linesAttempted, linesSaved} = salesOverview;

    return (
        <>
            <SalesContainer>
                <TitleSales>
                    <IconSales>
                        <FontAwesomeIcon icon={faUpload} style={{ color: '#00A9E4' }} />
                        <strong>Sales</strong>
                    </IconSales>
                    <FontAwesomeIcon icon={faInfoCircle} style={{ color: '#B7B2B3' }} />
                </TitleSales>
                <InformationSales>
                    You had <strong>{uploads} uploads</strong> and <strong>{linesAttempted} lines</strong> added.
                </InformationSales>
            </SalesContainer>

            <PercentageContainer>
                <PercentageInformation textInformation="UPLOAD SUCCESS" numberPercentage={successfulUploads} />
                <PercentageInformation textInformation="LINES SAVED" numberPercentage={linesSaved} />
            </PercentageContainer>

        </>

    )
}

Sales.propTypes = {
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
        lastUploadDate: PropTypes.number,
    })
}