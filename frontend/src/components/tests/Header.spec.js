import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from '../Header/Header.jsx';

describe('Header Component', () => {
    const mockSupportContact = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    };

    test('renders without crashing', () => {
        render(<Header supportContact={mockSupportContact} />);
    });

    test('displays the correct title', () => {
        render(<Header supportContact={mockSupportContact} />);
        expect(screen.getByText('Account Overview')).toBeInTheDocument();
    });

    test('displays the support contact information', () => {
        render(<Header supportContact={mockSupportContact} />);
        expect(screen.getByText('Your Feefo Support Contact')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        expect(screen.getByText('123-456-7890')).toBeInTheDocument();
    });

    
});
