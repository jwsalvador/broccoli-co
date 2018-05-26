import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/themes/default';

const shallowWithStore = (component, store) => {
    const context = {
        store,
    };
    const themeContext = shallow(<ThemeProvider theme={theme} />)
        .instance()
        .getChildContext();

    return shallow(component, {
        context: { ...context, ...themeContext },
        childContextTypes: ThemeProvider.childContextTypes,
    });
};

export default { shallowWithStore };
