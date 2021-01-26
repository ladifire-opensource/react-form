/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {withFormViewStatePart} from '../../';

interface Props {
    isDirty?: boolean;
}

const _SubmitButton = (props: Props) => {
    const {
        isDirty,
    } = props;

    return (
        <button type="submit" disabled={!isDirty}>Submit</button>
    );
};

const WithViewStatePart = withFormViewStatePart(_SubmitButton, (state) => {
    return {
        isDirty: state.isDirty,
    };
});

export {WithViewStatePart as SubmitButton}
