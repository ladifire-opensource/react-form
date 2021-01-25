/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function getComposerPluginEligibility(a, b) {
    var c = new Set();
    for (var d in a) {
        var e = a[d];
        e = e(b);
        e != null && e.forEach(function(a) {
            return c.add(a)
        })
    }
    return c
}
