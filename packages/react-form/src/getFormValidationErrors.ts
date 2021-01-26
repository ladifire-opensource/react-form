/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function getFormValidationErrors(a, b) {
    var c = {};
    for (var d in a) {
        var e = a[d];
        e = e(b);
        e != null && (c[d] = e)
    }
    return c
}
