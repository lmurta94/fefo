
import { render, screen } from '@testing-library/react';
import {PercentageInformation}  from '../PercentageInformation/PercentageInformation.jsx'; 

describe('PercentageInformation component', () => {
    it('renders with correct number percentage and text information', () => {
        render(<PercentageInformation textInformation="UPLOAD SUCCESS" numberPercentage={8}></PercentageInformation>);

        expect(screen.getByText(/UPLOAD SUCCESS/i)).toBeInTheDocument();
        expect(screen.getByText(/8%/i)).toBeInTheDocument();
    });


    it('renders with different props', () => {
        render(
            <PercentageInformation numberPercentage={50} textInformation="In Progress" />
        );

        expect(screen.getByText(/50/i)).toBeInTheDocument();
    });
});
