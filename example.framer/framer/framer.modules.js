require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"responsify":[function(require,module,exports){
exports.responsify = function(options) {
  var animateOptions, animation, breakpoint, breakpoints, component, i, len, properties, results, sortedBreakpoints;
  component = options.component;
  breakpoints = options.breakpoints;
  animateOptions = Object.assign({
    time: 0,
    curve: Bezier.ease
  }, options.animation);
  sortedBreakpoints = Object.keys(breakpoints).sort().reverse();
  results = [];
  for (i = 0, len = sortedBreakpoints.length; i < len; i++) {
    breakpoint = sortedBreakpoints[i];
    properties = breakpoints[breakpoint];
    animation = Object.assign({}, properties, {
      options: animateOptions
    });
    if (Screen.width >= breakpoint) {
      component.animate(animation);
      break;
    } else {
      results.push(void 0);
    }
  }
  return results;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL1N0dWRpby9Eb2N1bWVudHMvR2l0SHViL2ZyYW1lci1yZXNwb25zaWZ5L2V4YW1wbGUuZnJhbWVyL21vZHVsZXMvcmVzcG9uc2lmeS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9TdHVkaW8vRG9jdW1lbnRzL0dpdEh1Yi9mcmFtZXItcmVzcG9uc2lmeS9leGFtcGxlLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5yZXNwb25zaWZ5ID0gKG9wdGlvbnMpIC0+XG4gIGNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50XG4gIGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50c1xuICBhbmltYXRlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRpbWU6IDBcbiAgICBjdXJ2ZTogQmV6aWVyLmVhc2VcbiAgfSwgb3B0aW9ucy5hbmltYXRpb24pXG5cbiAgc29ydGVkQnJlYWtwb2ludHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykuc29ydCgpLnJldmVyc2UoKVxuXG4gIGZvciBicmVha3BvaW50IGluIHNvcnRlZEJyZWFrcG9pbnRzXG4gICAgcHJvcGVydGllcyA9IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdXG5cbiAgICBhbmltYXRpb24gPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBwcm9wZXJ0aWVzLFxuICAgICAgb3B0aW9uczogYW5pbWF0ZU9wdGlvbnNcbiAgICApXG5cbiAgICBpZiBTY3JlZW4ud2lkdGggPj0gYnJlYWtwb2ludFxuICAgICAgY29tcG9uZW50LmFuaW1hdGUoYW5pbWF0aW9uKVxuICAgICAgYnJlYWtcbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRElBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7Ozs7QURUbEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQyxPQUFEO0FBQ25CLE1BQUE7RUFBQSxTQUFBLEdBQVksT0FBTyxDQUFDO0VBQ3BCLFdBQUEsR0FBYyxPQUFPLENBQUM7RUFDdEIsY0FBQSxHQUFpQixNQUFNLENBQUMsTUFBUCxDQUFjO0lBQzdCLElBQUEsRUFBTSxDQUR1QjtJQUU3QixLQUFBLEVBQU8sTUFBTSxDQUFDLElBRmU7R0FBZCxFQUdkLE9BQU8sQ0FBQyxTQUhNO0VBS2pCLGlCQUFBLEdBQW9CLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBWixDQUF3QixDQUFDLElBQXpCLENBQUEsQ0FBK0IsQ0FBQyxPQUFoQyxDQUFBO0FBRXBCO09BQUEsbURBQUE7O0lBQ0UsVUFBQSxHQUFhLFdBQVksQ0FBQSxVQUFBO0lBRXpCLFNBQUEsR0FBWSxNQUFNLENBQUMsTUFBUCxDQUNWLEVBRFUsRUFFVixVQUZVLEVBR1Y7TUFBQSxPQUFBLEVBQVMsY0FBVDtLQUhVO0lBTVosSUFBRyxNQUFNLENBQUMsS0FBUCxJQUFnQixVQUFuQjtNQUNFLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFNBQWxCO0FBQ0EsWUFGRjtLQUFBLE1BQUE7MkJBQUE7O0FBVEY7O0FBVm1CIn0=
