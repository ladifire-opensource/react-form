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
import {selectReducer} from './selectReducer';
import {DefaultExampleFormState, DefaultFormData} from "../types";

interface Props {
    select?: string;
    isDisabled?: boolean;
}

export const _Select = (props: Props) => {
    const {
        select,
        isDisabled,
    } = props;

    useFormViewStateReducer(selectReducer);
    const formDispatch = useFormViewStateDispatcher<DefaultFormData>();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLSelectElement>) {
        const payload = {
            select: event.target.value,
            type: "update_select",
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <div>
            <label>Select field</label>
            <select value={select} onChange={handleChange}>
                <option selected={select === 'grapefruit'} value="grapefruit">Grapefruit</option>
                <option selected={select === 'lime'} value="lime">Lime</option>
                <option selected={select === 'coconut'} value="coconut">Coconut</option>
                <option selected={select === 'mango'} value="mango">Mango</option>
            </select>
        </div>
    );
};

let c = withFormViewStatePart(_Select, function(state: DefaultExampleFormState) {
    return {
        select: state.data ? state.data.select : false,
    }
});

export {c as Select}
