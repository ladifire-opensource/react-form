/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

export function useContextRef(reducer, context) {
    let b = React.useContext<any>(context);
    const currentValue = b.current;

    React.useEffect(function () {
        if (currentValue.has(reducer)) {
            let b = currentValue.get(reducer);
            currentValue.set(reducer, b + 1);
        } else currentValue.set(reducer, 1);
        return function () {
            let b = currentValue.get(reducer);
            b !== void 0 && (b === 1 ? currentValue["delete"](reducer) : currentValue.set(reducer, b - 1))
        }
    }, [currentValue, reducer])
}
