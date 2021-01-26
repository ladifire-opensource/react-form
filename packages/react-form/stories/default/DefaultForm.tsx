/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

import {ReactForm} from '../../';
import {TextField} from './TextField';
import {TextArea} from './TextArea';
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
import {FormRow, Card} from '../components';

const styles = stylex.create({
    wrapper: {
        display: 'flex',
    },
    form: {
        padding: 16,
    },
    json: {
        padding: 16,
        marginLeft: 16,
        backgroundColor: '#f2f2f2'
    },
});

interface Props {
    onSubmitCommit?: (data: any) => void;
    onSubmitStart?: () => void;
    onSubmitHalt?: () => void;
    onBeforeViewStateChange?: (newState: any, oldState: any) => void;
}

export function DefaultForm(props: Props) {
    const {
        onSubmitStart,
        onSubmitCommit,
        onSubmitHalt,
        onBeforeViewStateChange,
    } = props;

    const _initialFormData = React.useMemo(() => {
        return {
            data: {
                name: '',
                description: '',
                secure: false,
                programing_language: 'react',
                language: 'en',
                range: 20,
            },
        } as DefaultExampleFormState;
    }, []);

    const [formData, setFormData] = React.useState<DefaultExampleFormState>(_initialFormData);

    const [submitting, setSubmitting] = React.useState(false);

    const handleSubmit = React.useCallback((data: DefaultExampleFormState) => {
        if (typeof onSubmitCommit === 'function') {
            onSubmitCommit(data);
        }
    }, [submitting]);

    const handleValidationErrors = React.useCallback((e) => {
        setSubmitting(false);
    }, []);

    const handleBeforeViewStateChange = (newState: DefaultExampleFormState, oldState: DefaultExampleFormState) => {
        if (typeof onBeforeViewStateChange === 'function') {
            onBeforeViewStateChange(newState, oldState);
        }

        setFormData(newState);
    };

    const handleSubmitStart = () => {
        if (typeof onSubmitStart === 'function') {
            onSubmitStart();
        }
    };

    const handleSubmitHalt = () => {
        if (typeof onSubmitHalt === 'function') {
            onSubmitHalt();
        }
    };

    const testValidators = {
        name: (state: DefaultExampleFormState) => {
            const _demoUrlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if (!state.data.name || !state.data.name.length) {
                return 'site url is required'
            }
            return _demoUrlRegex.test(state.data.name) ? null : 'Wrong site url';
        },
    };

    return (
        <div className={stylex(styles.wrapper)}>
            <Card xstyle={styles.form}>
                <ReactForm<DefaultFormData>
                    beginningViewState={_initialFormData}
                    validators={testValidators}
                    onSubmitCommit={handleSubmit}
                    onValidationErrors={handleValidationErrors}
                    onBeforeViewStateChange={handleBeforeViewStateChange}
                    onSubmitStart={handleSubmitStart}
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
                                        <TextArea/>
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
                            </div>
                        )
                    }}
                </ReactForm>
            </Card>
            <Card xstyle={styles.json}>
                <pre>{JSON.stringify(formData, null, 2) }</pre>
            </Card>
        </div>
    );
}
