/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

export function withSomeContext(a, b, c) {
    var d = React.memo(a);

    function e(a, e) {
        var f = React.useContext(b);
        f = c(f, a);
        return React.createElement(d, Object.assign({}, a, f, {
            ref: e
        }))
    }
    return React.forwardRef(e)
}
