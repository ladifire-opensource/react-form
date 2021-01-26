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

import {radioGroupReducer} from './radioGroupReducer';
import {DefaultExampleFormState, DefaultFormData} from '../types';

const styles = stylex.create({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 16,
    },
});

interface Props {
    radio?: string;
    isDisabled?: boolean;
}

export const _RadioGroup = (props: Props) => {
    const {
        radio,
        isDisabled,
    } = props;

    useFormViewStateReducer(radioGroupReducer);
    const formDispatch = useFormViewStateDispatcher<DefaultFormData>();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
        const payload = {
            radio: event.target.value,
            type: "update_radio"
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <div>
            <label>
                <input type="radio" value="OPTION1" checked={radio === "OPTION1"} onChange={handleChange}/>
                Option 1
            </label>
            <label>
                <input type="radio" value="OPTION2" checked={radio === "OPTION2"} onChange={handleChange}/>
                Option 2
            </label>
        </div>
    );
};

let c = withFormViewStatePart(_RadioGroup, function(state: DefaultExampleFormState) {
    return {
        radio: state.data ? state.data.radio : false,
    }
});

export {c as RadioGroup}
