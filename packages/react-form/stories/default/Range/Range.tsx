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
        <div>
            <label>
                Range type:
            </label>
            <input type="range" value={range} onChange={handleChange}/>
        </div>
    );
};

let c = withFormViewStatePart(_Range, function(state: DefaultExampleFormState) {
    return {
        range: state.data ? state.data.range : false,
    }
});

export {c as Range}
