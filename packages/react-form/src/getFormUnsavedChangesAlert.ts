/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fbt from 'fbt';

export function getFormUnsavedChangesAlert(a) {
    if (Boolean(a)) return {
        primaryButtonLabel: fbt._("R\u1eddi kh\u1ecfi"),
        secondaryButtonLabel: fbt._("Ti\u1ebfp t\u1ee5c ch\u1ec9nh s\u1eeda"),
        title: fbt._("R\u1eddi kh\u1ecfi trang?"),
        warnMessage: fbt._("B\u1ea1n ch\u01b0a chia s\u1ebb b\u00e0i vi\u1ebft. B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n r\u1eddi kh\u1ecfi khi ch\u01b0a \u0111\u0103ng kh\u00f4ng?")
    }
}
