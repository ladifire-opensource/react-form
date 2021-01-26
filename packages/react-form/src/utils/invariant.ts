/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

let validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
    validateFormat = function validateFormat(format) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    };
}


export function invariant(condition, format, a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) {
    validateFormat(format);

    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            let args = [a, b, c, d, e, f];
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, function () {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
}

