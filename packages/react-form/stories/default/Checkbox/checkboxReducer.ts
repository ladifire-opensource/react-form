/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultExampleFormState} from '../types';

export function checkboxReducer(state: DefaultExampleFormState, action: any) {
    switch (action.type) {
        case "update_checked":
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, {
                    checked: action.checked
                })
            })
    }
    return state
}
