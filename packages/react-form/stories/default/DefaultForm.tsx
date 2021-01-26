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
import {Range} from './Range';
import {File} from './File';
import {SubmitButton} from './SubmitButton';
import {
    DefaultExampleFormState,
    DefaultFormData
} from './types';
import {FormRow} from '../components';

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
                radio: 'react',
                select: 'en',
                range: 20,
            },
        } as DefaultExampleFormState;
    }, []);

    const [formData, setFormData] = React.useState<DefaultExampleFormState>(_initialFormData);

    const [submitting, setSubmitting] = React.useState(false);

    const handleSubmit = React.useCallback((data: DefaultExampleFormState) => {
        if (typeof onSubmit === 'function') {
            onSubmit(data);
        }
    }, [submitting]);

    const handleSubmitHalt = () => {
        console.log('handleSubmitHalt');
    };

    const handleValidationErrors = React.useCallback((e) => {
        setSubmitting(false);
    }, []);

    const handleBeforeViewStateChange = (newState: DefaultExampleFormState, oldState: DefaultExampleFormState) => {
        if (typeof onBeforeViewStateChange === 'function') {
            onBeforeViewStateChange(newState, oldState);
        }

        setFormData(newState);
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
                        <h1>Create your website</h1>
                        <div>
                            <FormRow>
                                <TextField/>
                            </FormRow>
                            <FormRow>
                                <Checkbox/>
                            </FormRow>
                            <FormRow>
                                <RadioGroup/>
                            </FormRow>
                            <FormRow>
                                <Select/>
                            </FormRow>
                            <FormRow>
                                <Range/>
                            </FormRow>
                            <FormRow>
                                <File/>
                            </FormRow>
                            <FormRow>
                                <SubmitButton onClick={onSubmit}/>
                            </FormRow>
                        </div>
                        <div>
                            <pre>{JSON.stringify(formData, null, 2) }</pre>
                        </div>
                    </div>
                )
            }}
        </ReactForm>
    );
}
