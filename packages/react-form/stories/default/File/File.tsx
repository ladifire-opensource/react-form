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

import {fileReducer} from './fileReducer';
import {FormField} from '../../components';
import {DefaultExampleFormState} from '../types';

interface Props {
    file?: boolean;
    isDisabled?: boolean;
}

export const _File = (props: Props) => {
    const {
        file,
        isDisabled,
    } = props;

    useFormViewStateReducer(fileReducer);
    const formDispatch = useFormViewStateDispatcher();
    const handleChange = React.useCallback(function(event: React.ChangeEvent<HTMLInputElement>) {
        const _files = Array.from(event.target.files);
        console.log('_files_files_files', _files);

        const payload = {
            file: _files ? _files[0] : undefined,
            type: "update_file"
        };
        formDispatch(payload)
    }, [formDispatch]);

    return (
        <FormField label="Select file:" layout="horizontal">
            <input type="file" onChange={handleChange}/>
        </FormField>
    );
};

let c = withFormViewStatePart(_File, function(state: DefaultExampleFormState) {
    return {
        file: state.data ? state.data.file : undefined,
    }
});

export {c as File}
