/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {CometComposerPluginsDispatchContext} from './contexts';

export function useCometComposerDecorator(a) {
    var c = React.useContext(CometComposerPluginsDispatchContext);
    React.useEffect(function() {
        c({
            decorator: a,
            type: "install_decorator"
        });
        return function() {
            return c({
                decorator: a,
                type: "uninstall_decorator"
            })
        }
    }, [a, c])
}
