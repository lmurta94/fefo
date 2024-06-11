import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AccountOverview } from '../AccountOverview.jsx';

describe('AccountOverview Component', () => {
    const mockData = {
        supportContact: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890'
        },
        salesOverview: {
            uploads: 10,
            successfulUploads: 8,
            linesAttempted: 1000,
            linesSaved: 200,
            lastUploadDate: 1623301682 
        }
    };

    it('renders without crashing', () => {
        render(<AccountOverview data={mockData} />);
    });


});
