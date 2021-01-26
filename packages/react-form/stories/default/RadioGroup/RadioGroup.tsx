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
    options: {
        display: 'flex',
        flexDirection: 'column'
    },
});

interface Props {
    programing_language?: string;
    isDisabled?: boolean;
}

export const _RadioGroup = (props: Props) => {
    console.log("__render _RadioGroup");
    const {
        programing_language,
        isDisabled,
    } = props;

    useFormViewStateReducer(radioGroupReducer);
    const formDispatch = useFormViewStateDispatcher<DefaultFormData>();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
        const payload = {
            programing_language: event.target.value,
            type: "update_programing_language"
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <div>
            <label>Select site programing language:</label>
            <div className={stylex(styles.options)}>
                <label>
                    <input type="radio" value="react" checked={programing_language === "react"} onChange={handleChange}/>
                    React
                </label>
                <label>
                    <input type="radio" value="vue" checked={programing_language === "vue"} onChange={handleChange}/>
                    Vue
                </label>
                <label>
                    <input type="radio" value="angular" checked={programing_language === "angular"} onChange={handleChange}/>
                    Angular
                </label>
            </div>
        </div>
    );
};

let c = withFormViewStatePart(_RadioGroup, function(state: DefaultExampleFormState) {
    return {
        programing_language: state.data ? state.data.programing_language : false,
    }
});

export {c as RadioGroup}
