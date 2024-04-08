import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import HomeButton from '../../src/features/pageHome/components/HomeButton';
import React from 'react';


// Tests
describe('<Hero />', async () => {
    it('Hero mounts properly', () => {
        const wrapper = render(<BrowserRouter>
            <HomeButton />
          </BrowserRouter>)
        expect(wrapper).toBeTruthy()
    });
    it('should click button to direct to sign in page', async () => {
         render(<BrowserRouter>
            <HomeButton />
          </BrowserRouter>);
          const button = screen.getByText('Inicio')
          expect(button).toBeInTheDocument();

          const user = userEvent.setup()
    const logIn = vi.spyOn(user, 'click')
    const signInLink = screen.getByText(/Inicio/i)

    await user.click(signInLink)
    expect(logIn).toHaveBeenCalledTimes(1)

    })
    

});