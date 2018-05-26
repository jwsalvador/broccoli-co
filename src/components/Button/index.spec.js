import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '.';

describe('<Button />', () => {
    test('Should Button', () => {
        const render = renderer
            .create(<Button variant="raised" color="primary">
                    Lorem ipsum
            </Button>)
            .toJSON();
        expect(render).toMatchSnapshot();
        expect(render.type).toEqual('button');
    });
});
