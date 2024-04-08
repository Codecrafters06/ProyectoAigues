import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../../src/features/pageHome/components/Hero';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

// Tests
describe('<Hero />', async () => {
    it('Hero mounts properly', () => {
        const wrapper = render(<BrowserRouter>
            <Hero />
          </BrowserRouter>)
        expect(wrapper).toBeTruthy()
    });

    it(' have h1 with text', () => {
        const wrapper = render(<BrowserRouter>
            <Hero />
          </BrowserRouter>)
        const h1 = wrapper.container.querySelector('h1')
      expect(h1?.textContent).toBe('AquaQuest')
    })
    it(' have h2 with text', () => {
        const wrapper = render(<BrowserRouter>
            <Hero />
          </BrowserRouter>)
        const h2 = wrapper.container.querySelector('h2')
      expect(h2?.textContent).toBe('Guardianes del Agua')
    })

});