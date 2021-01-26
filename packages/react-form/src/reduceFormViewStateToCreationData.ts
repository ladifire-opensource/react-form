/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function reduceFormViewStateToCreationData(a, b, c, d) {
    function e(c, f) {
        var g = b[f];
        if (g != null) {
            var h = function(a) {
                e(a, f + 1)
            };
            g(a, c, h)
        } else d(c)
    }
    e(c, 0)
}
