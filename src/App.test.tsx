import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Render Title', () => {
    // ARRANGE
    // ACT
    render(<App />);

    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Vite, React, & Typescript Starter');
  });
});
