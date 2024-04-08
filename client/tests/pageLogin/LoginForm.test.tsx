import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../../src/features/pageLogin/components/LoginForm';

// Tests
describe('Renders LoginForm correctly', async () => {
    it('Should render the page correctly', async () => {
        const wrapper = render(<BrowserRouter>
            <LoginForm />
          </BrowserRouter>)
      expect(wrapper).toBeTruthy()
    });
});