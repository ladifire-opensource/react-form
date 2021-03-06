/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {withSomeContext} from './utils/withSomeContext';

import {CometFormViewStateContext} from './contexts';

export function withFormViewStatePart(a, c) {
    return withSomeContext(a, CometFormViewStateContext, c)
}
