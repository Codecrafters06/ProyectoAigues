// Imports
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import App from '../src/App';
import React from 'react';

// Tests
describe('Renders app correctly', async () => {
    it('Should render the page correctly', async () => {
        const wrapper = render(<App />)
      expect(wrapper).toBeTruthy()
    });
});