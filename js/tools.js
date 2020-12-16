
var _setTimeout = setTimeout

var setTimeout = function (cb, delay) {
  console.log('setTimeout: delay=' + delay)
  var args = Array.prototype.slice.call(arguments, 2)
  function _cb () {
    console.log('setTimeout: id=' + id)
    cb.apply(null, args)
  }
  var id = _setTimeout(_cb, delay)
  return id
}

var _setInterval = setInterval

var setInterval = function (cb, delay) {
  console.log('setInterval: delay=' + delay)
  var args = Array.prototype.slice.call(arguments, 2)
  function _cb () {
    console.log('setInterval: id=' + id)
    cb.apply(null, args)
  }
  var id = _setInterval(_cb, delay)
  return id
}