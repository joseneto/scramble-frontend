["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/pool.js"],"~:js","goog.provide(\"goog.structs.Pool\");\ngoog.require(\"goog.Disposable\");\ngoog.require(\"goog.structs.Queue\");\ngoog.require(\"goog.structs.Set\");\ngoog.structs.Pool = function(opt_minCount, opt_maxCount) {\n  goog.Disposable.call(this);\n  this.minCount_ = opt_minCount || 0;\n  this.maxCount_ = opt_maxCount || 10;\n  if (this.minCount_ > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.freeQueue_ = new goog.structs.Queue;\n  this.inUseSet_ = new goog.structs.Set;\n  this.delay = 0;\n  this.lastAccess = null;\n  this.adjustForMinMax();\n};\ngoog.inherits(goog.structs.Pool, goog.Disposable);\ngoog.structs.Pool.ERROR_MIN_MAX_ = \"[goog.structs.Pool] Min can not be greater than max\";\ngoog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_ = \"[goog.structs.Pool] Objects not released\";\ngoog.structs.Pool.prototype.setMinimumCount = function(min) {\n  if (min > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.minCount_ = min;\n  this.adjustForMinMax();\n};\ngoog.structs.Pool.prototype.setMaximumCount = function(max) {\n  if (max < this.minCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.maxCount_ = max;\n  this.adjustForMinMax();\n};\ngoog.structs.Pool.prototype.setDelay = function(delay) {\n  this.delay = delay;\n};\ngoog.structs.Pool.prototype.getObject = function() {\n  var time = goog.now();\n  if (this.lastAccess != null && time - this.lastAccess < this.delay) {\n    return undefined;\n  }\n  var obj = this.removeFreeObject_();\n  if (obj) {\n    this.lastAccess = time;\n    this.inUseSet_.add(obj);\n  }\n  return obj;\n};\ngoog.structs.Pool.prototype.releaseObject = function(obj) {\n  if (this.inUseSet_.remove(obj)) {\n    this.addFreeObject(obj);\n    return true;\n  }\n  return false;\n};\ngoog.structs.Pool.prototype.removeFreeObject_ = function() {\n  var obj;\n  while (this.getFreeCount() > 0) {\n    obj = this.freeQueue_.dequeue();\n    if (!this.objectCanBeReused(obj)) {\n      this.adjustForMinMax();\n    } else {\n      break;\n    }\n  }\n  if (!obj && this.getCount() < this.maxCount_) {\n    obj = this.createObject();\n  }\n  return obj;\n};\ngoog.structs.Pool.prototype.addFreeObject = function(obj) {\n  this.inUseSet_.remove(obj);\n  if (this.objectCanBeReused(obj) && this.getCount() < this.maxCount_) {\n    this.freeQueue_.enqueue(obj);\n  } else {\n    this.disposeObject(obj);\n  }\n};\ngoog.structs.Pool.prototype.adjustForMinMax = function() {\n  var freeQueue = this.freeQueue_;\n  while (this.getCount() < this.minCount_) {\n    freeQueue.enqueue(this.createObject());\n  }\n  while (this.getCount() > this.maxCount_ && this.getFreeCount() > 0) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n};\ngoog.structs.Pool.prototype.createObject = function() {\n  return {};\n};\ngoog.structs.Pool.prototype.disposeObject = function(obj) {\n  if (typeof obj.dispose == \"function\") {\n    obj.dispose();\n  } else {\n    for (var i in obj) {\n      obj[i] = null;\n    }\n  }\n};\ngoog.structs.Pool.prototype.objectCanBeReused = function(obj) {\n  if (typeof obj.canBeReused == \"function\") {\n    return obj.canBeReused();\n  }\n  return true;\n};\ngoog.structs.Pool.prototype.contains = function(obj) {\n  return this.freeQueue_.contains(obj) || this.inUseSet_.contains(obj);\n};\ngoog.structs.Pool.prototype.getCount = function() {\n  return this.freeQueue_.getCount() + this.inUseSet_.getCount();\n};\ngoog.structs.Pool.prototype.getInUseCount = function() {\n  return this.inUseSet_.getCount();\n};\ngoog.structs.Pool.prototype.getFreeCount = function() {\n  return this.freeQueue_.getCount();\n};\ngoog.structs.Pool.prototype.isEmpty = function() {\n  return this.freeQueue_.isEmpty() && this.inUseSet_.isEmpty();\n};\ngoog.structs.Pool.prototype.disposeInternal = function() {\n  goog.structs.Pool.superClass_.disposeInternal.call(this);\n  if (this.getInUseCount() > 0) {\n    throw new Error(goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_);\n  }\n  delete this.inUseSet_;\n  var freeQueue = this.freeQueue_;\n  while (!freeQueue.isEmpty()) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n  delete this.freeQueue_;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Datastructure: Pool.\n *\n *\n * A generic class for handling pools of objects.\n * When an object is released, it is attempted to be reused.\n */\n\n\ngoog.provide('goog.structs.Pool');\n\ngoog.require('goog.Disposable');\ngoog.require('goog.structs.Queue');\ngoog.require('goog.structs.Set');\n\n\n\n/**\n * A generic pool class. If min is greater than max, an error is thrown.\n * @param {number=} opt_minCount Min. number of objects (Default: 0).\n * @param {number=} opt_maxCount Max. number of objects (Default: 10).\n * @constructor\n * @extends {goog.Disposable}\n * @template T\n */\ngoog.structs.Pool = function(opt_minCount, opt_maxCount) {\n  'use strict';\n  goog.Disposable.call(this);\n\n  /**\n   * Minimum number of objects allowed\n   * @private {number}\n   */\n  this.minCount_ = opt_minCount || 0;\n\n  /**\n   * Maximum number of objects allowed\n   * @private {number}\n   */\n  this.maxCount_ = opt_maxCount || 10;\n\n  // Make sure that the max and min constraints are valid.\n  if (this.minCount_ > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n\n  /**\n   * Set used to store objects that are currently in the pool and available\n   * to be used.\n   * @private {goog.structs.Queue<T>}\n   */\n  this.freeQueue_ = new goog.structs.Queue();\n\n  /**\n   * Set used to store objects that are currently in the pool and in use.\n   * @private {goog.structs.Set<T>}\n   */\n  this.inUseSet_ = new goog.structs.Set();\n\n  /**\n   * The minimum delay between objects being made available, in milliseconds. If\n   * this is 0, no minimum delay is enforced.\n   * @protected {number}\n   */\n  this.delay = 0;\n\n  /**\n   * The time of the last object being made available, in milliseconds since the\n   * epoch (i.e., the result of Date#toTime). If this is null, no access has\n   * occurred yet.\n   * @protected {number?}\n   */\n  this.lastAccess = null;\n\n  // Make sure that the minCount constraint is satisfied.\n  this.adjustForMinMax();\n};\ngoog.inherits(goog.structs.Pool, goog.Disposable);\n\n\n/**\n * Error to throw when the max/min constraint is attempted to be invalidated.\n * I.e., when it is attempted for maxCount to be less than minCount.\n * @type {string}\n * @private\n */\ngoog.structs.Pool.ERROR_MIN_MAX_ =\n    '[goog.structs.Pool] Min can not be greater than max';\n\n\n/**\n * Error to throw when the Pool is attempted to be disposed and it is asked to\n * make sure that there are no objects that are in use (i.e., haven't been\n * released).\n * @type {string}\n * @private\n */\ngoog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_ =\n    '[goog.structs.Pool] Objects not released';\n\n\n/**\n * Sets the minimum count of the pool.\n * If min is greater than the max count of the pool, an error is thrown.\n * @param {number} min The minimum count of the pool.\n */\ngoog.structs.Pool.prototype.setMinimumCount = function(min) {\n  'use strict';\n  // Check count constraints.\n  if (min > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.minCount_ = min;\n\n  // Adjust the objects in the pool as needed.\n  this.adjustForMinMax();\n};\n\n\n/**\n * Sets the maximum count of the pool.\n * If max is less than the min count of the pool, an error is thrown.\n * @param {number} max The maximum count of the pool.\n */\ngoog.structs.Pool.prototype.setMaximumCount = function(max) {\n  'use strict';\n  // Check count constraints.\n  if (max < this.minCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.maxCount_ = max;\n\n  // Adjust the objects in the pool as needed.\n  this.adjustForMinMax();\n};\n\n\n/**\n * Sets the minimum delay between objects being returned by getObject, in\n * milliseconds. This defaults to zero, meaning that no minimum delay is\n * enforced and objects may be used as soon as they're available.\n * @param {number} delay The minimum delay, in milliseconds.\n */\ngoog.structs.Pool.prototype.setDelay = function(delay) {\n  'use strict';\n  this.delay = delay;\n};\n\n\n/**\n * @return {T|undefined} A new object from the pool if there is one available,\n *     otherwise undefined.\n */\ngoog.structs.Pool.prototype.getObject = function() {\n  'use strict';\n  var time = goog.now();\n  if (this.lastAccess != null && time - this.lastAccess < this.delay) {\n    return undefined;\n  }\n\n  var obj = this.removeFreeObject_();\n  if (obj) {\n    this.lastAccess = time;\n    this.inUseSet_.add(obj);\n  }\n\n  return obj;\n};\n\n\n/**\n * Returns an object to the pool of available objects so that it can be reused.\n * @param {T} obj The object to return to the pool of free objects.\n * @return {boolean} Whether the object was found in the Pool's set of in-use\n *     objects (in other words, whether any action was taken).\n */\ngoog.structs.Pool.prototype.releaseObject = function(obj) {\n  'use strict';\n  if (this.inUseSet_.remove(obj)) {\n    this.addFreeObject(obj);\n    return true;\n  }\n  return false;\n};\n\n\n/**\n * Removes a free object from the collection of objects that are free so that it\n * can be used.\n *\n * NOTE: This method does not mark the returned object as in use.\n *\n * @return {T|undefined} The object removed from the free collection, if there\n *     is one available. Otherwise, undefined.\n * @private\n */\ngoog.structs.Pool.prototype.removeFreeObject_ = function() {\n  'use strict';\n  var obj;\n  while (this.getFreeCount() > 0) {\n    obj = this.freeQueue_.dequeue();\n\n    if (!this.objectCanBeReused(obj)) {\n      this.adjustForMinMax();\n    } else {\n      break;\n    }\n  }\n\n  if (!obj && this.getCount() < this.maxCount_) {\n    obj = this.createObject();\n  }\n\n  return obj;\n};\n\n\n/**\n * Adds an object to the collection of objects that are free. If the object can\n * not be added, then it is disposed.\n *\n * @param {T} obj The object to add to collection of free objects.\n */\ngoog.structs.Pool.prototype.addFreeObject = function(obj) {\n  'use strict';\n  this.inUseSet_.remove(obj);\n  if (this.objectCanBeReused(obj) && this.getCount() < this.maxCount_) {\n    this.freeQueue_.enqueue(obj);\n  } else {\n    this.disposeObject(obj);\n  }\n};\n\n\n/**\n * Adjusts the objects held in the pool to be within the min/max constraints.\n *\n * NOTE: It is possible that the number of objects in the pool will still be\n * greater than the maximum count of objects allowed. This will be the case\n * if no more free objects can be disposed of to get below the minimum count\n * (i.e., all objects are in use).\n */\ngoog.structs.Pool.prototype.adjustForMinMax = function() {\n  'use strict';\n  var freeQueue = this.freeQueue_;\n\n  // Make sure the at least the minimum number of objects are created.\n  while (this.getCount() < this.minCount_) {\n    freeQueue.enqueue(this.createObject());\n  }\n\n  // Make sure no more than the maximum number of objects are created.\n  while (this.getCount() > this.maxCount_ && this.getFreeCount() > 0) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n};\n\n\n/**\n * Should be overridden by sub-classes to return an instance of the object type\n * that is expected in the pool.\n * @return {T} The created object.\n */\ngoog.structs.Pool.prototype.createObject = function() {\n  'use strict';\n  return {};\n};\n\n\n/**\n * Should be overridden to dispose of an object. Default implementation is to\n * remove all its members, which should render it useless. Calls the object's\n * `dispose()` method, if available.\n * @param {T} obj The object to dispose.\n */\ngoog.structs.Pool.prototype.disposeObject = function(obj) {\n  'use strict';\n  if (typeof obj.dispose == 'function') {\n    obj.dispose();\n  } else {\n    for (var i in obj) {\n      obj[i] = null;\n    }\n  }\n};\n\n\n/**\n * Should be overridden to determine whether an object has become unusable and\n * should not be returned by getObject(). Calls the object's\n * `canBeReused()`  method, if available.\n * @param {T} obj The object to test.\n * @return {boolean} Whether the object can be reused.\n */\ngoog.structs.Pool.prototype.objectCanBeReused = function(obj) {\n  'use strict';\n  if (typeof obj.canBeReused == 'function') {\n    return obj.canBeReused();\n  }\n  return true;\n};\n\n\n/**\n * Returns true if the given object is in the pool.\n * @param {T} obj The object to check the pool for.\n * @return {boolean} Whether the pool contains the object.\n */\ngoog.structs.Pool.prototype.contains = function(obj) {\n  'use strict';\n  return this.freeQueue_.contains(obj) || this.inUseSet_.contains(obj);\n};\n\n\n/**\n * Returns the number of objects currently in the pool.\n * @return {number} Number of objects currently in the pool.\n */\ngoog.structs.Pool.prototype.getCount = function() {\n  'use strict';\n  return this.freeQueue_.getCount() + this.inUseSet_.getCount();\n};\n\n\n/**\n * Returns the number of objects currently in use in the pool.\n * @return {number} Number of objects currently in use in the pool.\n */\ngoog.structs.Pool.prototype.getInUseCount = function() {\n  'use strict';\n  return this.inUseSet_.getCount();\n};\n\n\n/**\n * Returns the number of objects currently free in the pool.\n * @return {number} Number of objects currently free in the pool.\n */\ngoog.structs.Pool.prototype.getFreeCount = function() {\n  'use strict';\n  return this.freeQueue_.getCount();\n};\n\n\n/**\n * Determines if the pool contains no objects.\n * @return {boolean} Whether the pool contains no objects.\n */\ngoog.structs.Pool.prototype.isEmpty = function() {\n  'use strict';\n  return this.freeQueue_.isEmpty() && this.inUseSet_.isEmpty();\n};\n\n\n/**\n * Disposes of the pool and all objects currently held in the pool.\n * @override\n * @protected\n */\ngoog.structs.Pool.prototype.disposeInternal = function() {\n  'use strict';\n  goog.structs.Pool.superClass_.disposeInternal.call(this);\n  if (this.getInUseCount() > 0) {\n    throw new Error(goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_);\n  }\n  delete this.inUseSet_;\n\n  // Call disposeObject on each object held by the pool.\n  var freeQueue = this.freeQueue_;\n  while (!freeQueue.isEmpty()) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n  delete this.freeQueue_;\n};\n","~:compiled-at",1623975095188,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.pool.js\",\n\"lineCount\":134,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/pool.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Datastructure: Pool.\\n *\\n *\\n * A generic class for handling pools of objects.\\n * When an object is released, it is attempted to be reused.\\n */\\n\\n\\ngoog.provide('goog.structs.Pool');\\n\\ngoog.require('goog.Disposable');\\ngoog.require('goog.structs.Queue');\\ngoog.require('goog.structs.Set');\\n\\n\\n\\n/**\\n * A generic pool class. If min is greater than max, an error is thrown.\\n * @param {number=} opt_minCount Min. number of objects (Default: 0).\\n * @param {number=} opt_maxCount Max. number of objects (Default: 10).\\n * @constructor\\n * @extends {goog.Disposable}\\n * @template T\\n */\\ngoog.structs.Pool = function(opt_minCount, opt_maxCount) {\\n  'use strict';\\n  goog.Disposable.call(this);\\n\\n  /**\\n   * Minimum number of objects allowed\\n   * @private {number}\\n   */\\n  this.minCount_ = opt_minCount || 0;\\n\\n  /**\\n   * Maximum number of objects allowed\\n   * @private {number}\\n   */\\n  this.maxCount_ = opt_maxCount || 10;\\n\\n  // Make sure that the max and min constraints are valid.\\n  if (this.minCount_ > this.maxCount_) {\\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\\n  }\\n\\n  /**\\n   * Set used to store objects that are currently in the pool and available\\n   * to be used.\\n   * @private {goog.structs.Queue<T>}\\n   */\\n  this.freeQueue_ = new goog.structs.Queue();\\n\\n  /**\\n   * Set used to store objects that are currently in the pool and in use.\\n   * @private {goog.structs.Set<T>}\\n   */\\n  this.inUseSet_ = new goog.structs.Set();\\n\\n  /**\\n   * The minimum delay between objects being made available, in milliseconds. If\\n   * this is 0, no minimum delay is enforced.\\n   * @protected {number}\\n   */\\n  this.delay = 0;\\n\\n  /**\\n   * The time of the last object being made available, in milliseconds since the\\n   * epoch (i.e., the result of Date#toTime). If this is null, no access has\\n   * occurred yet.\\n   * @protected {number?}\\n   */\\n  this.lastAccess = null;\\n\\n  // Make sure that the minCount constraint is satisfied.\\n  this.adjustForMinMax();\\n};\\ngoog.inherits(goog.structs.Pool, goog.Disposable);\\n\\n\\n/**\\n * Error to throw when the max/min constraint is attempted to be invalidated.\\n * I.e., when it is attempted for maxCount to be less than minCount.\\n * @type {string}\\n * @private\\n */\\ngoog.structs.Pool.ERROR_MIN_MAX_ =\\n    '[goog.structs.Pool] Min can not be greater than max';\\n\\n\\n/**\\n * Error to throw when the Pool is attempted to be disposed and it is asked to\\n * make sure that there are no objects that are in use (i.e., haven't been\\n * released).\\n * @type {string}\\n * @private\\n */\\ngoog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_ =\\n    '[goog.structs.Pool] Objects not released';\\n\\n\\n/**\\n * Sets the minimum count of the pool.\\n * If min is greater than the max count of the pool, an error is thrown.\\n * @param {number} min The minimum count of the pool.\\n */\\ngoog.structs.Pool.prototype.setMinimumCount = function(min) {\\n  'use strict';\\n  // Check count constraints.\\n  if (min > this.maxCount_) {\\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\\n  }\\n  this.minCount_ = min;\\n\\n  // Adjust the objects in the pool as needed.\\n  this.adjustForMinMax();\\n};\\n\\n\\n/**\\n * Sets the maximum count of the pool.\\n * If max is less than the min count of the pool, an error is thrown.\\n * @param {number} max The maximum count of the pool.\\n */\\ngoog.structs.Pool.prototype.setMaximumCount = function(max) {\\n  'use strict';\\n  // Check count constraints.\\n  if (max < this.minCount_) {\\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\\n  }\\n  this.maxCount_ = max;\\n\\n  // Adjust the objects in the pool as needed.\\n  this.adjustForMinMax();\\n};\\n\\n\\n/**\\n * Sets the minimum delay between objects being returned by getObject, in\\n * milliseconds. This defaults to zero, meaning that no minimum delay is\\n * enforced and objects may be used as soon as they're available.\\n * @param {number} delay The minimum delay, in milliseconds.\\n */\\ngoog.structs.Pool.prototype.setDelay = function(delay) {\\n  'use strict';\\n  this.delay = delay;\\n};\\n\\n\\n/**\\n * @return {T|undefined} A new object from the pool if there is one available,\\n *     otherwise undefined.\\n */\\ngoog.structs.Pool.prototype.getObject = function() {\\n  'use strict';\\n  var time = goog.now();\\n  if (this.lastAccess != null && time - this.lastAccess < this.delay) {\\n    return undefined;\\n  }\\n\\n  var obj = this.removeFreeObject_();\\n  if (obj) {\\n    this.lastAccess = time;\\n    this.inUseSet_.add(obj);\\n  }\\n\\n  return obj;\\n};\\n\\n\\n/**\\n * Returns an object to the pool of available objects so that it can be reused.\\n * @param {T} obj The object to return to the pool of free objects.\\n * @return {boolean} Whether the object was found in the Pool's set of in-use\\n *     objects (in other words, whether any action was taken).\\n */\\ngoog.structs.Pool.prototype.releaseObject = function(obj) {\\n  'use strict';\\n  if (this.inUseSet_.remove(obj)) {\\n    this.addFreeObject(obj);\\n    return true;\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Removes a free object from the collection of objects that are free so that it\\n * can be used.\\n *\\n * NOTE: This method does not mark the returned object as in use.\\n *\\n * @return {T|undefined} The object removed from the free collection, if there\\n *     is one available. Otherwise, undefined.\\n * @private\\n */\\ngoog.structs.Pool.prototype.removeFreeObject_ = function() {\\n  'use strict';\\n  var obj;\\n  while (this.getFreeCount() > 0) {\\n    obj = this.freeQueue_.dequeue();\\n\\n    if (!this.objectCanBeReused(obj)) {\\n      this.adjustForMinMax();\\n    } else {\\n      break;\\n    }\\n  }\\n\\n  if (!obj && this.getCount() < this.maxCount_) {\\n    obj = this.createObject();\\n  }\\n\\n  return obj;\\n};\\n\\n\\n/**\\n * Adds an object to the collection of objects that are free. If the object can\\n * not be added, then it is disposed.\\n *\\n * @param {T} obj The object to add to collection of free objects.\\n */\\ngoog.structs.Pool.prototype.addFreeObject = function(obj) {\\n  'use strict';\\n  this.inUseSet_.remove(obj);\\n  if (this.objectCanBeReused(obj) && this.getCount() < this.maxCount_) {\\n    this.freeQueue_.enqueue(obj);\\n  } else {\\n    this.disposeObject(obj);\\n  }\\n};\\n\\n\\n/**\\n * Adjusts the objects held in the pool to be within the min/max constraints.\\n *\\n * NOTE: It is possible that the number of objects in the pool will still be\\n * greater than the maximum count of objects allowed. This will be the case\\n * if no more free objects can be disposed of to get below the minimum count\\n * (i.e., all objects are in use).\\n */\\ngoog.structs.Pool.prototype.adjustForMinMax = function() {\\n  'use strict';\\n  var freeQueue = this.freeQueue_;\\n\\n  // Make sure the at least the minimum number of objects are created.\\n  while (this.getCount() < this.minCount_) {\\n    freeQueue.enqueue(this.createObject());\\n  }\\n\\n  // Make sure no more than the maximum number of objects are created.\\n  while (this.getCount() > this.maxCount_ && this.getFreeCount() > 0) {\\n    this.disposeObject(freeQueue.dequeue());\\n  }\\n};\\n\\n\\n/**\\n * Should be overridden by sub-classes to return an instance of the object type\\n * that is expected in the pool.\\n * @return {T} The created object.\\n */\\ngoog.structs.Pool.prototype.createObject = function() {\\n  'use strict';\\n  return {};\\n};\\n\\n\\n/**\\n * Should be overridden to dispose of an object. Default implementation is to\\n * remove all its members, which should render it useless. Calls the object's\\n * `dispose()` method, if available.\\n * @param {T} obj The object to dispose.\\n */\\ngoog.structs.Pool.prototype.disposeObject = function(obj) {\\n  'use strict';\\n  if (typeof obj.dispose == 'function') {\\n    obj.dispose();\\n  } else {\\n    for (var i in obj) {\\n      obj[i] = null;\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Should be overridden to determine whether an object has become unusable and\\n * should not be returned by getObject(). Calls the object's\\n * `canBeReused()`  method, if available.\\n * @param {T} obj The object to test.\\n * @return {boolean} Whether the object can be reused.\\n */\\ngoog.structs.Pool.prototype.objectCanBeReused = function(obj) {\\n  'use strict';\\n  if (typeof obj.canBeReused == 'function') {\\n    return obj.canBeReused();\\n  }\\n  return true;\\n};\\n\\n\\n/**\\n * Returns true if the given object is in the pool.\\n * @param {T} obj The object to check the pool for.\\n * @return {boolean} Whether the pool contains the object.\\n */\\ngoog.structs.Pool.prototype.contains = function(obj) {\\n  'use strict';\\n  return this.freeQueue_.contains(obj) || this.inUseSet_.contains(obj);\\n};\\n\\n\\n/**\\n * Returns the number of objects currently in the pool.\\n * @return {number} Number of objects currently in the pool.\\n */\\ngoog.structs.Pool.prototype.getCount = function() {\\n  'use strict';\\n  return this.freeQueue_.getCount() + this.inUseSet_.getCount();\\n};\\n\\n\\n/**\\n * Returns the number of objects currently in use in the pool.\\n * @return {number} Number of objects currently in use in the pool.\\n */\\ngoog.structs.Pool.prototype.getInUseCount = function() {\\n  'use strict';\\n  return this.inUseSet_.getCount();\\n};\\n\\n\\n/**\\n * Returns the number of objects currently free in the pool.\\n * @return {number} Number of objects currently free in the pool.\\n */\\ngoog.structs.Pool.prototype.getFreeCount = function() {\\n  'use strict';\\n  return this.freeQueue_.getCount();\\n};\\n\\n\\n/**\\n * Determines if the pool contains no objects.\\n * @return {boolean} Whether the pool contains no objects.\\n */\\ngoog.structs.Pool.prototype.isEmpty = function() {\\n  'use strict';\\n  return this.freeQueue_.isEmpty() && this.inUseSet_.isEmpty();\\n};\\n\\n\\n/**\\n * Disposes of the pool and all objects currently held in the pool.\\n * @override\\n * @protected\\n */\\ngoog.structs.Pool.prototype.disposeInternal = function() {\\n  'use strict';\\n  goog.structs.Pool.superClass_.disposeInternal.call(this);\\n  if (this.getInUseCount() > 0) {\\n    throw new Error(goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_);\\n  }\\n  delete this.inUseSet_;\\n\\n  // Call disposeObject on each object held by the pool.\\n  var freeQueue = this.freeQueue_;\\n  while (!freeQueue.isEmpty()) {\\n    this.disposeObject(freeQueue.dequeue());\\n  }\\n  delete this.freeQueue_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"Pool\",\"goog.structs.Pool\",\"opt_minCount\",\"opt_maxCount\",\"Disposable\",\"call\",\"minCount_\",\"maxCount_\",\"Error\",\"ERROR_MIN_MAX_\",\"freeQueue_\",\"Queue\",\"inUseSet_\",\"Set\",\"delay\",\"lastAccess\",\"adjustForMinMax\",\"inherits\",\"ERROR_DISPOSE_UNRELEASED_OBJS_\",\"prototype\",\"setMinimumCount\",\"goog.structs.Pool.prototype.setMinimumCount\",\"min\",\"setMaximumCount\",\"goog.structs.Pool.prototype.setMaximumCount\",\"max\",\"setDelay\",\"goog.structs.Pool.prototype.setDelay\",\"getObject\",\"goog.structs.Pool.prototype.getObject\",\"time\",\"now\",\"undefined\",\"obj\",\"removeFreeObject_\",\"add\",\"releaseObject\",\"goog.structs.Pool.prototype.releaseObject\",\"remove\",\"addFreeObject\",\"goog.structs.Pool.prototype.removeFreeObject_\",\"getFreeCount\",\"dequeue\",\"objectCanBeReused\",\"getCount\",\"createObject\",\"goog.structs.Pool.prototype.addFreeObject\",\"enqueue\",\"disposeObject\",\"goog.structs.Pool.prototype.adjustForMinMax\",\"freeQueue\",\"goog.structs.Pool.prototype.createObject\",\"goog.structs.Pool.prototype.disposeObject\",\"dispose\",\"i\",\"goog.structs.Pool.prototype.objectCanBeReused\",\"canBeReused\",\"contains\",\"goog.structs.Pool.prototype.contains\",\"goog.structs.Pool.prototype.getCount\",\"getInUseCount\",\"goog.structs.Pool.prototype.getInUseCount\",\"goog.structs.Pool.prototype.getFreeCount\",\"isEmpty\",\"goog.structs.Pool.prototype.isEmpty\",\"disposeInternal\",\"goog.structs.Pool.prototype.disposeInternal\",\"superClass_\"]\n}\n"]