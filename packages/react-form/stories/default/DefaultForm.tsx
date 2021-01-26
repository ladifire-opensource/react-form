/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {ReactForm} from '../../';
import {TextField} from './TextField';
import {Checkbox} from './Checkbox';
import {RadioGroup} from './RadioGroup';
import {Select} from './Select';
import {SubmitButton} from './SubmitButton';
import {
    DefaultExampleFormState,
    DefaultFormData
} from './types';

interface Props {
    onSubmit?: (data: any) => void;
    onBeforeViewStateChange?: (newState: any, oldState: any) => void;
}

export function DefaultForm(props: Props) {
    const {
        onSubmit,
        onBeforeViewStateChange,
    } = props;

    const _initialFormData = React.useMemo(() => {
        return {
            data: {
                name: '123',
                checked: false,
                radio: 'OPTION1'
            },
        } as DefaultExampleFormState;
    }, []);

    const handleSubmit = (data: DefaultExampleFormState) => {
        if (typeof onSubmit === 'function') {
            onSubmit(data);
        }
    };

    const handleSubmitHalt = () => {
        console.log('handleSubmitHalt');
    };

    const handleValidationErrors = (e) => {
        console.log('handleValidationErrors', e);
    };

    const handleBeforeViewStateChange = (newState: DefaultExampleFormState, oldState: DefaultExampleFormState) => {
        if (typeof onBeforeViewStateChange === 'function') {
            onBeforeViewStateChange(newState, oldState);
        }
    };

    const testValidators = {
        name: (state: DefaultExampleFormState) => {
            console.log('aaaaa', state);
            return state.data.name.length > 10 ? 'Tên không được vượt quá 10 ký tự' : null;
        },
    };

    return (
        <ReactForm<DefaultFormData>
            beginningViewState={_initialFormData}
            validators={testValidators}
            onSubmitCommit={handleSubmit}
            onValidationErrors={handleValidationErrors}
            onBeforeViewStateChange={handleBeforeViewStateChange}
            onSubmitHalt={handleSubmitHalt}
        >
            {(onSubmit) => {
                return (
                    <div>
                        <TextField/>
                        <Checkbox/>
                        <RadioGroup/>
                        <Select/>
                        <SubmitButton onClick={onSubmit}/>
                    </div>
                )
            }}
        </ReactForm>
    );
}
