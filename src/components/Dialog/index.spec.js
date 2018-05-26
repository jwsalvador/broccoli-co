import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import 'jest-styled-components';

import Dialog from '.';

describe('<Dialog />', () => {
    test('Should render Dialog with OPEN state', () => {
        const render = createShallow()(<Dialog open title="All done!" onClose={() => {}}>
                Lorem ipsum
        </Dialog>);
        expect(render).toMatchSnapshot();
    });
    test('Should render Dialog with CLOSE state', () => {
        const render = createShallow()(<Dialog open={false} title="All done!" onClose={() => {}}>
                Lorem ipsum
        </Dialog>);
        expect(render).toMatchSnapshot();
    });
});
