/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function g(a, b) {
    var c = a.get(b);
    if (c != null) {
        a.set(b, c + 1);
        return a
    } else {
        c = new Map(a);
        c.set(b, 1);
        return c
    }
}

function h(a, b) {
    var c = a.get(b);
    if (c != null)
        if (c > 1) a.set(b, c - 1);
        else {
            c = new Map(a);
            c["delete"](b);
            return c
        } return a
}

function a(a, b) {
    switch (b.type) {
        case "install_decorator":
        case "uninstall_decorator":
            var c = b.type === "install_decorator" ? g(a.decorators, b.decorator) : h(a.decorators, b.decorator);
            if (c !== a.decorators) return Object.assign({}, a, {
                decorators: c
            });
            break;
        case "install_handler":
        case "uninstall_handler":
            c = b.type === "install_handler" ? g(a.handlers, b.handler) : h(a.handlers, b.handler);
            if (c !== a.handlers) return Object.assign({}, a, {
                handlers: c
            });
            break
    }
    return a
}

export {a as cometComposerPluginsReducers}
