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
        borderRadius: 8,
        overflow: "hidden",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#CED0D4",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)"
    },
});

interface Props {
    children: any;
    xstyle?: any;
}

export const Card = (props: Props) => {
    const {
        children,
        xstyle
    } = props;

    return (
        <div className={stylex(styles.root, xstyle)}>
            {children}
        </div>
    );
};
