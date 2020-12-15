import React from 'react';
import { render, screen } from '@testing-library/react';

import Episodes from './Episodes';

const testEpisodes = [
    {
        id: Date.now(),
        image: {},
        name: "Test 1",
        season: 1,
        number: 1,
        summary: "<p>Test 1</p>",
        runtime: 3
    },
    {
        id: Date.now() + 1,
        image: {},
        name: "Test 2",
        season: 2,
        number: 1,
        summary: "<p>Test 2</p>",
        runtime: 49
    }
];

test('Renders <Episodes> without errors', () => {
    render(<Episodes episodes={[]}/>);
})

test('Episodes component shows data when rerendered with new data', () => {
    const { rerender } = render( <Episodes episodes={[]}/> );

    let episodes = screen.queryAllByTestId("episode");
    expect(episodes).toHaveLength(0);

    rerender(<Episodes episodes={testEpisodes}/>);
    episodes = screen.queryAllByTestId("episode");
    expect(episodes).toHaveLength(2);
})

test('Mock function in <Episodes> unit', () => {
    const mockData = jest.fn(() => {return testEpisodes});

    render(<Episodes episodes={mockData()} />);
})