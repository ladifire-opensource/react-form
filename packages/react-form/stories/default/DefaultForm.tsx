/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {TextField} from './TextField';
import {ReactForm} from '../../src';

interface Props {
    onSubmit?: (data: any) => void;
}

export function DefaultForm(props: Props) {
    const {
        onSubmit,
    } = props;

    const _initialFormData = React.useMemo(() => {
        return {
            data: {
                name: '',
                is_composer_capable: true,
                is_messenger_capable: true,
                can_download: true,
            },
        };
    }, []);

    const handleSubmit = (data: any) => {
        if (typeof onSubmit === 'function') {
            onSubmit(data);
        }
    };

    return (
        <ReactForm
            beginningViewState={_initialFormData}
            // onSubmitHalt
            // validators
            onSubmitCommit={handleSubmit}
        >
            {(onSubmit) => {
                return (
                    <div>
                        <TextField/>
                    </div>
                )
            }}
        </ReactForm>
    );
}
