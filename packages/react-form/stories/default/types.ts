/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {BaseFormState} from '../../src';

export interface DefaultFormData {
    name: string;
    checked?: boolean;
    radio: string;
    select: string;
    range: number;
}

export interface DefaultExampleFormState extends BaseFormState<DefaultFormData> {};
