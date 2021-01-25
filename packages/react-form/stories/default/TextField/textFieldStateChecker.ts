/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function textFieldStateChecker(a, b) {
    var c;
    return !((b == null ? void 0 : (c = b.data) == null ? void 0 : c.name) === "" && (a == null ? void 0 : (c = a.data) == null ? void 0 : c.name) == null) && (b == null ? void 0 : (c = b.data) == null ? void 0 : c.name) !== (a == null ? void 0 : (c = a.data) == null ? void 0 : c.name) && !((a == null ? void 0 : (c = a.data) == null ? void 0 : c.name) == null && (b == null ? void 0 : (a = b.data) == null ? void 0 : a.name) == null)
}
