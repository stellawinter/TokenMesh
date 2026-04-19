// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenMesh/i);
    expect(titleElement).toBeInTheDocument();
});
