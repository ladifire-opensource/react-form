/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {DefaultForm} from './DefaultForm';

storiesOf('React Form', module)
    .addParameters({providerSwitcher: {status: 'positive'}})
    .add('default',
        () => {
        const handleSubmit = () => {
            const _timeout = setTimeout(() => {
                return new Promise((resolve, reject) => {
                    resolve('error');
                })
            }, 2500);
        };
            return (
                <div>
                    <DefaultForm
                        onSubmitStart={action('onSubmitStart')}
                        onSubmitCommit={handleSubmit}
                        onSubmitHalt={action('onSubmitHalt')}
                        onBeforeViewStateChange={action('onBeforeViewStateChange')}
                    />
                </div>
            );
        }
    );
