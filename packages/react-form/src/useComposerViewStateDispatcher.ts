/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {CometComposerViewStateDispatcherContext} from './contexts/CometComposerViewStateDispatcherContext';

export function useComposerViewStateDispatcher() {
    return React.useContext(CometComposerViewStateDispatcherContext)
}
