import React from 'react';
import renderer from 'react-test-renderer';

import Input from '.';

describe('<Input />', () => {
    test('Should render Input', () => {
        const render = renderer
            .create(<Input name="name" label="Full name" touched={false} />)
            .toJSON();
        expect(render).toMatchSnapshot();
    });
});
