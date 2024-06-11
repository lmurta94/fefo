import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    HeaderContainer,
    SupportContact,
    SupportIcon,
    SupportName,
    SupportEmail,
    SupportPhone,
    DataSupportContact
} from './Header'

import PropTypes from 'prop-types';


export function Header({ supportContact }) {

    const { name, phone, email } = supportContact;

    return (
        <HeaderContainer>
            <h1>Account Overview</h1>
            <SupportContact>
                <span>Your Feefo Support Contact</span>
                <DataSupportContact>
                    <SupportIcon>S</SupportIcon>
                    <SupportName>{name}</SupportName>
                    <SupportEmail>
                        <FontAwesomeIcon icon={faEnvelope} />
                        {email}
                    </SupportEmail>
                    <SupportPhone>{phone}</SupportPhone>
                </DataSupportContact>
            </SupportContact>
        </HeaderContainer>
    )

}

Header.propTypes = {
    supportContact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    })
}