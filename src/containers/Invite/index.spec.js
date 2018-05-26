import React from 'react';
import { createMockStore } from 'redux-test-utils';
import 'jest-styled-components';
import utils from '../../../config/jest/utils';

import Invite from '.';

describe('/containers/Invite', () => {
    test('should render successfully', () => {
        const testState = {
            invite: { isLoading: false },
        };
        const store = createMockStore(testState);
        const component = utils.shallowWithStore(<Invite />, store);

        expect(component.dive()).toMatchSnapshot();
    });
    test('should simulate send invite action', () => {
        const testState = {
            invite: { isLoading: false, status: 0 },
        };
        const payload = { email: 'john@doe.com', name: 'John Doe' };
        const store = createMockStore(testState);
        const component = utils.shallowWithStore(<Invite />, store);
        // Dive until Invite component is found
        const instance = component
            .dive()
            .dive()
            .dive()
            .dive()
            .instance();

        instance.handleSubmit(payload);
        expect(store.isActionDispatched({
            type: 'invite/SEND_INVITE',
            payload,
        })).toEqual(true);
    });
    test('should simulate closing a dialog', () => {
        const testState = {
            invite: { isLoading: false, status: 0 },
        };
        const store = createMockStore(testState);
        const component = utils.shallowWithStore(<Invite />, store);
        // Dive until Invite component is found
        const instance = component
            .dive()
            .dive()
            .dive()
            .dive()
            .instance();

        instance.handleDialogClose();
        expect(store.isActionDispatched({
            type: 'invite/CLEAR_STATE',
        })).toEqual(true);
    });
});
