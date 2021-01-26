/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// determine when checked state is changed
export function checkboxStateChecker(newState, oldState) {
    let a = newState;
    let b = oldState;
    let c;

    return !((b == null ? undefined : (c = b.data) == null ? undefined : c.secure) === "" && (a == null ? undefined : (c = a.data) == null ? undefined : c.name) == null) &&
        (b == null ? undefined : (c = b.data) == null ? undefined : c.name) !== (a == null ? undefined : (c = a.data) == null ? undefined : c.name) &&
        !((a == null ? undefined : (c = a.data) == null ? undefined : c.name) == null && (b == null ? undefined : (a = b.data) == null ? undefined : a.name) == null)
}
