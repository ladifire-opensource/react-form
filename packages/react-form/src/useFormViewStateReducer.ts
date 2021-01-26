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

export function useFormViewStateReducer(reducer, stateChecker?: any) {
    const defaultStateChecker = function(newState, oldState) {
        // default return false, that's mean newState is oldState is Equals
        return false;
    };

    useContextRef(stateChecker || defaultStateChecker, CometFormViewStateAlteredContext);

    return useContextRef(reducer, CometFormViewStateReducersContext)
}
