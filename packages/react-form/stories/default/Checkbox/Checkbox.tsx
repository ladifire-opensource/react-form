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

import {checkboxReducer} from './checkboxReducer';
import {checkboxStateChecker} from './checkboxStateChecker';
import {DefaultExampleFormState} from '../types';

const styles = stylex.create({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 16,
    },
});

interface Props {
    checked?: boolean;
    isDisabled?: boolean;
}

export const _Checkbox = (props: Props) => {
    const {
        checked,
        isDisabled,
    } = props;

    useFormViewStateReducer(checkboxReducer, checkboxStateChecker);
    const formDispatch = useFormViewStateDispatcher();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
        const payload = {
            checked: event.target.checked,
            type: "update_checked"
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                Use secure connection (https)
            </label>
        </div>
    );
};

let c = withFormViewStatePart(_Checkbox, function(state: DefaultExampleFormState) {
    return {
        checked: state.data ? state.data.checked : false,
    }
});

export {c as Checkbox}
