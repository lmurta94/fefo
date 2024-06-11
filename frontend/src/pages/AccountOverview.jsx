import React from 'react';

import { Header } from '../components/Header/Header.jsx';
import { Container } from './AccountOverview.js';
import { Sales } from '../components/Sales/Sales.jsx';

import PropTypes from 'prop-types';


export function AccountOverview({data}) {

  const {supportContact, salesOverview} = data;

  return (
    
    <Container>
       <Header supportContact={supportContact} />
       <Sales salesOverview={salesOverview} />
    </Container>   
  )



}

AccountOverview.propTypes = {
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      lastUploadDate: PropTypes.number,
    })

}
