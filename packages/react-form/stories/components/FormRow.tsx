/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

const styles = stylex.create({
    root: {
        marginBottom: 12
    },
});

interface Props {
    children: any;
}

export const FormRow = (props: Props) => {
    const {
        children
    } = props;

    return (
        <div className={stylex(styles.root)}>
            {children}
        </div>
    );
};
