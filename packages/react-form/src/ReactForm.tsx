/**
 * Copyright (c) Ladifire, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import {
    CometComposerFormRefContext,
    CometComposerIneligibilityContext,
    CometComposerLoggerDispatcherContext,
    CometComposerPluginsContext,
    CometComposerPluginsDispatchContext,
    CometComposerPreSubmitHooksContext,
    CometComposerViewStateAlteredContext,
    CometComposerValidationErrorsContext,
    CometComposerViewStateContext,
    CometComposerViewStateDispatcherContext,
    CometComposerViewStateReducersContext,
} from './contexts';
import {shallowEqual} from './utils/shallowEqual';
import {createEmptyCometComposerViewState} from './utils/createEmptyCometComposerViewState';
import {cometComposerPluginsReducers} from './cometComposerPluginsReducers';
import {getComposerPluginEligibility} from './getComposerPluginEligibility';
import {getComposerUnsavedChangesAlert} from './getComposerUnsavedChangesAlert';
import {getComposerValidationErrors} from './getComposerValidationErrors';
import {reduceComposerViewState} from './reduceComposerViewState';

function a(a, c) {
    var d = a.beginningViewState,
        e = a.children,
        f = a.eligibilityCheckers,
        h = a.loggers,
        i = a.onBeforeViewStateChange,
        j = a.onSubmitCommit,
        k = a.onSubmitHalt,
        l = a.onSubmitStart,
        m = a.onValidationErrors,
        n = a.registerOnBeforeUnload;
    n = n === void 0 ? !0 : n;
    var o = a.target,
        p = a.unalteredBeginningViewState,
        q = a.validators,
        r = React.useRef(new Map()),
        s = React.useRef(new Map()),
        t = React.useRef({}),
        u = React.useRef(new Set()),
        v = React.useRef(new Map()),
        w = React.useRef(null);
    a = React.useRef(null);
    d = React.useReducer(function(a, c) {
        c = reduceComposerViewState(r, s, a, p, c);
        w.current = c;
        i && i(c, a);
        return c
    }, d, createEmptyCometComposerViewState);
    var x = d[0];
    d = d[1];
    var y = function() {
        if (!Boolean(x == null ? void 0 : x.ignoreDirtyFlag))
            return getComposerUnsavedChangesAlert(x == null ? void 0 : x.isDirty)
    };
    React.useImperativeHandle(c, function() {
        return {
            getViewState: function() {
                return x
            }
        }
    }, [x]);
    c = React.useReducer(cometComposerPluginsReducers, {
        decorators: new Map(),
        handlers: new Map()
    });
    var z = c[0];
    c = c[1];
    var A = React.useMemo(function() {
        return q != null ? getComposerValidationErrors(q, x) : {}
    }, [q, x]);
    shallowEqual(t.current, A) || (t.current = A);
    A = React.useMemo(function() {
        return f != null ? getComposerPluginEligibility(f, x) : new Set()
    }, [f, x]);
    u.current.size === A.size && Array.from(A).every(function(a) {
        return u.current.has(a)
    }) || (u.current = A);
    var B = React.useCallback(function(a) {
            a != null && a.type !== "press" && a.preventDefault();
            if (Object.keys(t.current).length > 0) {
                m && m(t.current);
                return
            }
            var c = w.current;
            if (c == null) return;
            l && l();
            a = v.current;
            if (a) {
                a = Array.from(a.keys()).reduce(function(a, d) {
                    return a.then(function() {
                        return new Promise(function(a, b) {
                            d({
                                onContinue: a,
                                onHalt: b
                            }, c)
                        })
                    })
                }, Promise.resolve());
                a.then(function() {
                    j(c)
                })["catch"](function() {
                    k && k()
                })
            } else j(c)
        }, [j, k, l, m]),
        C = x.creationSessionID;
    A = React.useMemo(function() {
        return function(a) {
            var c;
            C == null ? console.error("creationSessionID should be defined in composer of type " + String(o == null ? void 0 : o.type)) : ((c = h) != null ? c : []).map(function(b) {
                return b(a, C, {
                    target: o
                })
            })
        }
    }, [C, o, h]);

    return React.createElement(CometComposerPluginsDispatchContext.Provider, {
        value: c,
        children: React.createElement(CometComposerPluginsContext.Provider, {
            value: z,
            children: React.createElement(CometComposerViewStateReducersContext.Provider, {
                value: r,
                children: React.createElement(CometComposerViewStateAlteredContext.Provider, {
                    value: s,
                    children: React.createElement(CometComposerViewStateContext.Provider, {
                        value: x,
                        children: React.createElement(CometComposerViewStateDispatcherContext.Provider, {
                            value: d,
                            children: React.createElement(CometComposerValidationErrorsContext.Provider, {
                                value: t.current,
                                children: React.createElement(CometComposerIneligibilityContext.Provider, {
                                    value: u.current,
                                    children: React.createElement(CometComposerLoggerDispatcherContext.Provider, {
                                        value: A,
                                        children: React.createElement(CometComposerPreSubmitHooksContext.Provider, {
                                            value: v,
                                            children: React.createElement(CometComposerFormRefContext.Provider, {
                                                value: a,
                                                children: [React.createElement("form", {
                                                    "data-testid": void 0,
                                                    method: "POST",
                                                    onSubmit: B,
                                                    ref: a,
                                                    children: [React.useMemo(function() {
                                                        return e(B)
                                                    }, [e, B]), React.createElement("input", {
                                                        style: {
                                                            display: "none"
                                                        },
                                                        type: "submit"
                                                    })]
                                                }), n ? React.createElement(/*TODO: b("CometOnBeforeUnload.react")*/"div", {
                                                    onBeforeUnload: y
                                                }) : null]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
let c = React.forwardRef(a);
export {c as ReactForm}

