!(function (t) {
	var e = {};
	function n(r) {
		if (e[r]) return e[r].exports;
		var o = (e[r] = { i: r, l: !1, exports: {} });
		return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, r) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if (
				(n.r(r),
				Object.defineProperty(r, "default", { enumerable: !0, value: t }),
				2 & e && "string" != typeof t)
			)
				for (var o in t)
					n.d(
						r,
						o,
						function (e) {
							return t[e];
						}.bind(null, o)
					);
			return r;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, "a", e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = "/assets/"),
		n((n.s = 359));
})({
	10: function (t, e, n) {
		"use strict";
		(function (t) {
			n.d(e, "b", function () {
				return u;
			}),
				n.d(e, "e", function () {
					return s;
				}),
				n.d(e, "d", function () {
					return p;
				}),
				n.d(e, "c", function () {
					return d;
				}),
				n.d(e, "a", function () {
					return _;
				});
			var r = n(9),
				o = n(71),
				i = n(7),
				c = n(53);
			function u(t, e, n) {
				if (e in t) {
					var r = t[e],
						o = n(r);
					if ("function" == typeof o)
						try {
							(o.prototype = o.prototype || {}),
								Object.defineProperties(o, {
									__sentry_original__: { enumerable: !1, value: r }
								});
						} catch (t) {}
					t[e] = o;
				}
			}
			function s(t) {
				return Object.keys(t)
					.map(function (e) {
						return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
					})
					.join("&");
			}
			function a(t) {
				if (Object(r.d)(t)) {
					var e = t,
						n = { message: e.message, name: e.name, stack: e.stack };
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
					return n;
				}
				if (Object(r.f)(t)) {
					var c = t,
						u = {};
					u.type = c.type;
					try {
						u.target = Object(r.c)(c.target)
							? Object(i.i)(c.target)
							: Object.prototype.toString.call(c.target);
					} catch (t) {
						u.target = "<unknown>";
					}
					try {
						u.currentTarget = Object(r.c)(c.currentTarget)
							? Object(i.i)(c.currentTarget)
							: Object.prototype.toString.call(c.currentTarget);
					} catch (t) {
						u.currentTarget = "<unknown>";
					}
					for (var o in ("undefined" != typeof CustomEvent &&
						Object(r.g)(t, CustomEvent) &&
						(u.detail = c.detail),
					c))
						Object.prototype.hasOwnProperty.call(c, o) && (u[o] = c);
					return u;
				}
				return t;
			}
			function f(t) {
				return (function (t) {
					return ~-encodeURI(t).split(/%..|./).length;
				})(JSON.stringify(t));
			}
			function p(t, e, n) {
				void 0 === e && (e = 3), void 0 === n && (n = 102400);
				var r = d(t, e);
				return f(r) > n ? p(t, e - 1, n) : r;
			}
			function l(e, n) {
				return "domain" === n && e && "object" == typeof e && e._events
					? "[Domain]"
					: "domainEmitter" === n
					? "[DomainEmitter]"
					: void 0 !== t && e === t
					? "[Global]"
					: "undefined" != typeof window && e === window
					? "[Window]"
					: "undefined" != typeof document && e === document
					? "[Document]"
					: Object(r.l)(e)
					? "[SyntheticEvent]"
					: "number" == typeof e && e != e
					? "[NaN]"
					: void 0 === e
					? "[undefined]"
					: "function" == typeof e
					? "[Function: " + Object(i.f)(e) + "]"
					: e;
			}
			function h(t, e, n, i) {
				if ((void 0 === n && (n = 1 / 0), void 0 === i && (i = new o.a()), 0 === n))
					return (function (t) {
						var e = Object.prototype.toString.call(t);
						if ("string" == typeof t) return t;
						if ("[object Object]" === e) return "[Object]";
						if ("[object Array]" === e) return "[Array]";
						var n = l(t);
						return Object(r.i)(n) ? n : e;
					})(e);
				if (null != e && "function" == typeof e.toJSON) return e.toJSON();
				var c = l(e, t);
				if (Object(r.i)(c)) return c;
				var u = a(e),
					s = Array.isArray(e) ? [] : {};
				if (i.memoize(e)) return "[Circular ~]";
				for (var f in u)
					Object.prototype.hasOwnProperty.call(u, f) && (s[f] = h(f, u[f], n - 1, i));
				return i.unmemoize(e), s;
			}
			function d(t, e) {
				try {
					return JSON.parse(
						JSON.stringify(t, function (t, n) {
							return h(t, n, e);
						})
					);
				} catch (t) {
					return "**non-serializable**";
				}
			}
			function _(t, e) {
				void 0 === e && (e = 40);
				var n = Object.keys(a(t));
				if ((n.sort(), !n.length)) return "[object has no keys]";
				if (n[0].length >= e) return Object(c.c)(n[0], e);
				for (var r = n.length; r > 0; r--) {
					var o = n.slice(0, r).join(", ");
					if (!(o.length > e)) return r === n.length ? o : Object(c.c)(o, e);
				}
				return "";
			}
		}.call(this, n(40)));
	},
	107: function (t, e, n) {
		"use strict";
		(function (t) {
			n.d(e, "a", function () {
				return f;
			});
			var r = n(3),
				o = n(7),
				i = n(29),
				c = n(38),
				u = (function () {
					function t(t, e, n) {
						void 0 === e && (e = new c.a()),
							void 0 === n && (n = 3),
							(this._version = n),
							(this._stack = []),
							this._stack.push({ client: t, scope: e });
					}
					return (
						(t.prototype._invokeClient = function (t) {
							for (var e, n = [], o = 1; o < arguments.length; o++)
								n[o - 1] = arguments[o];
							var i = this.getStackTop();
							i &&
								i.client &&
								i.client[t] &&
								(e = i.client)[t].apply(e, r.d(n, [i.scope]));
						}),
						(t.prototype.isOlderThan = function (t) {
							return this._version < t;
						}),
						(t.prototype.bindClient = function (t) {
							this.getStackTop().client = t;
						}),
						(t.prototype.pushScope = function () {
							var t = this.getStack(),
								e = t.length > 0 ? t[t.length - 1].scope : void 0,
								n = c.a.clone(e);
							return this.getStack().push({ client: this.getClient(), scope: n }), n;
						}),
						(t.prototype.popScope = function () {
							return void 0 !== this.getStack().pop();
						}),
						(t.prototype.withScope = function (t) {
							var e = this.pushScope();
							try {
								t(e);
							} finally {
								this.popScope();
							}
						}),
						(t.prototype.getClient = function () {
							return this.getStackTop().client;
						}),
						(t.prototype.getScope = function () {
							return this.getStackTop().scope;
						}),
						(t.prototype.getStack = function () {
							return this._stack;
						}),
						(t.prototype.getStackTop = function () {
							return this._stack[this._stack.length - 1];
						}),
						(t.prototype.captureException = function (t, e) {
							var n = (this._lastEventId = Object(o.n)()),
								i = e;
							if (!e) {
								var c = void 0;
								try {
									throw new Error("Sentry syntheticException");
								} catch (t) {
									c = t;
								}
								i = { originalException: t, syntheticException: c };
							}
							return (
								this._invokeClient("captureException", t, r.a({}, i, { event_id: n })), n
							);
						}),
						(t.prototype.captureMessage = function (t, e, n) {
							var i = (this._lastEventId = Object(o.n)()),
								c = n;
							if (!n) {
								var u = void 0;
								try {
									throw new Error(t);
								} catch (t) {
									u = t;
								}
								c = { originalException: t, syntheticException: u };
							}
							return (
								this._invokeClient("captureMessage", t, e, r.a({}, c, { event_id: i })),
								i
							);
						}),
						(t.prototype.captureEvent = function (t, e) {
							var n = (this._lastEventId = Object(o.n)());
							return this._invokeClient("captureEvent", t, r.a({}, e, { event_id: n })), n;
						}),
						(t.prototype.lastEventId = function () {
							return this._lastEventId;
						}),
						(t.prototype.addBreadcrumb = function (t, e) {
							var n = this.getStackTop();
							if (n.scope && n.client) {
								var i = (n.client.getOptions && n.client.getOptions()) || {},
									c = i.beforeBreadcrumb,
									u = void 0 === c ? null : c,
									s = i.maxBreadcrumbs,
									a = void 0 === s ? 30 : s;
								if (!(a <= 0)) {
									var f = Object(o.m)(),
										p = r.a({ timestamp: f }, t),
										l = u
											? Object(o.c)(function () {
													return u(p, e);
											  })
											: p;
									null !== l && n.scope.addBreadcrumb(l, Math.min(a, 100));
								}
							}
						}),
						(t.prototype.setUser = function (t) {
							var e = this.getStackTop();
							e.scope && e.scope.setUser(t);
						}),
						(t.prototype.setTags = function (t) {
							var e = this.getStackTop();
							e.scope && e.scope.setTags(t);
						}),
						(t.prototype.setExtras = function (t) {
							var e = this.getStackTop();
							e.scope && e.scope.setExtras(t);
						}),
						(t.prototype.setTag = function (t, e) {
							var n = this.getStackTop();
							n.scope && n.scope.setTag(t, e);
						}),
						(t.prototype.setExtra = function (t, e) {
							var n = this.getStackTop();
							n.scope && n.scope.setExtra(t, e);
						}),
						(t.prototype.setContext = function (t, e) {
							var n = this.getStackTop();
							n.scope && n.scope.setContext(t, e);
						}),
						(t.prototype.configureScope = function (t) {
							var e = this.getStackTop();
							e.scope && e.client && t(e.scope);
						}),
						(t.prototype.run = function (t) {
							var e = a(this);
							try {
								t(this);
							} finally {
								a(e);
							}
						}),
						(t.prototype.getIntegration = function (t) {
							var e = this.getClient();
							if (!e) return null;
							try {
								return e.getIntegration(t);
							} catch (e) {
								return (
									i.a.warn(
										"Cannot retrieve integration " + t.id + " from the current Hub"
									),
									null
								);
							}
						}),
						(t.prototype.startSpan = function (t, e) {
							return (
								void 0 === e && (e = !1), this._callExtensionMethod("startSpan", t, e)
							);
						}),
						(t.prototype.traceHeaders = function () {
							return this._callExtensionMethod("traceHeaders");
						}),
						(t.prototype._callExtensionMethod = function (t) {
							for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
							var r = s(),
								o = r.__SENTRY__;
							if (o && o.extensions && "function" == typeof o.extensions[t])
								return o.extensions[t].apply(this, e);
							i.a.warn("Extension method " + t + " couldn't be found, doing nothing.");
						}),
						t
					);
				})();
			function s() {
				var t = Object(o.g)();
				return (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }), t;
			}
			function a(t) {
				var e = s(),
					n = l(e);
				return h(e, t), n;
			}
			function f() {
				var e = s();
				return (
					(p(e) && !l(e).isOlderThan(3)) || h(e, new u()),
					Object(o.j)()
						? (function (e) {
								try {
									var n = Object(o.d)(t, "domain").active;
									if (!n) return l(e);
									if (!p(n) || l(n).isOlderThan(3)) {
										var r = l(e).getStackTop();
										h(n, new u(r.client, c.a.clone(r.scope)));
									}
									return l(n);
								} catch (t) {
									return l(e);
								}
						  })(e)
						: l(e)
				);
			}
			function p(t) {
				return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
			}
			function l(t) {
				return (
					(t && t.__SENTRY__ && t.__SENTRY__.hub) ||
						((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = new u())),
					t.__SENTRY__.hub
				);
			}
			function h(t, e) {
				return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}), (t.__SENTRY__.hub = e), !0);
			}
		}.call(this, n(86)(t)));
	},
	14: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return c;
		}),
			n.d(e, "c", function () {
				return u;
			}),
			n.d(e, "a", function () {
				return s;
			}),
			n.d(e, "d", function () {
				return a;
			}),
			n.d(e, "e", function () {
				return f;
			});
		var r = n(3),
			o = n(107);
		function i(t) {
			for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			var i = Object(o.a)();
			if (i && i[t]) return i[t].apply(i, r.d(e));
			throw new Error(
				"No hub defined or " + t + " was not found on the hub, please open a bug report."
			);
		}
		function c(t) {
			var e;
			try {
				throw new Error("Sentry syntheticException");
			} catch (t) {
				e = t;
			}
			return i("captureException", t, { originalException: t, syntheticException: e });
		}
		function u(t, e) {
			var n;
			try {
				throw new Error(t);
			} catch (t) {
				n = t;
			}
			return i("captureMessage", t, e, { originalException: t, syntheticException: n });
		}
		function s(t) {
			return i("captureEvent", t);
		}
		function a(t) {
			i("configureScope", t);
		}
		function f(t) {
			i("withScope", t);
		}
	},
	24: function (t, e, n) {
		"use strict";
		var r = (function () {
			function t() {}
			return (
				(t.isMobile = function () {
					return t.includesString(t.getUserAgent(), "Mobi");
				}),
				(t.getUserAgent = function () {
					return window.navigator.userAgent;
				}),
				(t.includesString = function (t, e) {
					return -1 !== t.indexOf(e);
				}),
				t
			);
		})();
		e.a = r;
	},
	29: function (t, e, n) {
		"use strict";
		n.d(e, "a", function () {
			return u;
		});
		var r = n(7),
			o = Object(r.g)(),
			i = "Sentry Logger ",
			c = (function () {
				function t() {
					this._enabled = !1;
				}
				return (
					(t.prototype.disable = function () {
						this._enabled = !1;
					}),
					(t.prototype.enable = function () {
						this._enabled = !0;
					}),
					(t.prototype.log = function () {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						this._enabled &&
							Object(r.c)(function () {
								o.console.log(i + "[Log]: " + t.join(" "));
							});
					}),
					(t.prototype.warn = function () {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						this._enabled &&
							Object(r.c)(function () {
								o.console.warn(i + "[Warn]: " + t.join(" "));
							});
					}),
					(t.prototype.error = function () {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						this._enabled &&
							Object(r.c)(function () {
								o.console.error(i + "[Error]: " + t.join(" "));
							});
					}),
					t
				);
			})();
		o.__SENTRY__ = o.__SENTRY__ || {};
		var u = o.__SENTRY__.logger || (o.__SENTRY__.logger = new c());
	},
	3: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "a", function () {
				return i;
			}),
			n.d(e, "e", function () {
				return c;
			}),
			n.d(e, "c", function () {
				return u;
			}),
			n.d(e, "d", function () {
				return s;
			});
		/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
		var r = function (t, e) {
			return (r =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (t, e) {
						t.__proto__ = e;
					}) ||
				function (t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		};
		function o(t, e) {
			function n() {
				this.constructor = t;
			}
			r(t, e),
				(t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
		}
		var i = function () {
			return (i =
				Object.assign ||
				function (t) {
					for (var e, n = 1, r = arguments.length; n < r; n++)
						for (var o in (e = arguments[n]))
							Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t;
				}).apply(this, arguments);
		};
		function c(t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				n = 0;
			return e
				? e.call(t)
				: {
						next: function () {
							return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
						}
				  };
		}
		function u(t, e) {
			var n = "function" == typeof Symbol && t[Symbol.iterator];
			if (!n) return t;
			var r,
				o,
				i = n.call(t),
				c = [];
			try {
				for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; ) c.push(r.value);
			} catch (t) {
				o = { error: t };
			} finally {
				try {
					r && !r.done && (n = i.return) && n.call(i);
				} finally {
					if (o) throw o.error;
				}
			}
			return c;
		}
		function s() {
			for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(u(arguments[e]));
			return t;
		}
	},
	359: function (t, e, n) {
		"use strict";
		n.r(e);
		var r = n(24),
			o = (function () {
				function t(t, e) {
					(this.document = t), (this.css = e), this.installObserver();
				}
				return (
					(t.prototype.installObserver = function () {
						var t = this;
						(r.a.isMobile()
							? new MutationObserver(t.mobileMutationCallback.bind(t))
							: new MutationObserver(t.desktopMutationCallback.bind(t))
						).observe(this.document.body, { childList: !0, subtree: !0, attributes: !0 });
					}),
					(t.prototype.desktopMutationCallback = function () {
						this.document.querySelector(".expanded")
							? this.css("transition", "height 1s")
							: this.css("transition", "height 0s"),
							this.setSizeToFitContent();
					}),
					(t.prototype.mobileMutationCallback = function () {
						this.document.querySelector("#help-button")
							? this.setSizeToFitContent()
							: this.setSizeToFullScreen();
					}),
					(t.prototype.setSizeToFitContent = function () {
						var t = this.document.querySelector("#react-root");
						if (t) {
							this.css("height", "1px"),
								this.css("width", "1px"),
								this.css("height", t.clientHeight + 10 + "px"),
								this.css("width", this.document.body.scrollWidth + 10 + "px");
						}
					}),
					(t.prototype.setSizeToFullScreen = function () {
						this.css("height", "100%"), this.css("width", "100%");
					}),
					t
				);
			})(),
			i = (function () {
				function t() {}
				return (t.scriptTag = '<script src="http://localhost:8097"></script>'), t;
			})(),
			c = n(14),
			u = n(58),
			s = (function () {
				function t(t, e) {
					this.createAndInsertIframe(document.body),
						this.applyCss(),
						this.writeDocument(t, e),
						new o(this.document, this.css.bind(this));
				}
				return (
					(t.prototype.createAndInsertIframe = function (t) {
						var e = document.createElement("iframe");
						(e.scrolling = "no"),
							(e.name = "JSD widget"),
							(e.id = "jsd-widget"),
							t.appendChild(e),
							(this.el = e);
						var n = e.contentWindow;
						if (!n)
							throw (
								(c.c("iframe.contentWindow is null", u.a.Error),
								new Error("Can't setup jsd-widget iframe"))
							);
						this.document = n.document;
					}),
					(t.prototype.applyCss = function () {
						this.css("height", "1px"),
							this.css("width", "1px"),
							this.css("position", "fixed"),
							this.css("border", "0"),
							this.css("bottom", "0"),
							this.css("right", "0"),
							this.css("z-index", "9999999999999"),
							this.css("visibility", "hidden");
					}),
					(t.prototype.writeDocument = function (t, e) {
						var n = '<script type="application/javascript" src="' + t + '"></script>',
							r = JSON.stringify(e);
						this.document.open(),
							this.document.write(
								"<body data-embeddable=" +
									r +
									'>\n                <div id="react-root"></div>\n                ' +
									(void 0 !== e.reactDevtools ? i.scriptTag : "") +
									"\n                " +
									n +
									"\n            </body>"
							),
							this.document.close();
					}),
					(t.prototype.css = function (t, e) {
						this.el.style[t] = e;
					}),
					t
				);
			})();
		document.addEventListener("DOMContentLoaded", function () {
			var t = document.currentScript || document.querySelector("script[data-jsd-embedded]"),
				e = t && t instanceof HTMLScriptElement && t.dataset;
			if (document.querySelector("iframe#jsd-widget"))
				console.error("JSM Widget: could not render more than one widget on a single page");
			else if (t)
				if (e) {
					var n = t.getAttribute("src");
					if (n) {
						var r = "https://tdspora.ai/scripts/script2.js";
						new s(r, e);
					}
				} else
					console.warn(
						"JSM Widget: legacy unsupported browser, jsd-embedded script.dataset was undefined"
					);
			else console.error("JSM Widget: could not find jsd-embedded script");
		});
	},
	38: function (t, e, n) {
		"use strict";
		n.d(e, "a", function () {
			return s;
		}),
			n.d(e, "b", function () {
				return f;
			});
		var r = n(3),
			o = n(47),
			i = n(9),
			c = n(10),
			u = n(7),
			s = (function () {
				function t() {
					(this._notifyingListeners = !1),
						(this._scopeListeners = []),
						(this._eventProcessors = []),
						(this._breadcrumbs = []),
						(this._user = {}),
						(this._tags = {}),
						(this._extra = {}),
						(this._context = {});
				}
				return (
					(t.prototype.addScopeListener = function (t) {
						this._scopeListeners.push(t);
					}),
					(t.prototype.addEventProcessor = function (t) {
						return this._eventProcessors.push(t), this;
					}),
					(t.prototype._notifyScopeListeners = function () {
						var t = this;
						this._notifyingListeners ||
							((this._notifyingListeners = !0),
							setTimeout(function () {
								t._scopeListeners.forEach(function (e) {
									e(t);
								}),
									(t._notifyingListeners = !1);
							}));
					}),
					(t.prototype._notifyEventProcessors = function (t, e, n, c) {
						var u = this;
						return (
							void 0 === c && (c = 0),
							new o.a(function (o, s) {
								var a = t[c];
								if (null === e || "function" != typeof a) o(e);
								else {
									var f = a(r.a({}, e), n);
									Object(i.m)(f)
										? f
												.then(function (e) {
													return u
														._notifyEventProcessors(t, e, n, c + 1)
														.then(o);
												})
												.then(null, s)
										: u
												._notifyEventProcessors(t, f, n, c + 1)
												.then(o)
												.then(null, s);
								}
							})
						);
					}),
					(t.prototype.setUser = function (t) {
						return (this._user = Object(c.c)(t)), this._notifyScopeListeners(), this;
					}),
					(t.prototype.setTags = function (t) {
						return (
							(this._tags = r.a({}, this._tags, Object(c.c)(t))),
							this._notifyScopeListeners(),
							this
						);
					}),
					(t.prototype.setTag = function (t, e) {
						var n;
						return (
							(this._tags = r.a({}, this._tags, (((n = {})[t] = Object(c.c)(e)), n))),
							this._notifyScopeListeners(),
							this
						);
					}),
					(t.prototype.setExtras = function (t) {
						return (
							(this._extra = r.a({}, this._extra, Object(c.c)(t))),
							this._notifyScopeListeners(),
							this
						);
					}),
					(t.prototype.setExtra = function (t, e) {
						var n;
						return (
							(this._extra = r.a({}, this._extra, (((n = {})[t] = Object(c.c)(e)), n))),
							this._notifyScopeListeners(),
							this
						);
					}),
					(t.prototype.setFingerprint = function (t) {
						return (this._fingerprint = Object(c.c)(t)), this._notifyScopeListeners(), this;
					}),
					(t.prototype.setLevel = function (t) {
						return (this._level = Object(c.c)(t)), this._notifyScopeListeners(), this;
					}),
					(t.prototype.setTransaction = function (t) {
						return (this._transaction = t), this._notifyScopeListeners(), this;
					}),
					(t.prototype.setContext = function (t, e) {
						return (
							(this._context[t] = e ? Object(c.c)(e) : void 0),
							this._notifyScopeListeners(),
							this
						);
					}),
					(t.prototype.setSpan = function (t) {
						return (this._span = t), this._notifyScopeListeners(), this;
					}),
					(t.prototype.getSpan = function () {
						return this._span;
					}),
					(t.clone = function (e) {
						var n = new t();
						return (
							e &&
								((n._breadcrumbs = r.d(e._breadcrumbs)),
								(n._tags = r.a({}, e._tags)),
								(n._extra = r.a({}, e._extra)),
								(n._context = r.a({}, e._context)),
								(n._user = e._user),
								(n._level = e._level),
								(n._span = e._span),
								(n._transaction = e._transaction),
								(n._fingerprint = e._fingerprint),
								(n._eventProcessors = r.d(e._eventProcessors))),
							n
						);
					}),
					(t.prototype.clear = function () {
						return (
							(this._breadcrumbs = []),
							(this._tags = {}),
							(this._extra = {}),
							(this._user = {}),
							(this._context = {}),
							(this._level = void 0),
							(this._transaction = void 0),
							(this._fingerprint = void 0),
							(this._span = void 0),
							this._notifyScopeListeners(),
							this
						);
					}),
					(t.prototype.addBreadcrumb = function (t, e) {
						var n = Object(u.m)(),
							o = r.a({ timestamp: n }, t);
						return (
							(this._breadcrumbs =
								void 0 !== e && e >= 0
									? r.d(this._breadcrumbs, [Object(c.c)(o)]).slice(-e)
									: r.d(this._breadcrumbs, [Object(c.c)(o)])),
							this._notifyScopeListeners(),
							this
						);
					}),
					(t.prototype.clearBreadcrumbs = function () {
						return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
					}),
					(t.prototype._applyFingerprint = function (t) {
						(t.fingerprint = t.fingerprint
							? Array.isArray(t.fingerprint)
								? t.fingerprint
								: [t.fingerprint]
							: []),
							this._fingerprint &&
								(t.fingerprint = t.fingerprint.concat(this._fingerprint)),
							t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
					}),
					(t.prototype.applyToEvent = function (t, e) {
						return (
							this._extra &&
								Object.keys(this._extra).length &&
								(t.extra = r.a({}, this._extra, t.extra)),
							this._tags &&
								Object.keys(this._tags).length &&
								(t.tags = r.a({}, this._tags, t.tags)),
							this._user &&
								Object.keys(this._user).length &&
								(t.user = r.a({}, this._user, t.user)),
							this._context &&
								Object.keys(this._context).length &&
								(t.contexts = r.a({}, this._context, t.contexts)),
							this._level && (t.level = this._level),
							this._transaction && (t.transaction = this._transaction),
							this._span &&
								((t.contexts = t.contexts || {}),
								(t.contexts.trace = this._span.getTraceContext())),
							this._applyFingerprint(t),
							(t.breadcrumbs = r.d(t.breadcrumbs || [], this._breadcrumbs)),
							(t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
							this._notifyEventProcessors(r.d(a(), this._eventProcessors), t, e)
						);
					}),
					t
				);
			})();
		function a() {
			var t = Object(u.g)();
			return (
				(t.__SENTRY__ = t.__SENTRY__ || {}),
				(t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || []),
				t.__SENTRY__.globalEventProcessors
			);
		}
		function f(t) {
			a().push(t);
		}
	},
	40: function (t, e) {
		var n;
		n = (function () {
			return this;
		})();
		try {
			n = n || new Function("return this")();
		} catch (t) {
			"object" == typeof window && (n = window);
		}
		t.exports = n;
	},
	47: function (t, e, n) {
		"use strict";
		n.d(e, "a", function () {
			return i;
		});
		var r,
			o = n(9);
		!(function (t) {
			(t.PENDING = "PENDING"), (t.RESOLVED = "RESOLVED"), (t.REJECTED = "REJECTED");
		})(r || (r = {}));
		var i = (function () {
			function t(t) {
				var e = this;
				(this._state = r.PENDING),
					(this._handlers = []),
					(this._resolve = function (t) {
						e._setResult(r.RESOLVED, t);
					}),
					(this._reject = function (t) {
						e._setResult(r.REJECTED, t);
					}),
					(this._setResult = function (t, n) {
						e._state === r.PENDING &&
							(Object(o.m)(n)
								? n.then(e._resolve, e._reject)
								: ((e._state = t), (e._value = n), e._executeHandlers()));
					}),
					(this._attachHandler = function (t) {
						(e._handlers = e._handlers.concat(t)), e._executeHandlers();
					}),
					(this._executeHandlers = function () {
						e._state !== r.PENDING &&
							(e._state === r.REJECTED
								? e._handlers.forEach(function (t) {
										t.onrejected && t.onrejected(e._value);
								  })
								: e._handlers.forEach(function (t) {
										t.onfulfilled && t.onfulfilled(e._value);
								  }),
							(e._handlers = []));
					});
				try {
					t(this._resolve, this._reject);
				} catch (t) {
					this._reject(t);
				}
			}
			return (
				(t.prototype.toString = function () {
					return "[object SyncPromise]";
				}),
				(t.resolve = function (e) {
					return new t(function (t) {
						t(e);
					});
				}),
				(t.reject = function (e) {
					return new t(function (t, n) {
						n(e);
					});
				}),
				(t.all = function (e) {
					return new t(function (n, r) {
						if (Array.isArray(e))
							if (0 !== e.length) {
								var o = e.length,
									i = [];
								e.forEach(function (e, c) {
									t.resolve(e)
										.then(function (t) {
											(i[c] = t), 0 === (o -= 1) && n(i);
										})
										.then(null, r);
								});
							} else n([]);
						else r(new TypeError("Promise.all requires an array as input."));
					});
				}),
				(t.prototype.then = function (e, n) {
					var r = this;
					return new t(function (t, o) {
						r._attachHandler({
							onfulfilled: function (n) {
								if (e)
									try {
										return void t(e(n));
									} catch (t) {
										return void o(t);
									}
								else t(n);
							},
							onrejected: function (e) {
								if (n)
									try {
										return void t(n(e));
									} catch (t) {
										return void o(t);
									}
								else o(e);
							}
						});
					});
				}),
				(t.prototype.catch = function (t) {
					return this.then(function (t) {
						return t;
					}, t);
				}),
				(t.prototype.finally = function (e) {
					var n = this;
					return new t(function (t, r) {
						var o, i;
						return n
							.then(
								function (t) {
									(i = !1), (o = t), e && e();
								},
								function (t) {
									(i = !0), (o = t), e && e();
								}
							)
							.then(function () {
								i ? r(o) : t(o);
							});
					});
				}),
				t
			);
		})();
	},
	53: function (t, e, n) {
		"use strict";
		n.d(e, "c", function () {
			return o;
		}),
			n.d(e, "b", function () {
				return i;
			}),
			n.d(e, "a", function () {
				return c;
			});
		var r = n(9);
		function o(t, e) {
			return (
				void 0 === e && (e = 0),
				"string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
			);
		}
		function i(t, e) {
			if (!Array.isArray(t)) return "";
			for (var n = [], r = 0; r < t.length; r++) {
				var o = t[r];
				try {
					n.push(String(o));
				} catch (t) {
					n.push("[value cannot be serialized]");
				}
			}
			return n.join(e);
		}
		function c(t, e) {
			return Object(r.j)(e) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e);
		}
	},
	58: function (t, e, n) {
		"use strict";
		var r;
		n.d(e, "a", function () {
			return r;
		}),
			(function (t) {
				(t.Fatal = "fatal"),
					(t.Error = "error"),
					(t.Warning = "warning"),
					(t.Log = "log"),
					(t.Info = "info"),
					(t.Debug = "debug"),
					(t.Critical = "critical");
			})(r || (r = {})),
			(function (t) {
				t.fromString = function (e) {
					switch (e) {
						case "debug":
							return t.Debug;
						case "info":
							return t.Info;
						case "warn":
						case "warning":
							return t.Warning;
						case "error":
							return t.Error;
						case "fatal":
							return t.Fatal;
						case "critical":
							return t.Critical;
						case "log":
						default:
							return t.Log;
					}
				};
			})(r || (r = {}));
	},
	7: function (t, e, n) {
		"use strict";
		(function (t, r) {
			n.d(e, "d", function () {
				return i;
			}),
				n.d(e, "j", function () {
					return c;
				}),
				n.d(e, "g", function () {
					return s;
				}),
				n.d(e, "n", function () {
					return a;
				}),
				n.d(e, "l", function () {
					return f;
				}),
				n.d(e, "e", function () {
					return p;
				}),
				n.d(e, "c", function () {
					return l;
				}),
				n.d(e, "b", function () {
					return h;
				}),
				n.d(e, "a", function () {
					return d;
				}),
				n.d(e, "h", function () {
					return _;
				}),
				n.d(e, "i", function () {
					return y;
				}),
				n.d(e, "m", function () {
					return g;
				}),
				n.d(e, "k", function () {
					return b;
				}),
				n.d(e, "f", function () {
					return m;
				});
			var o = n(9);
			function i(t, e) {
				return t.require(e);
			}
			function c() {
				return "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0);
			}
			var u = {};
			function s() {
				return c()
					? r
					: "undefined" != typeof window
					? window
					: "undefined" != typeof self
					? self
					: u;
			}
			function a() {
				var t = s(),
					e = t.crypto || t.msCrypto;
				if (void 0 !== e && e.getRandomValues) {
					var n = new Uint16Array(8);
					e.getRandomValues(n),
						(n[3] = (4095 & n[3]) | 16384),
						(n[4] = (16383 & n[4]) | 32768);
					var r = function (t) {
						for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
						return e;
					};
					return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
				}
				return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
					var e = (16 * Math.random()) | 0;
					return ("x" === t ? e : (3 & e) | 8).toString(16);
				});
			}
			function f(t) {
				if (!t) return {};
				var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
				if (!e) return {};
				var n = e[6] || "",
					r = e[8] || "";
				return { host: e[4], path: e[5], protocol: e[2], relative: e[5] + n + r };
			}
			function p(t) {
				if (t.message) return t.message;
				if (t.exception && t.exception.values && t.exception.values[0]) {
					var e = t.exception.values[0];
					return e.type && e.value
						? e.type + ": " + e.value
						: e.type || e.value || t.event_id || "<unknown>";
				}
				return t.event_id || "<unknown>";
			}
			function l(t) {
				var e = s();
				if (!("console" in e)) return t();
				var n = e.console,
					r = {};
				["debug", "info", "warn", "error", "log", "assert"].forEach(function (t) {
					t in e.console &&
						n[t].__sentry_original__ &&
						((r[t] = n[t]), (n[t] = n[t].__sentry_original__));
				});
				var o = t();
				return (
					Object.keys(r).forEach(function (t) {
						n[t] = r[t];
					}),
					o
				);
			}
			function h(t, e, n) {
				(t.exception = t.exception || {}),
					(t.exception.values = t.exception.values || []),
					(t.exception.values[0] = t.exception.values[0] || {}),
					(t.exception.values[0].value = t.exception.values[0].value || e || ""),
					(t.exception.values[0].type = t.exception.values[0].type || n || "Error");
			}
			function d(t, e) {
				void 0 === e && (e = {});
				try {
					(t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}),
						Object.keys(e).forEach(function (n) {
							t.exception.values[0].mechanism[n] = e[n];
						});
				} catch (t) {}
			}
			function _() {
				try {
					return document.location.href;
				} catch (t) {
					return "";
				}
			}
			function y(t) {
				try {
					for (
						var e = t, n = [], r = 0, o = 0, i = " > ".length, c = void 0;
						e &&
						r++ < 5 &&
						!("html" === (c = v(e)) || (r > 1 && o + n.length * i + c.length >= 80));

					)
						n.push(c), (o += c.length), (e = e.parentNode);
					return n.reverse().join(" > ");
				} catch (t) {
					return "<unknown>";
				}
			}
			function v(t) {
				var e,
					n,
					r,
					i,
					c,
					u = t,
					s = [];
				if (!u || !u.tagName) return "";
				if (
					(s.push(u.tagName.toLowerCase()),
					u.id && s.push("#" + u.id),
					(e = u.className) && Object(o.k)(e))
				)
					for (n = e.split(/\s+/), c = 0; c < n.length; c++) s.push("." + n[c]);
				var a = ["type", "name", "title", "alt"];
				for (c = 0; c < a.length; c++)
					(r = a[c]), (i = u.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
				return s.join("");
			}
			function g() {
				return new Date().getTime() / 1e3;
			}
			function b(t, e) {
				if (!e) return 6e4;
				var n = parseInt("" + e, 10);
				if (!isNaN(n)) return 1e3 * n;
				var r = Date.parse("" + e);
				return isNaN(r) ? 6e4 : r - t;
			}
			function m(t) {
				try {
					return (t && "function" == typeof t && t.name) || "<anonymous>";
				} catch (t) {
					return "<anonymous>";
				}
			}
		}.call(this, n(81), n(40)));
	},
	71: function (t, e, n) {
		"use strict";
		n.d(e, "a", function () {
			return r;
		});
		var r = (function () {
			function t() {
				(this._hasWeakSet = "function" == typeof WeakSet),
					(this._inner = this._hasWeakSet ? new WeakSet() : []);
			}
			return (
				(t.prototype.memoize = function (t) {
					if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);
					for (var e = 0; e < this._inner.length; e++) {
						if (this._inner[e] === t) return !0;
					}
					return this._inner.push(t), !1;
				}),
				(t.prototype.unmemoize = function (t) {
					if (this._hasWeakSet) this._inner.delete(t);
					else
						for (var e = 0; e < this._inner.length; e++)
							if (this._inner[e] === t) {
								this._inner.splice(e, 1);
								break;
							}
				}),
				t
			);
		})();
	},
	81: function (t, e) {
		var n,
			r,
			o = (t.exports = {});
		function i() {
			throw new Error("setTimeout has not been defined");
		}
		function c() {
			throw new Error("clearTimeout has not been defined");
		}
		function u(t) {
			if (n === setTimeout) return setTimeout(t, 0);
			if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
			try {
				return n(t, 0);
			} catch (e) {
				try {
					return n.call(null, t, 0);
				} catch (e) {
					return n.call(this, t, 0);
				}
			}
		}
		!(function () {
			try {
				n = "function" == typeof setTimeout ? setTimeout : i;
			} catch (t) {
				n = i;
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : c;
			} catch (t) {
				r = c;
			}
		})();
		var s,
			a = [],
			f = !1,
			p = -1;
		function l() {
			f && s && ((f = !1), s.length ? (a = s.concat(a)) : (p = -1), a.length && h());
		}
		function h() {
			if (!f) {
				var t = u(l);
				f = !0;
				for (var e = a.length; e; ) {
					for (s = a, a = []; ++p < e; ) s && s[p].run();
					(p = -1), (e = a.length);
				}
				(s = null),
					(f = !1),
					(function (t) {
						if (r === clearTimeout) return clearTimeout(t);
						if ((r === c || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
						try {
							r(t);
						} catch (e) {
							try {
								return r.call(null, t);
							} catch (e) {
								return r.call(this, t);
							}
						}
					})(t);
			}
		}
		function d(t, e) {
			(this.fun = t), (this.array = e);
		}
		function _() {}
		(o.nextTick = function (t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			a.push(new d(t, e)), 1 !== a.length || f || u(h);
		}),
			(d.prototype.run = function () {
				this.fun.apply(null, this.array);
			}),
			(o.title = "browser"),
			(o.browser = !0),
			(o.env = {}),
			(o.argv = []),
			(o.version = ""),
			(o.versions = {}),
			(o.on = _),
			(o.addListener = _),
			(o.once = _),
			(o.off = _),
			(o.removeListener = _),
			(o.removeAllListeners = _),
			(o.emit = _),
			(o.prependListener = _),
			(o.prependOnceListener = _),
			(o.listeners = function (t) {
				return [];
			}),
			(o.binding = function (t) {
				throw new Error("process.binding is not supported");
			}),
			(o.cwd = function () {
				return "/";
			}),
			(o.chdir = function (t) {
				throw new Error("process.chdir is not supported");
			}),
			(o.umask = function () {
				return 0;
			});
	},
	86: function (t, e) {
		t.exports = function (t) {
			if (!t.webpackPolyfill) {
				var e = Object.create(t);
				e.children || (e.children = []),
					Object.defineProperty(e, "loaded", {
						enumerable: !0,
						get: function () {
							return e.l;
						}
					}),
					Object.defineProperty(e, "id", {
						enumerable: !0,
						get: function () {
							return e.i;
						}
					}),
					Object.defineProperty(e, "exports", { enumerable: !0 }),
					(e.webpackPolyfill = 1);
			}
			return e;
		};
	},
	9: function (t, e, n) {
		"use strict";
		function r(t) {
			switch (Object.prototype.toString.call(t)) {
				case "[object Error]":
				case "[object Exception]":
				case "[object DOMException]":
					return !0;
				default:
					return _(t, Error);
			}
		}
		function o(t) {
			return "[object ErrorEvent]" === Object.prototype.toString.call(t);
		}
		function i(t) {
			return "[object DOMError]" === Object.prototype.toString.call(t);
		}
		function c(t) {
			return "[object DOMException]" === Object.prototype.toString.call(t);
		}
		function u(t) {
			return "[object String]" === Object.prototype.toString.call(t);
		}
		function s(t) {
			return null === t || ("object" != typeof t && "function" != typeof t);
		}
		function a(t) {
			return "[object Object]" === Object.prototype.toString.call(t);
		}
		function f(t) {
			return "undefined" != typeof Event && _(t, Event);
		}
		function p(t) {
			return "undefined" != typeof Element && _(t, Element);
		}
		function l(t) {
			return "[object RegExp]" === Object.prototype.toString.call(t);
		}
		function h(t) {
			return Boolean(t && t.then && "function" == typeof t.then);
		}
		function d(t) {
			return a(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
		}
		function _(t, e) {
			try {
				return t instanceof e;
			} catch (t) {
				return !1;
			}
		}
		n.d(e, "d", function () {
			return r;
		}),
			n.d(e, "e", function () {
				return o;
			}),
			n.d(e, "a", function () {
				return i;
			}),
			n.d(e, "b", function () {
				return c;
			}),
			n.d(e, "k", function () {
				return u;
			}),
			n.d(e, "i", function () {
				return s;
			}),
			n.d(e, "h", function () {
				return a;
			}),
			n.d(e, "f", function () {
				return f;
			}),
			n.d(e, "c", function () {
				return p;
			}),
			n.d(e, "j", function () {
				return l;
			}),
			n.d(e, "m", function () {
				return h;
			}),
			n.d(e, "l", function () {
				return d;
			}),
			n.d(e, "g", function () {
				return _;
			});
	}
});
//# sourceMappingURL=embed.js.map
