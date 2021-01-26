/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {
    useFormViewStateDispatcher,
    useFormViewStateReducer,
    withFormViewStatePart,
    useFormValidationErrors,
} from '../../../';

import {FormField} from '../../components';
import {textareaReducer} from './textareaReducer';
import {textareaStateChecker} from './textareaStateChecker';
import {DefaultExampleFormState, DefaultFormData} from "../types";

interface Props {
    description?: string;
    isDisabled?: boolean;
}

export const _TextArea = (props: Props) => {
    console.log("__render _TextArea");
    const {
        description,
        isDisabled,
    } = props;

    // TODO: test re-render
    const errors = useFormValidationErrors();

    useFormViewStateReducer(textareaReducer, textareaStateChecker);
    const d = useFormViewStateDispatcher<DefaultFormData>();

    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const payload = {
            description: event.target.value,
            type: "update_description"
        };
        d(payload)
    }, [d]);

    return (
        <FormField label="Site description:">
            <textarea
                autoComplete="off"
                value={description}
                onChange={handleChange}
            />
        </FormField>
    );
};

let c = withFormViewStatePart(_TextArea, function(state: DefaultExampleFormState) {
    return {
        description: state.data ? state.data.description : '',
    }
});

export {c as TextArea}
