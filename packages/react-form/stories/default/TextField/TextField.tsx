/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

import {FormField} from '../../components';
import {
    useFormViewStateDispatcher,
    useFormViewStateReducer,
    withFormViewStatePart,
    useFormValidationErrors,
} from '../../../';
import {textFieldReducer} from './textFieldReducer';
import {textFieldStateChecker} from './textFieldStateChecker';
import {DefaultExampleFormState, DefaultFormData} from '../types';

const styles = stylex.create({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 16,
    },
    error: {
        fontSize: '0.875rem',
        color: 'red',
        marginTop: 6
    },
});

interface Props {
    name?: string;
    isDisabled?: boolean;
}

export function _TextField(props: Props) {
    const {
        name,
        isDisabled,
    } = props;

    useFormViewStateReducer(textFieldReducer, textFieldStateChecker);

    const errors = useFormValidationErrors();
    const formDispatch = useFormViewStateDispatcher<DefaultFormData>();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
        const payload = {
            name: event.target.value,
            type: "update_name"
        };

        formDispatch(payload);
    }, [formDispatch]);

    return (
        <div className={stylex(styles.root)}>
            <FormField label="Site url:">
                <input
                    className={stylex.dedupe(
                        {
                            position: 'relative',
                        },
                        errors && errors['name'] ? {
                            borderColor: 'red',
                            color: 'red'
                        } : null,
                    )}
                    autoComplete="off"
                    disabled={isDisabled}
                    value={name}
                    onChange={handleChange}
                />
                {
                    errors && errors['name'] && (
                        <span className={stylex(styles.error)}>
                            {errors['name']}
                        </span>
                    )
                }
            </FormField>
        </div>
    );
}

let c = withFormViewStatePart(_TextField, function(state: DefaultExampleFormState) {
    return {
        name: state.data ? state.data.name : '',
    }
});

export {c as TextField}
