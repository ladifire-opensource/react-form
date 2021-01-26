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
            <label>Select site programing language:</label>
            <div>
                <label>
                    <input type="radio" value="react" checked={radio === "react"} onChange={handleChange}/>
                    React
                </label>
                <label>
                    <input type="radio" value="vue" checked={radio === "vue"} onChange={handleChange}/>
                    Vue
                </label>
                <label>
                    <input type="radio" value="angular" checked={radio === "angular"} onChange={handleChange}/>
                    Angular
                </label>
            </div>
        </div>
    );
};

let c = withFormViewStatePart(_RadioGroup, function(state: DefaultExampleFormState) {
    return {
        radio: state.data ? state.data.radio : false,
    }
});

export {c as RadioGroup}
