import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import React from 'react';
import Login  from '../../src/features/pageLogin/Login';
import { BrowserRouter } from 'react-router-dom';

// Tests
describe('Renders Login correctly', async () => {
    it('Should render the page correctly', async () => {
        const wrapper = render(<BrowserRouter>
            <Login />
          </BrowserRouter>)
      expect(wrapper).toBeTruthy()
    });
    it('Should have background-image with styles', async () => {
        const wrapper = render(<BrowserRouter>
            <Login />
          </BrowserRouter>)
      const divElement = screen.getByRole('bg-img');
      // Assert that the background image is applied correctly
      expect(divElement).toHaveStyle({
        backgroundImage: 'url(/backgroundLogin.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh'
      });
    });
});