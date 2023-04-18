'use strict';

var fsExtra = require('fs-extra');
require('dotenv/config');
var yargs = require('yargs/yargs');
var prompts = require('prompts');
var fetch = require('node-fetch');
var chalk = require('chalk');
var path = require('path');
var lodash = require('lodash');
var prettier = require('prettier');
var crypto = require('crypto');
var tree = require('tree-node-cli');
var nodemailer = require('nodemailer');
var mailingCore = require('mailing-core');
require('react');
var mjmlReact = require('mjml-react');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var posthogNode = require('posthog-node');
var http = require('http');
var open = require('open');
var next = require('next');
var url = require('url');
var os = require('os');
var child_process = require('child_process');
var esbuild = require('esbuild');
var process$1 = require('process');
var chokidar = require('chokidar');
var socket_io = require('socket.io');
var nodeHtmlParser = require('node-html-parser');
var htmlMinifierTerser = require('html-minifier-terser');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var yargs__default = /*#__PURE__*/_interopDefault(yargs);
var prompts__default = /*#__PURE__*/_interopDefault(prompts);
var fetch__default = /*#__PURE__*/_interopDefault(fetch);
var chalk__default = /*#__PURE__*/_interopDefault(chalk);
var prettier__namespace = /*#__PURE__*/_interopNamespace(prettier);
var tree__default = /*#__PURE__*/_interopDefault(tree);
var nodemailer__default = /*#__PURE__*/_interopDefault(nodemailer);
var cx__default = /*#__PURE__*/_interopDefault(cx);
var http__default = /*#__PURE__*/_interopDefault(http);
var open__default = /*#__PURE__*/_interopDefault(open);
var next__default = /*#__PURE__*/_interopDefault(next);

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

// appends /previews to emailsDir string if that directory exists
// otherwise, return null
function getPreviewsDirectory(emailsDir) {
  var previewsDirectory = path.resolve(emailsDir, "previews");
  return fsExtra.existsSync(previewsDirectory) ? previewsDirectory : null;
}
function readPackageJSON() {
  return readJSONverbose("./package.json");
}
function readJSONverbose(filename) {
  try {
    return fsExtra.readJSONSync(filename);
  } catch (err) {
    error("expected ".concat(filename, " to exist and be valid JSON"));
    throw err;
  }
}
function getMailingAPIBaseURL() {
  if (process.env.MM_DEV) {
    return "http://localhost:3000";
  } else {
    return "https://www.mailing.run";
  }
}

/*
  Functions for generating an anonymousId and get/set to a singleton
  this is necessary to report analytics the first time you run init,
  when you had no config and so argv has no anonymousId set
*/
var generatedAnonymousId;
// only call getOrSetGeneratedAnonymousId when an anonymousId is missing and *should be set*
// because otherwise setting generatedAnonymousId will create side effects.  The only time we do this
// is when we're generating an anonymousId for the first time
function getOrSetGeneratedAnonymousId() {
  if (generatedAnonymousId) return generatedAnonymousId;
  var id = crypto.randomUUID();
  generatedAnonymousId = id;
  return id;
}
function getGeneratedAnonymousId() {
  return generatedAnonymousId;
}

var MAILING_CONFIG_FILE = "./mailing.config.json";
var DEFAULTS;

// defaults for all options
function defaults() {
  if (DEFAULTS === undefined) DEFAULTS = {
    typescript: looksLikeTypescriptProject(),
    emailsDir: fsExtra.existsSync("./src/emails") ? "./src/emails" : "./emails",
    outDir: "./previews_html",
    port: 3883,
    quiet: false,
    scaffoldOnly: false
  };
  return DEFAULTS;
}

// options to include in the default config file
var DEFAULT_KEYS_FOR_CONFIG_FILE = ["typescript", "emailsDir", "outDir", "anonymousId"];

// an object to JSON stringify and write to the default config file
function defaultsForConfigFile() {
  // set anonymousId here and not in DEFAULTS so that it getOrSetGeneratedAnonymousId is only called
  // when an anonymousId needs to be generated

  var defaultsToWriteToConfig = _objectSpread2(_objectSpread2({}, defaults()), {}, {
    anonymousId: getOrSetGeneratedAnonymousId()
  });
  return lodash.pick(defaultsToWriteToConfig, DEFAULT_KEYS_FOR_CONFIG_FILE);
}
function looksLikeTypescriptProject() {
  var _pkg$devDependencies, _pkg$dependencies;
  if (fsExtra.existsSync("./tsconfig.json")) {
    return true;
  }
  var pkg = readPackageJSON();
  return !!((_pkg$devDependencies = pkg.devDependencies) !== null && _pkg$devDependencies !== void 0 && _pkg$devDependencies.typescript || (_pkg$dependencies = pkg.dependencies) !== null && _pkg$dependencies !== void 0 && _pkg$dependencies.typescript);
}

// write the default mailing.config.json file to get you started
function writeDefaultConfigFile() {
  if (fsExtra.existsSync(MAILING_CONFIG_FILE)) {
    // read the JSON file
    var json = readJSONverbose(MAILING_CONFIG_FILE);

    // check if anonymousId in JSON object
    if ("anonymousId" in json) return;

    // if not, add it
    json.anonymousId = getOrSetGeneratedAnonymousId();

    // ... and overwrite the JSON file
    debug("patching mailing.config.json to include anonymousId ".concat(getGeneratedAnonymousId()));
    var configJsonString = prettier__namespace.format(JSON.stringify(json), {
      parser: "json",
      printWidth: 0
    });
    fsExtra.writeFileSync(MAILING_CONFIG_FILE, configJsonString);
    log("updated mailing.config.json in your project with the following contents:\n  ".concat(configJsonString));
  } else {
    var _configJsonString = prettier__namespace.format(JSON.stringify(defaultsForConfigFile()), {
      parser: "json",
      printWidth: 0
    });
    fsExtra.writeFileSync(MAILING_CONFIG_FILE, _configJsonString);

    // ascii art moment
    logPlain("\n  ,,    ,,    ,,\n  `7MMM.     ,MMF'           db  `7MM    db\n    MMMb    dPMM                   MM\n    M YM   ,M MM   ,6\"Yb.  `7MM    MM  `7MM  `7MMpMMMb.  .P\"Ybmmm\n    M  Mb  M' MM  8)   MM    MM    MM    MM    MM    MM :MI  I8\n    M  YM.P'  MM   ,pm9MM    MM    MM    MM    MM    MM  WmmmP\"\n    M  `YM'   MM  8M   MM    MM    MM    MM    MM    MM 8M\n  .JML. `'  .JMML.`Moo9^Yo..JMML..JMML..JMML..JMML  JMML.YMMMMMb\n                                                        6'     dP\n                                                        Ybmmmd'\n\n    ");
    log("added mailing.config.json in your project with the following contents:\n".concat(_configJsonString));
  }
  log("mailing collects anonymous telemetry data about usage");
}

/* Preview server config singleton */

var config$2;
function setConfig(newConfig) {
  config$2 = newConfig;
}
function getConfig$1() {
  if (undefined === config$2) {
    throw new Error("config is undefined");
  }
  return config$2;
}

// This method is useful in cases that config may not be set (like logging on the front-end).
function getQuiet() {
  var _config;
  return !!((_config = config$2) !== null && _config !== void 0 && _config.quiet);
}

var DEBUG = process.env.DEBUG;
var PREFIX = "mailing";
function log(message) {
  var _console;
  if (getQuiet() && !DEBUG) return;
  for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    optionalParams[_key - 1] = arguments[_key];
  }
  (_console = console).log.apply(_console, [chalk__default["default"].white(PREFIX), message].concat(optionalParams));
}
function error(message) {
  var _console2;
  for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    optionalParams[_key2 - 1] = arguments[_key2];
  }
  (_console2 = console).error.apply(_console2, [chalk__default["default"].red(PREFIX), message].concat(optionalParams));
}
function debug(message) {
  var _console3;
  for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    optionalParams[_key3 - 1] = arguments[_key3];
  }
  if (DEBUG) (_console3 = console).info.apply(_console3, [chalk__default["default"].yellowBright(PREFIX), message].concat(optionalParams));
}
function logPlain(message) {
  var _console4;
  if (getQuiet() && !DEBUG) return;
  for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    optionalParams[_key4 - 1] = arguments[_key4];
  }
  (_console4 = console).log.apply(_console4, [message].concat(optionalParams));
}

function generateEmailsDirectory(_x) {
  return _generateEmailsDirectory.apply(this, arguments);
}
function _generateEmailsDirectory() {
  _generateEmailsDirectory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var emailsDir, isTypescript, srcDir, srcEmails, fileTree;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            emailsDir = _ref.emailsDir, isTypescript = _ref.isTypescript;
            srcDir = process.env.MM_DEV ||         "production" === "test" ? __dirname + "/.." : __dirname + "/../src"; // copy the emails dir template in!
            srcEmails = isTypescript ? "emails" : "emails-js";
            _context.next = 5;
            return fsExtra.copy(path.resolve(srcDir, srcEmails), emailsDir, {
              overwrite: false
            });
          case 5:
            fileTree = tree__default["default"](emailsDir, {
              exclude: [/node_modules|\.mailing|yarn\.lock|yalc\.lock/]
            });
            log("generated your emails dir at ".concat(emailsDir, ":\n").concat(fileTree));
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateEmailsDirectory.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var transport = nodemailer__default["default"].createTransport({
  pool: true,
  host: "smtp.example.com",
  port: 465,
  secure: true,
  // use TLS
  auth: {
    user: "username",
    pass: "password"
  }
});
var sendMail$1 = mailingCore.buildSendMail({
  transport: transport,
  defaultFrom: "replace@me.with.your.com",
  configPath: "./mailing.config.json"
});

var colors = {
  white: "#e4ebfa",
  black: "#111",
  blue: "#b8ceff",
  gray300: "#ccc",
  gray500: "#555",
  gray600: "#444",
  gray700: "#333",
  gray800: "#222",
  slate300: "#bdc3cf",
  slate400: "#a5aab4",
  slate500: "#7b7e85",
  neutral200: "#eee",
  neutral500: "#777",
  neutral600: "#666",
  neutral800: "#444",
  black000: "#000",
  red400: "#f59c9c",
  amber200: "#fadf98",
  green200: "#dbf7d7",
  green300: "#c3f2bc",
  emerald700: "#728a6f",
  blue300: "#dce7ff",
  blue400: "#a1bfff",
  blue600: "#3a70e3",
  zinc800: "#27272a"
};
var fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 28
};
var lineHeight = {
  tight: "115%",
  base: "150%",
  relaxed: "185%"
};
var fontWeight = {
  normal: 400,
  bold: 700
};
var borderRadius = {
  sm: 8,
  base: 16,
  full: 9999
};
var fontFamily = {
  sans: 'neue-haas-unica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  serif: 'swear-display-cilati, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
};
var spacing = {
  s0: 0,
  s1: 4,
  s3: 8,
  s4: 12,
  s5: 16,
  s6: 20,
  s7: 24,
  s8: 32,
  s9: 40,
  s10: 48,
  s11: 56
};
var screens = {
  xs: "480px",
  sm: "640px"
};
var themeDefaults = {
  fontFamily: fontFamily.sans,
  lineHeight: lineHeight.base,
  fontWeight: fontWeight.normal,
  fontSize: fontSize.base,
  color: colors.white,
  padding: 0
};

function BaseLayout(_ref) {
  var width = _ref.width,
    children = _ref.children,
    style = _ref.style;
  return /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.Mjml, {
    children: [/*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlHead, {
      children: [/*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlFont, {
        name: "neue-haas-unica",
        href: "https://use.typekit.net/qqd8jtb.css"
      }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlAttributes, {
        children: /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlAll, _objectSpread2({}, themeDefaults))
      }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlStyle, {
        children: "\n          body {\n            -webkit-font-smoothing: antialiased;\n            min-width: 320px;\n            background-color: ".concat(colors.black000, ";\n          }\n          a {\n            color: inherit\n          }\n          .gutter {\n            padding-left: ").concat(spacing.s7, "px;\n            padding-right: ").concat(spacing.s7, "px;\n          }\n          .code {\n            font-family: ").concat(fontFamily.mono, ";\n            color: ").concat(colors.green200, ";\n            background-color: ").concat(colors.zinc800, ";\n            font-size: ").concat(fontSize.sm, "px;\n            border-radius: ").concat(borderRadius.sm, "px;\n            padding: ").concat(spacing.s1, "px ").concat(spacing.s3, "px;\n          }\n          .no-wrap {\n            white-space: nowrap;\n          }\n          .hidden {\n            display: none;\n            max-width: 0px;\n            max-height: 0px;\n            overflow: hidden;\n            mso-hide: all;\n          }\n          .lg-hidden {\n            display: none;\n            max-width: 0px;\n            max-height: 0px;\n            overflow: hidden;\n            mso-hide: all;\n          }\n\n          /* Large screens */\n          @media (min-width:").concat(screens.xs, ") {\n            .gutter {\n              padding-left: ").concat(spacing.s9, "px;\n              padding-right: ").concat(spacing.s9, "px;\n            }\n            .sm-hidden {\n              display: none;\n              max-width: 0px;\n              max-height: 0px;\n              overflow: hidden;\n              mso-hide: all;\n            }\n            .lg-hidden {\n              display: block !important;\n              max-width: none !important;\n              max-height: none !important;\n              overflow: visible !important;\n              mso-hide: none !important;\n            }\n          }\n\n          /* Email specific Styles */\n          ").concat(style, "\n      ")
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlBody, {
      width: width,
      children: children
    })]
  });
}

function Button(props) {
  return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlButton, _objectSpread2({
      lineHeight: lineHeight.tight,
      fontSize: fontSize.base,
      fontWeight: fontWeight.bold,
      innerPadding: "16px 24px 18px",
      align: "left",
      backgroundColor: colors.blue,
      color: colors.black,
      borderRadius: borderRadius.base,
      cssClass: cx__default["default"]("button", props.cssClass)
    }, props))
  });
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var _excluded$1 = ["children"];
var getHrefPropsFromProps = function getHrefPropsFromProps(props) {
  return JSON.parse(JSON.stringify({
    href: props.href,
    rel: props.rel,
    target: props.target
  }));
};
var getStylePropsFromProps = function getStylePropsFromProps(props) {
  return JSON.parse(JSON.stringify({
    color: props.color,
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    fontStyle: props.fontStyle,
    fontWeight: props.fontWeight,
    letterSpacing: props.letterSpacing,
    height: props.height,
    textDecoration: props.textDecoration,
    textTransform: props.textTransform,
    align: props.align
  }));
};
function Link(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$1);
  return /*#__PURE__*/jsxRuntime.jsx("a", _objectSpread2(_objectSpread2({
    target: "_blank",
    rel: "noopener"
  }, getHrefPropsFromProps(props)), {}, {
    style: _objectSpread2({
      color: colors.blue400
    }, getStylePropsFromProps(props)),
    children: children
  }));
}

function Footer(_ref) {
  var _ref$includeUnsubscri = _ref.includeUnsubscribe,
    includeUnsubscribe = _ref$includeUnsubscri === void 0 ? false : _ref$includeUnsubscri;
  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlWrapper, {
      backgroundColor: colors.gray800,
      borderBottom: "2px solid ".concat(colors.black),
      children: /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSection, {
        children: /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlGroup, {
          children: [/*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlColumn, {
            padding: "48px 0",
            borderRight: "2px solid ".concat(colors.black),
            children: [/*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlText, {
              align: "center",
              fontSize: fontSize.xs,
              color: colors.slate400,
              fontWeight: fontWeight.bold,
              paddingBottom: 8,
              textTransform: "uppercase",
              children: "Help & Bugs"
            }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlText, {
              align: "center",
              children: /*#__PURE__*/jsxRuntime.jsxs(Link, {
                color: colors.white,
                fontSize: fontSize.sm,
                href: "https://discord.gg/fdSzmY46wY",
                children: [/*#__PURE__*/jsxRuntime.jsx("img", {
                  height: 12,
                  width: 16,
                  src: "https://mailing.run/welcome-template/discord.png",
                  alt: "",
                  style: {
                    verticalAlign: "text-bottom",
                    paddingRight: 6,
                    paddingBottom: 4
                  }
                }), "Discord"]
              })
            })]
          }), /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlColumn, {
            padding: "48px 0",
            children: [/*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlText, {
              align: "center",
              fontSize: fontSize.xs,
              color: colors.slate400,
              fontWeight: fontWeight.bold,
              paddingBottom: 8,
              textTransform: "uppercase",
              children: "What we\u2019re up to"
            }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlText, {
              align: "center",
              children: /*#__PURE__*/jsxRuntime.jsxs(Link, {
                fontSize: fontSize.sm,
                color: colors.white,
                href: "https://github.com/sofn-xyz/mailing/issues",
                children: [/*#__PURE__*/jsxRuntime.jsx("img", {
                  height: 16,
                  width: 16,
                  src: "https://mailing.run/welcome-template/github.png",
                  alt: "",
                  style: {
                    verticalAlign: "text-bottom",
                    paddingRight: 6,
                    paddingBottom: 2
                  }
                }), "Issues"]
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlWrapper, {
      backgroundColor: colors.gray800,
      children: [/*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSection, {
        paddingTop: 32,
        paddingBottom: 24,
        cssClass: "gutter",
        children: /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlColumn, {
          children: [/*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlText, {
            align: "center",
            fontSize: fontSize.xs,
            color: colors.slate400,
            fontWeight: fontWeight.bold,
            textTransform: "uppercase",
            children: ["Mailing ", new Date().getFullYear()]
          }), includeUnsubscribe && /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlText, {
            align: "center",
            fontSize: fontSize.xs,
            color: colors.slate400,
            paddingTop: 12,
            children: ["You\u2019re receiving this email because you asked for occasional updates about Mailing. If you don\u2019t want to receive these in the future, you can", " ", /*#__PURE__*/jsxRuntime.jsx(Link, {
              color: colors.slate400,
              textDecoration: "underline",
              href: mailingCore.EMAIL_PREFERENCES_URL,
              children: "unsubscribe."
            })]
          })]
        })
      }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSection, {
        paddingBottom: 40,
        children: /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlColumn, {
          children: /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlImage, {
            height: 16,
            width: 13,
            src: "https://mailing.run/welcome-template/logo.png",
            href: "https://mailing.run"
          })
        })
      })]
    })]
  });
}

var _excluded = ["children", "maxWidth"];
function Text(_ref) {
  var children = _ref.children,
    maxWidth = _ref.maxWidth,
    props = _objectWithoutProperties(_ref, _excluded);
  if (maxWidth) {
    return /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlText, _objectSpread2(_objectSpread2({}, props), {}, {
      cssClass: cx__default["default"]("button", props.cssClass),
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        style: {
          maxWidth: maxWidth
        },
        children: children
      })
    }));
  } else return /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlText, _objectSpread2(_objectSpread2({}, props), {}, {
    cssClass: cx__default["default"]("button", props.cssClass),
    children: children
  }));
}

var defaultProps = {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.tight,
  fontSize: fontSize.xl
};
function Heading(props) {
  return /*#__PURE__*/jsxRuntime.jsx(Text, _objectSpread2(_objectSpread2(_objectSpread2({}, defaultProps), props), {}, {
    children: props.children
  }));
}

function Header() {
  return /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlWrapper, {
    padding: "40px 0 64px",
    backgroundColor: colors.black,
    children: /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSection, {
      cssClass: "gutter",
      children: /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlGroup, {
        children: [/*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlColumn, {
          width: "42%",
          children: /*#__PURE__*/jsxRuntime.jsx(Text, {
            align: "left",
            children: /*#__PURE__*/jsxRuntime.jsx(Link, {
              color: colors.white,
              fontSize: fontSize.xl,
              fontWeight: fontWeight.bold,
              href: "https://mailing.run",
              textDecoration: "none",
              children: /*#__PURE__*/jsxRuntime.jsx("img", {
                height: 24,
                width: 112,
                src: "https://mailing.run/welcome-template/logo-full.png",
                alt: "",
                style: {
                  verticalAlign: "text-bottom",
                  paddingRight: 10,
                  paddingBottom: 2
                }
              })
            })
          })
        }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlColumn, {
          width: "58%",
          children: /*#__PURE__*/jsxRuntime.jsxs(Text, {
            align: "right",
            fontSize: fontSize.xs,
            lineHeight: lineHeight.tight,
            fontWeight: fontWeight.bold,
            children: ["The open source email", /*#__PURE__*/jsxRuntime.jsx("br", {}), "platform for teams that code"]
          })
        })]
      })
    })
  });
}

var welcomeStyle = "\n  .h1 > * {\n    font-size: 56px !important;\n  }\n  .h2 > * {\n    font-size: ".concat(fontSize.lg, "px !important;\n  }\n  .p > * {\n    font-size: ").concat(fontSize.base, "px !important;\n  }\n\n  @media (min-width:").concat(screens.xs, ") {\n    .h1 > * {\n      font-size: 84px !important;\n    }\n    .h2 > * {\n      font-size: ").concat(fontSize.xxl, "px !important;\n    }\n    .p > * {\n      font-size: ").concat(fontSize.md, "px !important;\n    }\n  }\n");
var Welcome = function Welcome(_ref) {
  var includeUnsubscribe = _ref.includeUnsubscribe;
  return /*#__PURE__*/jsxRuntime.jsxs(BaseLayout, {
    width: 600,
    style: welcomeStyle,
    children: [/*#__PURE__*/jsxRuntime.jsx(Header, {}), /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlWrapper, {
      backgroundColor: colors.black,
      children: [/*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSection, {
        paddingBottom: spacing.s11,
        cssClass: "gutter",
        children: /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlColumn, {
          children: /*#__PURE__*/jsxRuntime.jsxs(Heading, {
            maxWidth: 420,
            cssClass: "h1",
            fontFamily: fontFamily.serif,
            children: ["Thank you ", /*#__PURE__*/jsxRuntime.jsx("br", {}), "for installing ", /*#__PURE__*/jsxRuntime.jsx("br", {}), "Mailing :)"]
          })
        })
      }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSection, {
        paddingBottom: spacing.s11,
        cssClass: "gutter",
        children: /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlColumn, {
          children: [/*#__PURE__*/jsxRuntime.jsxs(Heading, {
            cssClass: "h2",
            paddingBottom: spacing.s6,
            children: [/*#__PURE__*/jsxRuntime.jsx("span", {
              style: {
                color: colors.green300
              },
              children: "\u25CF"
            }), " This is the Preview Viewer"]
          }), /*#__PURE__*/jsxRuntime.jsxs(Text, {
            cssClass: "p",
            fontSize: fontSize.md,
            paddingBottom: spacing.s7,
            children: ["It shows previews from", " ", /*#__PURE__*/jsxRuntime.jsx("span", {
              className: "code",
              children: "emails/previews"
            }), ". Keep it open while you build your emails and it\u2019ll live reload as you develop. To see it in action with this preview, make a change to", " ", /*#__PURE__*/jsxRuntime.jsx("span", {
              className: "code",
              children: "emails/previews/Welcome.tsx"
            }), ". You can deploy your Mailing server to Vercel or Netlify to share the Preview Viewer with your team."]
          }), /*#__PURE__*/jsxRuntime.jsxs(Button, {
            href: "https://github.com/sofn-xyz/mailing-templates",
            backgroundColor: colors.green300,
            align: "left",
            cssClass: "sm-hidden",
            children: ["More Demo Templates", "  ", /*#__PURE__*/jsxRuntime.jsx("span", {
              style: {
                fontFamily: fontFamily.serif
              },
              children: "\u2192"
            })]
          }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSpacer, {
            height: spacing.s3,
            cssClass: "lg-hidden"
          }), /*#__PURE__*/jsxRuntime.jsxs(Button, {
            href: "https://github.com/sofn-xyz/mailing-templates",
            backgroundColor: colors.green300,
            align: "right",
            cssClass: "lg-hidden",
            children: ["More Demo Templates", "  ", /*#__PURE__*/jsxRuntime.jsx("span", {
              style: {
                fontFamily: fontFamily.serif
              },
              children: "\u2192"
            })]
          })]
        })
      }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSection, {
        paddingBottom: spacing.s11,
        cssClass: "gutter",
        children: /*#__PURE__*/jsxRuntime.jsxs(mjmlReact.MjmlColumn, {
          children: [/*#__PURE__*/jsxRuntime.jsxs(Heading, {
            cssClass: "h2",
            paddingBottom: spacing.s6,
            children: [/*#__PURE__*/jsxRuntime.jsx("span", {
              style: {
                color: colors.blue
              },
              children: "\u25CF"
            }), " Analytics and unsubscribe"]
          }), /*#__PURE__*/jsxRuntime.jsx(Text, {
            cssClass: "p",
            paddingBottom: spacing.s7,
            children: "Mailing Platform gives you analytics and drop-in unsubscribe links + subscription preferences, so your users can control what email they receive. When you try to send an email to an unsubscribed user, Mailing will intelligently block the send."
          }), /*#__PURE__*/jsxRuntime.jsxs(Button, {
            href: "https://mailing.run/docs",
            align: "left",
            backgroundColor: colors.blue,
            cssClass: "sm-hidden",
            children: ["Check out the Docs", "  ", /*#__PURE__*/jsxRuntime.jsx("span", {
              style: {
                fontFamily: fontFamily.serif
              },
              children: "\u2192"
            })]
          }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSpacer, {
            height: spacing.s3,
            cssClass: "lg-hidden"
          }), /*#__PURE__*/jsxRuntime.jsxs(Button, {
            href: "https://mailing.run/docs",
            align: "right",
            backgroundColor: colors.blue,
            cssClass: "lg-hidden",
            children: ["Check out the Docs", "  ", /*#__PURE__*/jsxRuntime.jsx("span", {
              style: {
                fontFamily: fontFamily.serif
              },
              children: "\u2192"
            })]
          }), /*#__PURE__*/jsxRuntime.jsx(mjmlReact.MjmlSpacer, {
            height: spacing.s9
          })]
        })
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(Footer, {
      includeUnsubscribe: includeUnsubscribe
    })]
  });
};
Welcome.subject = "Thank you for installing Mailing :)";

function preview$1() {
  return /*#__PURE__*/jsxRuntime.jsx(Welcome, {
    includeUnsubscribe: true
  });
}

var WelcomePreview = /*#__PURE__*/Object.freeze({
  __proto__: null,
  preview: preview$1
});

/*
 * This file is only directly used in development and tests.
 * In production is it overwritten by the build process.
 */
var sendMail = sendMail$1;
var previews = {
  Welcome: WelcomePreview
};
var templates = {
  Welcome: Welcome
};
var config$1 = {
  anonymousId: null
};
var manifest = {
  sendMail: sendMail,
  config: config$1,
  templates: templates,
  previews: previews
};

function getConfig() {
  return config$1;
}

var POSTHOG_API_KEY = "phc_7ZFYSlHCG9Fo6a7do1BC4tUDx1DzuceaymIxZAfPUVg";

var client;
function postHogClient() {
  if (process.env.MM_E2E || process.env.CI || "test" ===         "production") return;
  if (undefined === client) {
    client = new posthogNode.PostHog(POSTHOG_API_KEY, {
      host: "https://app.posthog.com"
    });
  }
  return client;
}

// readonly version of postHogClient
function getPostHogClient() {
  return client;
}

var MAILING_VERSION = "0.9.13";

// ** modified from posthog-node

function capture(options) {
  var _postHogClient;
  var config = getConfig();
  debug("options.distinctId was ".concat(options.distinctId, " and config.anonymousId was ").concat(config.anonymousId, " and getGeneratedAnonymousId() returned ").concat(getGeneratedAnonymousId()));
  var distinctId = options.distinctId || config.anonymousId || getGeneratedAnonymousId();
  if (!distinctId) {
    debug("capture is returning early because distinctId was ".concat(distinctId));
    return;
  }
  var captureOpts = _objectSpread2(_objectSpread2({}, options), {}, {
    distinctId: distinctId,
    properties: _objectSpread2({
      mailing_version: MAILING_VERSION
    }, options.properties)
  });
  debug("calling capture with ".concat(JSON.stringify(captureOpts)));
  if (process.env.MM_DEV) {
    debug("returning early from capture because MM_DEV is set");
    return;
  }
  return (_postHogClient = postHogClient()) === null || _postHogClient === void 0 ? void 0 : _postHogClient.capture(captureOpts);
}
function shutdown() {
  return _shutdown.apply(this, arguments);
}
function _shutdown() {
  _shutdown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var client;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = getPostHogClient();
            if (!client) {
              _context.next = 13;
              break;
            }
            debug("calling postHog shutdown");
            _context.prev = 3;
            _context.next = 6;
            return client.shutdownAsync();
          case 6:
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            debug("error shutting down postHog client: ".concat(_context.t0));
          case 11:
            _context.next = 14;
            break;
          case 13:
            debug("skipping postHog client shutdown because it was never instantiated");
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 8]]);
  }));
  return _shutdown.apply(this, arguments);
}

function buildHandler(handler, options) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
      var captureOpts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (fsExtra.existsSync("./package.json")) {
                _context.next = 4;
                break;
              }
              log("No package.json found. Please run from the project root.");
              return _context.abrupt("return");
            case 4:
              if (argv.emailsDir) {
                _context.next = 6;
                break;
              }
              throw new Error("emailsDir option is not set");
            case 6:
              setConfig({
                emailsDir: argv.emailsDir,
                port: argv.port,
                quiet: argv.quiet
              });
              writeDefaultConfigFile();
              if (options.captureOptions) {
                captureOpts = _objectSpread2({
                  distinctId: argv.anonymousId
                }, options.captureOptions(argv));
                if (!captureOpts.properties) captureOpts.properties = {};
                captureOpts.properties.nodeEnv = process.env.NODE_ENV;
                capture(captureOpts);
              }
              _context.next = 11;
              return handler(argv);
            case 11:
              _context.prev = 11;
              _context.next = 14;
              return shutdown();
            case 14:
              return _context.finish(11);
            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 11, 15]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function renderNotFound(res) {
  res.writeHead(404);
  res.end("Not found");
}

var cache = {
  mock: {
    id: "mock",
    html: "<html><body><h1>Title</h1>hope it's not too strict</body></html>",
    to: "peter s. <peter+mailingtest@campsh.com>",
    cc: "monica+mailingtest@campsh.com",
    from: "peter+sendgrid@campsh.com",
    subject: "A mocked test email"
  }
};
function createIntercept(req, res) {
  var body = "";
  req.on("data", function onData(data) {
    body += data;
    if (body.length > 1e8) req.destroy();
  });
  req.on("end", function onEnd() {
    var id = crypto.randomUUID();
    cache[id] = _objectSpread2(_objectSpread2({}, JSON.parse(body)), {}, {
      id: id
    });
    res.writeHead(201);
    res.end(JSON.stringify({
      id: id
    }));
    log("Cached intercept preview at /previews/".concat(id));
  });
}
function showIntercept(req, res) {
  var _req$url;
  var parts = (_req$url = req.url) === null || _req$url === void 0 ? void 0 : _req$url.split("/");
  var id = parts ? parts[parts.length - 1].split(".")[0] : "";
  var data = cache[id];
  if (data) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var intercept = _objectSpread2({}, data);
    res.end(JSON.stringify(intercept));
  } else {
    renderNotFound(res);
  }
}

/* eslint-disable @typescript-eslint/no-var-requires */
function registerRequireHooks() {
  if (process.env.MM_DEV) return;
  require("esbuild-register/dist/node").register({
    jsx: "automatic",
    target: "node14"
  });
}

// traversing up from startPath to the root, for each directory append a "node_modules" directory
function getNodeModulesDirsFrom(startPath) {
  var nodeModulesDirs = [];
  var pathDepth = path.resolve(startPath).split(path.sep).length;
  var i = pathDepth;
  do {
    nodeModulesDirs.push(path.resolve(path.join(startPath, "..".concat(path.sep).repeat(i - 1), "node_modules", "*")));
  } while (--i);
  return nodeModulesDirs;
}

// The Linter: define linting rules here
function ensureMatchingNamedExports() {
  return _ensureMatchingNamedExports.apply(this, arguments);
}
function _ensureMatchingNamedExports() {
  _ensureMatchingNamedExports = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var errors, templates, _i, _Object$keys, templateName, template;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // For analytics we want template components to be named
            // correctly. This catches a common mistake of naming them
            // different from the file they're in which indicates that
            // a naming mistake has been made.
            errors = [];
            templates = manifest.templates;
            for (_i = 0, _Object$keys = Object.keys(templates); _i < _Object$keys.length; _i++) {
              templateName = _Object$keys[_i];
              template = templates[templateName];
              if (template.name !== templateName) {
                errors.push(["Template ".concat(templateName, " has no matching default export."), "Found default export ".concat(template.name, " but both the file"), "and default export component should have the same name.", "This name will be used by mailing for analytics."].join("\n"));
              }
            }
            return _context.abrupt("return", errors);
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ensureMatchingNamedExports.apply(this, arguments);
}
function lintEmailsDirectory(_x) {
  return _lintEmailsDirectory.apply(this, arguments);
}
function _lintEmailsDirectory() {
  _lintEmailsDirectory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(emailsDir) {
    var linters, errors, errorDescriptions;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log("linting templates in ".concat(emailsDir, "..."));

            // run linters async
            linters = [ensureMatchingNamedExports()];
            _context2.t0 = lodash.flatten;
            _context2.next = 5;
            return Promise.all(linters);
          case 5:
            _context2.t1 = _context2.sent;
            errors = (0, _context2.t0)(_context2.t1);
            // log errors after all linters run
            if (errors.length > 0) {
              errorDescriptions = errors.map(function (e, i) {
                return "".concat(i + 1, ". ").concat(e, "\n\n");
              }).join("");
              error("".concat(errors.length, " lint error").concat(errors.length > 1 ? "s" : "", "\n\n").concat(errorDescriptions));
              process.exit(1);
            }
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _lintEmailsDirectory.apply(this, arguments);
}

var COMPONENT_FILE_REGEXP = /^[^\s]+\.[tj]sx$/; // no spaces, .jsx or .tsx
var DOT_MAILING_IGNORE_REGEXP = /__test__|__integration__|generator_templates|yarn-error.log|src\/index\.ts$|src\/dev\.js$|\.mailing$|\.next|node_modules$|^cypress/;
function linkEmailsDirectory(_x) {
  return _linkEmailsDirectory.apply(this, arguments);
}
function _linkEmailsDirectory() {
  _linkEmailsDirectory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(emailsDir) {
    var dotMailingSrcPath, dynManifestPath, dynFeManifestPath, feManifest, previewsPath, previewCollections, uniquePreviewCollections, previewImports, previewConsts, relativePathToEmailsDir, indexFound, emailsDirContents, templates, uniqueTemplates, templateImports, templateModuleNames, moduleManifestTemplate, moduleManifestContents;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dotMailingSrcPath = ".mailing/src";
            dynManifestPath = dotMailingSrcPath + "/moduleManifest.ts";
            dynFeManifestPath = dotMailingSrcPath + "/feManifest.ts";
            feManifest = writeFrontendManifest(dynFeManifestPath);
            previewsPath = emailsDir + "/previews";
            _context.next = 7;
            return fsExtra.readdir(previewsPath);
          case 7:
            previewCollections = _context.sent.filter(function (path) {
              return COMPONENT_FILE_REGEXP.test(path);
            });
            log("scanning for previews at", previewsPath, previewCollections);
            uniquePreviewCollections = Array.from(new Set(previewCollections));
            previewImports = [];
            previewConsts = []; // calculate the relative path the user's emailsDir
            // so we can import templates and previews from there
            // when in the context of the build output
            relativePathToEmailsDir = path.posix.relative(dotMailingSrcPath, emailsDir);
            uniquePreviewCollections.forEach(function (p) {
              var fileName = p.replace(/\.[jt]sx/g, "");
              var previewModuleName = "".concat(lodash.camelCase(fileName), "Preview");
              previewImports.push("import * as ".concat(previewModuleName, " from \"").concat(relativePathToEmailsDir + "/previews/" + fileName, "\";"));
              previewConsts.push("\"".concat(fileName, "\": ").concat(previewModuleName));
            });
            indexFound = false;
            _context.next = 17;
            return fsExtra.readdir(emailsDir);
          case 17:
            emailsDirContents = _context.sent;
            templates = emailsDirContents.filter(function (path) {
              if (/^index\.[jt]sx?$/.test(path)) {
                indexFound = true; // index.ts, index.js
                return false;
              }
              return COMPONENT_FILE_REGEXP.test(path);
            });
            if (indexFound) {
              _context.next = 21;
              break;
            }
            throw new Error("index.ts or index.js not found in emails directory");
          case 21:
            uniqueTemplates = Array.from(new Set(templates));
            templateImports = [];
            templateModuleNames = [];
            uniqueTemplates.forEach(function (p) {
              var fileName = p.replace(/\.[jt]sx/g, "");
              var moduleName = lodash.camelCase(fileName);
              templateModuleNames.push("\"".concat(fileName, "\": ").concat(moduleName));
              templateImports.push("import ".concat(moduleName, " from \"").concat(relativePathToEmailsDir + "/" + fileName, "\";"));
            });
            _context.t0 = lodash.template;
            _context.next = 28;
            return fsExtra.readFile(".mailing/src/commands/preview/server/templates/moduleManifest.template.ejs");
          case 28:
            _context.t1 = _context.sent.toString();
            moduleManifestTemplate = (0, _context.t0)(_context.t1);
            moduleManifestContents = moduleManifestTemplate({
              relativePathToEmailsDir: relativePathToEmailsDir,
              templateImports: templateImports,
              previewImports: previewImports,
              previewConsts: previewConsts,
              templateModuleNames: templateModuleNames
            });
            _context.next = 33;
            return fsExtra.writeFile(dynManifestPath, moduleManifestContents);
          case 33:
            debug("writing module manifest to", dynManifestPath);

            // build the module manifests
            _context.next = 36;
            return buildManifest("node", dynManifestPath);
          case 36:
            _context.next = 38;
            return lintEmailsDirectory(emailsDir);
          case 38:
            _context.next = 40;
            return feManifest;
          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _linkEmailsDirectory.apply(this, arguments);
}
function packageJsonVersionsMatch() {
  return _packageJsonVersionsMatch.apply(this, arguments);
}
function _packageJsonVersionsMatch() {
  _packageJsonVersionsMatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var mailingPackageJsonPath, mailingPackageJsonVersion, pkgJSON, cliPackageJsonVersion;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mailingPackageJsonPath = "./.mailing/package.json";
            _context2.prev = 1;
            pkgJSON = fsExtra.readJSONSync(mailingPackageJsonPath);
            mailingPackageJsonVersion = pkgJSON.version;
            debug(".mailing version:\t", mailingPackageJsonVersion);
            _context2.next = 14;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            if (!("ENOENT" === (_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.code))) {
              _context2.next = 13;
              break;
            }
            return _context2.abrupt("return", false);
          case 13:
            throw _context2.t0;
          case 14:
            cliPackageJsonVersion = child_process.execSync("npx mailing --version").toString().trim();
            debug("cli version:\t\t", cliPackageJsonVersion);

            // compare versions and return early if the same
            return _context2.abrupt("return", cliPackageJsonVersion === mailingPackageJsonVersion);
          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return _packageJsonVersionsMatch.apply(this, arguments);
}
function bootstrapMailingDir() {
  return _bootstrapMailingDir.apply(this, arguments);
}
function _bootstrapMailingDir() {
  _bootstrapMailingDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var mailingPath, nodeMailingPath, tmpDir, ignored;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mailingPath = "./.mailing"; // return early if .mailing exists and version matches packages.json
            _context3.next = 3;
            return packageJsonVersionsMatch();
          case 3:
            if (!_context3.sent) {
              _context3.next = 6;
              break;
            }
            debug("versions match, returning");
            return _context3.abrupt("return");
          case 6:
            // copy node_modules mailing into .mailing
            nodeMailingPath = path.resolve(process.env.MM_DEV ? __dirname + "/../../../.." : __dirname + "/..");
            debug("versions do not match, copying .mailing from", nodeMailingPath);
            _context3.next = 10;
            return fsExtra.rm(mailingPath, {
              recursive: true,
              force: true
            });
          case 10:
            if (!process.env.MM_DEV) {
              _context3.next = 18;
              break;
            }
            // copy directory contents via a temp directory intermediary
            // so that it works in packages/cli, otherwise there will be an
            // error because .mailing is in the dir being copied
            tmpDir = path.join(os.tmpdir(), "mailing".concat(Date.now()));
            _context3.next = 14;
            return fsExtra.copy(nodeMailingPath, tmpDir, {
              recursive: true,
              dereference: true,
              overwrite: true,
              filter: function filter(path) {
                return !DOT_MAILING_IGNORE_REGEXP.test(path);
              }
            });
          case 14:
            _context3.next = 16;
            return fsExtra.move(tmpDir, mailingPath);
          case 16:
            _context3.next = 22;
            break;
          case 18:
            _context3.next = 20;
            return fsExtra.mkdir(mailingPath, {
              recursive: true
            });
          case 20:
            _context3.next = 22;
            return fsExtra.copy(nodeMailingPath, mailingPath, {
              recursive: true,
              dereference: true,
              overwrite: true,
              filter: function filter(path) {
                return !DOT_MAILING_IGNORE_REGEXP.test(path);
              }
            });
          case 22:
            _context3.next = 24;
            return fsExtra.rm(mailingPath + "/src/emails", {
              recursive: true,
              force: true
            });
          case 24:
            _context3.prev = 24;
            _context3.next = 27;
            return fsExtra.readFile(".gitignore");
          case 27:
            ignored = _context3.sent.toString().split("\n");
            if (!ignored.includes(".mailing")) {
              _context3.next = 30;
              break;
            }
            return _context3.abrupt("return");
          case 30:
            log("adding .mailing to .gitignore");
            _context3.next = 33;
            return fsExtra.appendFile(".gitignore", "\n.mailing\n");
          case 33:
            _context3.next = 44;
            break;
          case 35:
            _context3.prev = 35;
            _context3.t0 = _context3["catch"](24);
            if (!("ENOENT" === (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.code))) {
              _context3.next = 43;
              break;
            }
            log("adding .gitignore");
            _context3.next = 41;
            return fsExtra.writeFile(".gitignore", ".mailing\nnode_modules\n", {
              flag: "wx"
            });
          case 41:
            _context3.next = 44;
            break;
          case 43:
            throw _context3.t0;
          case 44:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[24, 35]]);
  }));
  return _bootstrapMailingDir.apply(this, arguments);
}
function buildManifest(_x2, _x3) {
  return _buildManifest.apply(this, arguments);
}
function _buildManifest() {
  _buildManifest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(buildType, manifestPath) {
    var buildOutdir, buildOpts;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            buildOutdir = ".mailing/src";
            buildOpts = {
              entryPoints: [manifestPath],
              outdir: buildOutdir,
              write: true,
              bundle: true,
              format: "esm",
              jsx: "preserve",
              external: getNodeModulesDirsFrom(".")
            };
            if ("node" === buildType) {
              buildOpts.platform = "node";
              buildOpts.target = "node12";
            } else {
              buildOpts.platform = "browser";
              buildOpts.target = "esnext";
            }
            debug("invoking esbuild with buildOpts: ", JSON.stringify(buildOpts));

            // build the manifest
            debug("bundling ".concat(buildType, " manifest for ").concat(manifestPath, "..."));
            _context4.next = 7;
            return esbuild.build(buildOpts);
          case 7:
            _context4.next = 9;
            return fsExtra.remove(manifestPath);
          case 9:
            delete require.cache[manifestPath];
            debug("bundled ".concat(buildType, " manifest for ").concat(manifestPath, " to ").concat(buildOutdir));
          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _buildManifest.apply(this, arguments);
}
function writeFrontendManifest(_x4) {
  return _writeFrontendManifest.apply(this, arguments);
}
function _writeFrontendManifest() {
  _writeFrontendManifest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(toPath) {
    var feManifestContents;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fsExtra.readFile(".mailing/src/commands/preview/server/templates/feModuleManifest.template.ejs");
          case 2:
            feManifestContents = _context5.sent.toString();
            _context5.next = 5;
            return fsExtra.writeFile(toPath, feManifestContents);
          case 5:
            _context5.next = 7;
            return buildManifest("browser", toPath);
          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _writeFrontendManifest.apply(this, arguments);
}

var WATCH_IGNORE = /^\.|node_modules/;
function startChangeWatcher(server, emailsDir) {
  try {
    // simple live reload implementation
    var changeWatchPath = emailsDir;
    if (!changeWatchPath) {
      log("error finding emails dir in . or ./src");
      return;
    }
    var clients = [];
    var io = new socket_io.Server(server);
    io.on("connection", function (client) {
      clients.push(client);
      client.on("disconnect", function () {
        clients = clients.filter(function (item) {
          return item !== client;
        });
      });
    });
    var reload = lodash.debounce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              debug("reload from change");
              _context.next = 3;
              return linkEmailsDirectory(emailsDir);
            case 3:
              _context.next = 5;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 150);
              });
            case 5:
              clients.forEach(function (client) {
                client.emit("reload");
              });
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 100, {
      leading: true
    });
    chokidar.watch(changeWatchPath, {
      ignoreInitial: true
    }).on("all", function (eventType, filename) {
      if (WATCH_IGNORE.test(filename)) return;
      log("detected ".concat(eventType, " on ").concat(filename, ", reloading"));
      delete require.cache[path.resolve(changeWatchPath, filename)];
      void reload();
    });
    log("watching for changes to ".concat(path.relative(process$1.cwd(), changeWatchPath)));
  } catch (e) {
    error("error starting livereload change watcher", e);
  }
}

function startPreviewServer() {
  return _startPreviewServer.apply(this, arguments);
}
function _startPreviewServer() {
  _startPreviewServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var _process$env;
    var _getConfig, emailsDir, port, quiet, emailsDirExists, previewsPath, loadLag, hostname, app, nextHandle, host, currentUrl, server;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getConfig = getConfig$1(), emailsDir = _getConfig.emailsDir, port = _getConfig.port, quiet = _getConfig.quiet;
            _context4.next = 3;
            return fsExtra.pathExists(emailsDir);
          case 3:
            emailsDirExists = _context4.sent;
            if (emailsDirExists) {
              _context4.next = 6;
              break;
            }
            throw new Error("emailsDir does not exist in ".concat(path.resolve(emailsDir)));
          case 6:
            previewsPath = getPreviewsDirectory(emailsDir);
            if (previewsPath) {
              _context4.next = 9;
              break;
            }
            throw new Error("previews directory does not exist in ".concat(path.resolve(emailsDir)));
          case 9:
            // delaying this makes the load feel faster
            loadLag = setTimeout(function () {
              log("starting preview server");
            }, 500);
            registerRequireHooks();
            _context4.next = 13;
            return bootstrapMailingDir();
          case 13:
            _context4.next = 15;
            return linkEmailsDirectory(emailsDir);
          case 15:
            hostname = "localhost";
            (_process$env = process.env).NEXT_PUBLIC_MAILING_SKIP_AUTH || (_process$env.NEXT_PUBLIC_MAILING_SKIP_AUTH = "true");
            app = next__default["default"]({
              dev: true,
              // true will use the app from source, not built .next bundle
              hostname: hostname,
              port: port,
              dir: process.env.MM_DEV ? path.resolve(__dirname, "../../../../") : path.resolve("./.mailing")
            });
            nextHandle = app.getRequestHandler();
            _context4.next = 21;
            return app.prepare();
          case 21:
            debug("prepared next server");
            if (previewsPath) {
              _context4.next = 25;
              break;
            }
            error("could not find emails directory\nhave you initialized the project with `mailing init`?");
            return _context4.abrupt("return");
          case 25:
            host = "http://".concat(hostname, ":").concat(port);
            currentUrl = "".concat(host, "/");
            server = http__default["default"].createServer( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
                var startTime, noLog, parsedUrl, pathname, query, emailsPath, path$1;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        startTime = Date.now();
                        noLog = false;
                        if (req.url) {
                          _context.next = 5;
                          break;
                        }
                        res.end(404);
                        return _context.abrupt("return");
                      case 5:
                        parsedUrl = url.parse(req.url, true);
                        pathname = parsedUrl.pathname, query = parsedUrl.query; // Never cache anything
                        res.setHeader("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store");
                        res.setHeader("Pragma", "no-cache");
                        res.setHeader("Expires", "-1");
                        emailsPath = path.resolve(previewsPath, "..");
                        for (path$1 in require.cache) {
                          if (path$1.startsWith(emailsPath)) {
                            delete require.cache[path$1];
                          }
                        }
                        currentUrl = "".concat(host).concat(req.url);
                        res.once("close", function () {
                          if (!noLog || process.env.MM_VERBOSE) log("".concat(res.statusCode, " ").concat(req.url, " ").concat(Date.now() - startTime, "ms"));
                        });
                        _context.prev = 14;
                        if (!(req.url === "/intercepts" && req.method === "POST")) {
                          _context.next = 19;
                          break;
                        }
                        createIntercept(req, res);
                        _context.next = 31;
                        break;
                      case 19:
                        if (!/^\/intercepts\/[a-f0-9-]+\.json/.test(req.url)) {
                          _context.next = 23;
                          break;
                        }
                        showIntercept(req, res);
                        _context.next = 31;
                        break;
                      case 23:
                        if (!/^\/_+next/.test(req.url)) {
                          _context.next = 29;
                          break;
                        }
                        noLog = true;
                        _context.next = 27;
                        return app.render(req, res, "".concat(pathname), query);
                      case 27:
                        _context.next = 31;
                        break;
                      case 29:
                        _context.next = 31;
                        return nextHandle(req, res, parsedUrl);
                      case 31:
                        _context.next = 39;
                        break;
                      case 33:
                        _context.prev = 33;
                        _context.t0 = _context["catch"](14);
                        error("caught error", _context.t0);
                        res.writeHead(500);
                        res.end(JSON.stringify(_context.t0));
                        return _context.abrupt("return");
                      case 39:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[14, 33]]);
              }));
              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }()).listen(port, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      clearTimeout(loadLag);
                      log("running preview at ".concat(currentUrl));
                      if (!(!quiet && !process.env.MAILING_INTEGRATION_TEST)) {
                        _context2.next = 5;
                        break;
                      }
                      _context2.next = 5;
                      return open__default["default"](currentUrl);
                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))).on("error", /*#__PURE__*/function () {
              var _onServerError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(e.code === "EADDRINUSE")) {
                          _context3.next = 7;
                          break;
                        }
                        error("port ".concat(port, " is taken, is mailing already running?"));
                        _context3.next = 4;
                        return shutdown();
                      case 4:
                        process.exit(1);
                        _context3.next = 8;
                        break;
                      case 7:
                        error("preview server error:", JSON.stringify(e));
                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
              function onServerError(_x3) {
                return _onServerError.apply(this, arguments);
              }
              return onServerError;
            }());
            startChangeWatcher(server, emailsDir);
            return _context4.abrupt("return", server);
          case 30:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _startPreviewServer.apply(this, arguments);
}

var command$3 = "preview";
var describe$3 = "start the email preview server";
var builder$3 = {
  port: {
    "default": defaults().port,
    description: "what port to start the preview server on"
  },
  quiet: {
    "default": defaults().quiet,
    description: "quiet mode (don't open browser after starting)",
    "boolean": true
  },
  "emails-dir": {
    "default": defaults().emailsDir,
    description: "the directory of your email templates"
  }
};
var handler$3 = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(undefined === argv.port)) {
              _context.next = 2;
              break;
            }
            throw new Error("port option is not set");
          case 2:
            if (!(undefined === argv.quiet)) {
              _context.next = 4;
              break;
            }
            throw new Error("quiet option is not set");
          case 4:
            _context.next = 6;
            return startPreviewServer();
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions() {
    return {
      event: "preview invoked"
    };
  }
});

var preview = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command$3,
  describe: describe$3,
  builder: builder$3,
  handler: handler$3
});

var command$2 = ["$0", "init"];
var describe$2 = "initialize mailing in your app";
var builder$2 = {
  typescript: {
    "default": defaults().typescript,
    description: "use Typescript",
    demandOption: true,
    "boolean": true
  },
  "emails-dir": {
    "default": defaults().emailsDir,
    demandOption: true,
    description: "the directory to put your email templates in"
  },
  port: {
    "default": defaults().port,
    demandOption: true,
    description: "what port to start the preview server on"
  },
  quiet: {
    "default": defaults().quiet,
    demandOption: true,
    description: "quiet mode (don't prompt or open browser after starting)",
    "boolean": true
  },
  "scaffold-only": {
    "default": defaults().scaffoldOnly,
    demandOption: true,
    description: "don't start the preview server",
    "boolean": true
  }
};
var handler$2 = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
    var options, emailResponse, email, url, previewHandlerArgv;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof argv.port !== "number")) {
              _context.next = 2;
              break;
            }
            throw new Error("port option is not set");
          case 2:
            if (!(typeof argv.typescript !== "boolean")) {
              _context.next = 4;
              break;
            }
            throw new Error("typescript option not set");
          case 4:
            if (!(undefined === argv.emailsDir)) {
              _context.next = 6;
              break;
            }
            throw new Error("emailsDir option not set");
          case 6:
            if (!fsExtra.existsSync(path.resolve(argv.emailsDir, "previews"))) {
              _context.next = 10;
              break;
            }
            log("Using emails directory", argv.emailsDir);
            _context.next = 21;
            break;
          case 10:
            options = {
              isTypescript: argv.typescript,
              emailsDir: argv.emailsDir
            };
            _context.next = 13;
            return generateEmailsDirectory(options);
          case 13:
            if (!argv.scaffoldOnly) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("return");
          case 15:
            if (argv.quiet) {
              _context.next = 21;
              break;
            }
            _context.next = 18;
            return prompts__default["default"]({
              type: "text",
              name: "email",
              message: "enter your email for occasional updates about mailing (optional)"
            });
          case 18:
            emailResponse = _context.sent;
            email = emailResponse.email;
            if ((email === null || email === void 0 ? void 0 : email.length) > 0) {
              log("great, talk soon");
              try {
                url = "".concat(getMailingAPIBaseURL(), "/api/newsletterSubscribers");
                void fetch__default["default"](url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    email: email
                  })
                });
              } catch (e) {
                error(e);
              }
            } else {
              log("ok, no problem");
            }
          case 21:
            previewHandlerArgv = {
              port: argv.port,
              quiet: argv.quiet,
              emailsDir: argv.emailsDir,
              anonymousId: argv.anonymousId,
              $0: argv.$0,
              _: argv._
            };
            _context.next = 24;
            return handler$3(previewHandlerArgv);
          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions() {
    return {
      event: "init invoked"
    };
  }
});

var init = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command$2,
  describe: describe$2,
  builder: builder$2,
  handler: handler$2
});

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function lintHtml(html) {
  var lint = [];

  // lint img tags
  var root = nodeHtmlParser.parse(html);
  var images = root.querySelectorAll("img");
  var _iterator = _createForOfIteratorHelper(images),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var image = _step.value;
      var src = image.getAttribute("src");
      if (!src) continue;
      if (src.startsWith("http://localhost")) {
        lint.push({
          message: "image src \"".concat(src, "\" uses localhost")
        });
      } else if (src !== null && src !== void 0 && src.startsWith("/")) {
        lint.push({
          message: "image src \"".concat(src, "\" is relative but must be absolute")
        });
      }
    }

    // lint a tags
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var links = root.querySelectorAll("a");
  var _iterator2 = _createForOfIteratorHelper(links),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var link = _step2.value;
      var href = link.getAttribute("href");
      if (href !== null && href !== void 0 && href.startsWith("http://localhost")) {
        lint.push({
          message: "link with href \"".concat(href, "\" and text \"").concat(link.rawText.trim(), "\" uses localhost")
        });
      } else if (href !== null && href !== void 0 && href.startsWith("/")) {
        lint.push({
          message: "link with href \"".concat(href, "\" and text \"").concat(link.rawText.trim(), "\" is relative but must be absolute")
        });
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return lint;
}
function render(component) {
  var _mjRender = mjmlReact.render(component),
    html = _mjRender.html,
    errors = _mjRender.errors;
  var htmlLint = lintHtml(html);
  return {
    html: html,
    errors: errors,
    htmlLint: htmlLint
  };
}

var command$1 = "export-previews";
var builder$1 = {
  "emails-dir": {
    "default": defaults().emailsDir,
    description: "the directory of your email templates"
  },
  "out-dir": {
    "default": defaults().outDir,
    description: "directory in which we output the html"
  },
  minify: {
    "default": false,
    "boolean": true,
    description: "minify the html"
  },
  quiet: {
    "default": defaults().quiet,
    descriptioin: "less output",
    "boolean": true
  },
  "skip-lint": {
    "default": false,
    "boolean": true,
    description: "skip linting"
  }
};
var describe$1 = "export previews as html";
function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, function (letter) {
    return "_".concat(letter.toLowerCase());
  }).replace(/^_/, "");
}
function previewFilename(moduleName, functionName) {
  return camelToSnakeCase("".concat(moduleName.replace(/\.[j|t]sx/, ""), "_").concat(functionName, ".html"));
}
var handler$1 = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(argv) {
    var outDir, previewsPath, previewText, count, lint, toWrite, filenames, previewRenders, lintCount, _iterator, _step, f;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (argv.outDir) {
              _context3.next = 2;
              break;
            }
            throw new Error("outDir option is not set");
          case 2:
            outDir = argv.outDir;
            if (!(typeof outDir !== "string")) {
              _context3.next = 6;
              break;
            }
            error("please specify an outDir like --outDir ./html");
            return _context3.abrupt("return");
          case 6:
            if (!(undefined === argv.emailsDir)) {
              _context3.next = 9;
              break;
            }
            error("please specific an emailsDir like --emailsDir ./emails");
            return _context3.abrupt("return");
          case 9:
            previewsPath = getPreviewsDirectory(argv.emailsDir);
            if (previewsPath) {
              _context3.next = 13;
              break;
            }
            error("Could not find emails directory. Have you initialized the project with `mailing init`?");
            return _context3.abrupt("return");
          case 13:
            registerRequireHooks();
            previewText = argv.minify ? "minified preview html" : "preview html";
            count = 0;
            lint = {};
            toWrite = [];
            filenames = [];
            previewRenders = fsExtra.readdirSync(previewsPath).filter(function (path) {
              return !/^\./.test(path);
            }).flatMap(function (p) {
              var previewPath = path.resolve(previewsPath, p);
              var previewModule = require(previewPath);
              return Object.keys(require(previewPath)).flatMap( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(previewFunction) {
                  var filename, _render, html, errors, htmlLint, minifyConfig, outHtml;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          filename = previewFilename(p, previewFunction);
                          count++;
                          _context2.t0 = render;
                          _context2.next = 5;
                          return previewModule[previewFunction]();
                        case 5:
                          _context2.t1 = _context2.sent;
                          _render = (0, _context2.t0)(_context2.t1);
                          html = _render.html;
                          errors = _render.errors;
                          htmlLint = _render.htmlLint;
                          if (errors.length) {
                            error("MJML errors rendering ".concat(filename, ":"), errors);
                          }
                          if (htmlLint.length && !argv.skipLint) {
                            lint[filename] = htmlLint;
                          }
                          minifyConfig = {
                            collapseWhitespace: true,
                            minifyCSS: false,
                            caseSensitive: true,
                            removeEmptyAttributes: true
                          };
                          if (!argv.minify) {
                            _context2.next = 19;
                            break;
                          }
                          _context2.next = 16;
                          return htmlMinifierTerser.minify(html, minifyConfig);
                        case 16:
                          _context2.t2 = _context2.sent;
                          _context2.next = 20;
                          break;
                        case 19:
                          _context2.t2 = html;
                        case 20:
                          outHtml = _context2.t2;
                          filenames.push(filename);
                          toWrite.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                            return _regeneratorRuntime().wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    return _context.abrupt("return", fsExtra.outputFile(path.resolve(outDir, filename), outHtml));
                                  case 1:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          })));
                        case 23:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });
            _context3.next = 22;
            return Promise.all(previewRenders);
          case 22:
            lintCount = Object.keys(lint).length;
            if (!lintCount) {
              _context3.next = 26;
              break;
            }
            error(lintCount > 1 ? "Aborted because ".concat(lintCount, " files have lint errors:") : "Aborted because 1 file has lint errors:", "\n\n", Object.entries(lint).map(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                filename = _ref5[0],
                errors = _ref5[1];
              return "".concat(filename, "\n").concat(errors.map(function (e, i) {
                return "   ".concat(i + 1, ". ").concat(e.message);
              }).join("\n\n"));
            }).join("\n\n"), "\n\n");
            return _context3.abrupt("return");
          case 26:
            log("Exporting ".concat(previewText, " to"));
            log("".concat(outDir, "/"));
            _context3.next = 30;
            return Promise.all(toWrite.map(function (f) {
              return f();
            }));
          case 30:
            _iterator = _createForOfIteratorHelper(filenames.sort());
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                f = _step.value;
                log("  |-- ".concat(f));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            log("\u2705 Processed ".concat(count, " previews\n"));
          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions() {
    return {
      event: "export-previews invoked"
    };
  }
});

var exportPreviews = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command$1,
  builder: builder$1,
  describe: describe$1,
  previewFilename: previewFilename,
  handler: handler$1
});

var command = ["server [subcommand]"];
var describe = "build and start the mailing server";
var builder = {
  subcommand: {
    describe: "'build' or 'start', blank does both"
  },
  "emails-dir": {
    "default": defaults().emailsDir,
    description: "the directory to look for your email templates in"
  },
  port: {
    "default": defaults().port,
    description: "what port to start the preview server on"
  },
  quiet: {
    "default": defaults().quiet,
    descriptioin: "quiet mode (don't prompt or open browser after starting)",
    "boolean": true
  }
};
var handler = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
    var shouldStart, shouldBuild;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(undefined === argv.port)) {
              _context.next = 2;
              break;
            }
            throw new Error("port option is not set");
          case 2:
            if (!(undefined === argv.quiet)) {
              _context.next = 4;
              break;
            }
            throw new Error("quiet option is not set");
          case 4:
            if (!(undefined === argv.emailsDir)) {
              _context.next = 6;
              break;
            }
            throw new Error("emailsDir option is not set");
          case 6:
            log("bootstrapping your Mailing server in .mailing...");
            _context.next = 9;
            return bootstrapMailingDir();
          case 9:
            _context.next = 11;
            return linkEmailsDirectory(argv.emailsDir);
          case 11:
            shouldStart = argv.subcommand === "start" || !argv.subcommand;
            shouldBuild = argv.subcommand === "build" || !argv.subcommand; // "build" subcommand + default
            if (shouldBuild) {
              log("building .mailing...");
              child_process.execSync("cd .mailing && npx prisma generate", {
                stdio: "inherit"
              });
              if (process.env.MAILING_DATABASE_URL) child_process.execSync("cd .mailing && npx prisma migrate deploy", {
                stdio: "inherit"
              });
              child_process.execSync("cd .mailing && npx next build", {
                stdio: "inherit"
              });
            }

            // "start" subcommand + default
            if (shouldStart) {
              log("starting .mailing...");
              child_process.execSync("npx next start .mailing", {
                stdio: "inherit"
              });
            }
          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions(argv) {
    return {
      event: "server invoked",
      properties: {
        subcommand: argv.subcommand
      }
    };
  }
});

var server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command,
  describe: describe,
  builder: builder,
  handler: handler
});

var config = fsExtra.existsSync(MAILING_CONFIG_FILE) ? readJSONverbose(MAILING_CONFIG_FILE) : {};

// prettier-ignore
void yargs__default["default"](process.argv.slice(2)).config(config).command(init).command(preview).command(exportPreviews).command(server).help().argv;
