/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function reduceFormViewState(a, b, c, d, e) {
    var f = c;
    c = a.current.keys();
    for (var a = c, c = Array.isArray(a), g = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var h;
        if (c) {
            if (g >= a.length) break;
            h = a[g++]
        } else {
            g = a.next();
            if (g.done) break;
            h = g.value
        }
        h = h;
        f = h(f, e)
    }
    return Object.assign({}, f, {
        isDirty: Array.from(b.current.keys()).some(function(a) {
            return a(d, f)
        })
    })
}
