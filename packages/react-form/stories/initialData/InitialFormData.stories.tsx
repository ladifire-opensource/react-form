/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";

storiesOf('React Form', module)
    .addParameters({providerSwitcher: {status: 'positive'}})
    .add('initial data',
        () => {
            return (
                <div>
                    Initial data example
                </div>
            );
        }
    );
