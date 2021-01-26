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
import {rangeReducer} from './rangeReducer';
import {DefaultExampleFormState, DefaultFormData} from "../types";
import {FormField} from '../../components';

interface Props {
    range: number;
    isDisabled?: boolean;
}

export const _Range = (props: Props) => {
    const {
      range,
      isDisabled,
    } = props;

    useFormViewStateReducer(rangeReducer);
    const formDispatch = useFormViewStateDispatcher<DefaultFormData>();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
        const payload = {
            range: event.target.value,
            type: "update_range",
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <FormField label="Range type:" layout="horizontal">
            <input type="range" value={range} onChange={handleChange}/>
        </FormField>
    );
};

let c = withFormViewStatePart(_Range, function(state: DefaultExampleFormState) {
    return {
        range: state.data ? state.data.range : false,
    }
});

export {c as Range}
