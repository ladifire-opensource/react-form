/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface BaseFormState<T> {
    data: T;
    isDirty: boolean;
}

export type Validators<T> = {
    [key in keyof T]?: (state: BaseFormState<T>) => string | null | undefined;
}
