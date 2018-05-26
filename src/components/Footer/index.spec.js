import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import theme from 'themes/default';
import Footer from '.';

describe('<Footer />', () => {
    test('Should render Footer', () => {
        const themeContext = shallow(<ThemeProvider theme={theme} />)
            .instance()
            .getChildContext();

        const render = shallow(<Footer>Lorem Ipsum</Footer>, { context: { ...themeContext } });
        expect(render).toMatchSnapshot();
    });
});
