/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

import {
    useFormViewStateDispatcher,
    useFormViewStateReducer,
    withFormViewStatePart,
} from '../../../';

import {FormField} from '../../components';
import {checkboxReducer} from './checkboxReducer';
import {checkboxStateChecker} from './checkboxStateChecker';
import {DefaultExampleFormState} from '../types';

interface Props {
    secure?: boolean;
    isDisabled?: boolean;
}

export const _Checkbox = (props: Props) => {
    const {
        secure,
        isDisabled,
    } = props;

    useFormViewStateReducer(checkboxReducer, checkboxStateChecker);
    const formDispatch = useFormViewStateDispatcher();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
        const payload = {
            secure: event.target.checked,
            type: "update_secure"
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <FormField label="Secured:">
            <span>
                <input type="checkbox" checked={secure} onChange={handleChange}/>
                Use secure connection (https)
            </span>
        </FormField>
    );
};

let c = withFormViewStatePart(_Checkbox, function(state: DefaultExampleFormState) {
    return {
        secure: state.data ? state.data.secure : false,
    }
});

export {c as Checkbox}
