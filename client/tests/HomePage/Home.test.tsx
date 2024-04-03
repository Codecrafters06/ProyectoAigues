
// import * as extend-expect from '@testing-library/jest-dom/extend-expect';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/features/pageHome/Home';
import { BrowserRouter } from 'react-router-dom';
import Dropi from '../../assets/sonrriente-2.png';
// import '@testing-library/jest-dom/extend-expect';

// Tests
describe('<Home />', async () => {
    it('Home mounts properly', () => {
        const wrapper = render(<BrowserRouter>
            <Home />
          </BrowserRouter>)
        expect(wrapper).toBeTruthy()
    });

    it('Img must have src = {Dropi} and alt = "Dropi"', () => {
        render(<BrowserRouter>
            <Home />
          </BrowserRouter>);
        const dropi = screen.getByRole('img');
        expect(dropi).toHaveAttribute('src', Dropi);
        expect(dropi).toHaveAttribute('alt', 'Dropi');
      });
});