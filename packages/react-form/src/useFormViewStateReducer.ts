/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
    CometFormViewStateAlteredContext,
    CometFormViewStateReducersContext
} from './contexts';
import {useContextRef} from './utils/useContextRef';

export function useFormViewStateReducer(a, c?: any) {
    const d = function(a, b) {
        return !1
    };
    useContextRef((c = c) != null ? c : d, CometFormViewStateAlteredContext);
    return useContextRef(a, CometFormViewStateReducersContext)
}
