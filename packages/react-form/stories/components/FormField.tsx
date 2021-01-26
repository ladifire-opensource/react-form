/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import stylex from '@ladifire-opensource/stylex';

type Style =
    | 'root'
    | 'horizontal'
    | 'label'
    | 'labelHorizontal';

const styles = stylex.create<Style>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginBottom: 8
    },
    labelHorizontal: {
        marginBottom: 0
    },
});

interface Props {
    label: string;
    children: any;
    layout?: 'horizontal' | 'vertical',
}

export const FormField = (props: Props) => {
    const {
        label,
        children,
        layout = 'vertical'
    } = props;

    return (
        <label className={stylex([styles.root, layout === 'horizontal' ? styles.horizontal : false])}>
            <span className={stylex([styles.label, layout === 'horizontal' ? styles.labelHorizontal : false])}>{label}</span>
            {children}
        </label>
    );
};
