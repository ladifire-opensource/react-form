/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// return is dirty = true when textField changed, otherwise false
export function textareaStateChecker(a, b) {
    console.log('old state: ', a);
    console.log('new state: ', b);
    var c;
    return !((b == null ? void 0 : (c = b.data) == null ? void 0 : c.description) === "" && (a == null ? void 0 : (c = a.data) == null ? void 0 : c.description) == null) && (b == null ? void 0 : (c = b.data) == null ? void 0 : c.description) !== (a == null ? void 0 : (c = a.data) == null ? void 0 : c.description) && !((a == null ? void 0 : (c = a.data) == null ? void 0 : c.description) == null && (b == null ? void 0 : (a = b.data) == null ? void 0 : a.description) == null)
}
