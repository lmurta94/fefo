
import { render, screen } from '@testing-library/react';
import {Sales} from '../Sales/Sales.jsx';

describe('Sales Component', () => {
    const mockSalesOverview = {
        uploads: 100,
        successfulUploads: 80,
        linesAttempted: 200,
        linesSaved: 150,
        lastUploadDate: 1627884000000
    };

    test('renders the sales information correctly', () => {
        render(<Sales salesOverview={mockSalesOverview} />);

        expect(screen.getByText(/100 uploads/i)).toBeInTheDocument();
        expect(screen.getByText(/200 lines/i)).toBeInTheDocument();
     
      
    });
});
