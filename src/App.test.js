import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { fetchShow as mockFetchShow } from './api/fetchShow';


const testObj = {
    data: {
        image: {
          original:
            "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
        },
        name: "Stranger Things",
        summary: "<p>A really cool show</p>",
        _embedded: {
          episodes: [
            {
              id: 1,
              name: "foo",
              image: {
                medium:
                  "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
              },
              number: 1,
              season: 1,
              summary: "bar",
              runtime: 60,
            },
          ],
        },
      },
}

jest.mock('./api/fetchShow');


test('Renders App without errors',  () => {
    mockFetchShow.mockResolvedValueOnce(testObj);
    render(<App />);
});

test('Fetches data', async () => {

    mockFetchShow.mockResolvedValueOnce(testObj);

    render(<App />);

    await wait();

    screen.getByTestId("poster");
})