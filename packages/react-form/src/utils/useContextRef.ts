/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

export function useContextRef(a, b) {
    b = React.useContext(b);
    var c = b.current;
    React.useEffect(function () {
        if (c.has(a)) {
            var b = c.get(a);
            c.set(a, b + 1)
        } else c.set(a, 1);
        return function () {
            var b = c.get(a);
            b !== void 0 && (b === 1 ? c["delete"](a) : c.set(a, b - 1))
        }
    }, [c, a])
}
