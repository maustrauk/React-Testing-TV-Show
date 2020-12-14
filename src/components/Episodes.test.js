import React from 'react';
import { render, screen } from '@testing-library/react';

import Episodes from './Episodes';

const episodes = [];

test('Renders <Episodes> without errors', () => {
    render(<Episodes episodes={episodes}/>);
})