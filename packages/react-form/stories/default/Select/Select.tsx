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
} from '../../../';
import {selectReducer} from './selectReducer';
import {DefaultExampleFormState, DefaultFormData} from "../types";
import {FormField} from '../../components';

interface Props {
    language?: string;
    isDisabled?: boolean;
}

export const _Select = (props: Props) => {
    const {
        language,
        isDisabled,
    } = props;

    useFormViewStateReducer(selectReducer);
    const formDispatch = useFormViewStateDispatcher<DefaultFormData>();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLSelectElement>) {
        const payload = {
            language: event.target.value,
            type: "update_language",
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <FormField label="Select site language:" layout="horizontal">
            <select value={language} onChange={handleChange}>
                <option selected={language === 'en'} value="en">English</option>
                <option selected={language === 'vi'} value="vi">Vietnamese</option>
                <option selected={language === 'zh'} value="zh">Traditional Chinese</option>
                <option selected={language === 'fr'} value="fr">French</option>
            </select>
        </FormField>
    );
};

let c = withFormViewStatePart(_Select, function(state: DefaultExampleFormState) {
    return {
        language: state.data ? state.data.language : false,
    }
});

export {c as Select}
