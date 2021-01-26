/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {uuid} from './uuid';

export function createEmptyCometFormViewState(a?: any) {
    return a != null ? a : {
        audience: {},
        creationSessionID: uuid(),
        editorState: {
            __type: "plain-text",
            hasFocus: !1,
            isComposing: !1,
            isPendingSelection: !1,
            selectionOffsets: null,
            text: ""
        }
    }
}
