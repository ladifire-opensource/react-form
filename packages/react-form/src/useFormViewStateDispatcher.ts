/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {CometFormViewStateDispatcherContext} from './contexts';

/**
 * Context data type
 * e.g:
 * {
 *     type: "action_type",
 *     name: "abc"
 * }
 * */
type ContextData<T extends object> = {
    type: string; // TODO: how to pass type of dispatch
} & {
    [key in keyof T]?: any; // TODO: how to pass type
}

export function useFormViewStateDispatcher<T extends object>() {
    return React.useContext<(data: ContextData<T>) => void>(CometFormViewStateDispatcherContext)
}
