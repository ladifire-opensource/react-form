/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultExampleFormState} from '../types';

export function textareaReducer(state: DefaultExampleFormState, action: any) {
    switch (action.type) {
        case "update_description":
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, {
                    description: action.description
                })
            })
    }
    return state
}
