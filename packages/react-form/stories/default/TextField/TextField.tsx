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
import {textFieldReducer} from './textFieldReducer';
import {textFieldStateChecker} from './textFieldStateChecker';
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
    name?: string;
    isDisabled?: boolean;
}

export function _TextField(a: Props) {
    var c = a.name;
    a = a.isDisabled;
    a = a === void 0 ? !1 : a;
    useFormViewStateReducer(textFieldReducer, textFieldStateChecker);
    const d = useFormViewStateDispatcher();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
            const payload = {
                name: event.target.value,
                type: "update_name"
            };
            d(payload)
        }, [d]);

    return (
        <div className={stylex(styles.root)}>
            <label>
                Full name:
                <input
                    autoComplete="off"
                    disabled={a}
                    value={(a = c) != null ? a : ""}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

let c = withFormViewStatePart(_TextField, function(state: DefaultExampleFormState) {
    return {
        name: state.data ? state.data.name : '',
    }
});

export {c as TextField}
