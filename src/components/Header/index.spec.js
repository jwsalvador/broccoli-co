import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from '.';

describe('<Header />', () => {
    test('Should render Header', () => {
        const render = renderer.create(<Header>Lorem Ipsum</Header>).toJSON();
        expect(render).toMatchSnapshot();
    });
});
