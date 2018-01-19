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
    if (Screen.width > breakpoint) {
      component.animate(animation);
      break;
    } else {
      results.push(void 0);
    }
  }
  return results;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvcmVzcG9uc2lmeS5jb2ZmZWUiLCIuLi9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5yZXNwb25zaWZ5ID0gKG9wdGlvbnMpIC0+XHJcblx0Y29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnRcclxuXHRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHNcclxuXHRhbmltYXRlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG5cdFx0dGltZTogMFxyXG5cdFx0Y3VydmU6IEJlemllci5lYXNlXHJcblx0fSwgb3B0aW9ucy5hbmltYXRpb24pXHJcblxyXG5cdHNvcnRlZEJyZWFrcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLnNvcnQoKS5yZXZlcnNlKClcclxuXHJcblx0Zm9yIGJyZWFrcG9pbnQgaW4gc29ydGVkQnJlYWtwb2ludHNcclxuXHRcdHByb3BlcnRpZXMgPSBicmVha3BvaW50c1ticmVha3BvaW50XVxyXG5cclxuXHRcdGFuaW1hdGlvbiA9IE9iamVjdC5hc3NpZ24oXHJcblx0XHRcdHt9LFxyXG5cdFx0XHRwcm9wZXJ0aWVzLFxyXG5cdFx0XHRvcHRpb25zOiBhbmltYXRlT3B0aW9uc1xyXG5cdFx0KVxyXG5cclxuXHRcdGlmIFNjcmVlbi53aWR0aCA+IGJyZWFrcG9pbnRcclxuXHRcdFx0Y29tcG9uZW50LmFuaW1hdGUoYW5pbWF0aW9uKVxyXG5cdFx0XHRicmVha1xyXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURJQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQOzs7O0FEVGxCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUMsT0FBRDtBQUNwQixNQUFBO0VBQUEsU0FBQSxHQUFZLE9BQU8sQ0FBQztFQUNwQixXQUFBLEdBQWMsT0FBTyxDQUFDO0VBQ3RCLGNBQUEsR0FBaUIsTUFBTSxDQUFDLE1BQVAsQ0FBYztJQUM5QixJQUFBLEVBQU0sQ0FEd0I7SUFFOUIsS0FBQSxFQUFPLE1BQU0sQ0FBQyxJQUZnQjtHQUFkLEVBR2QsT0FBTyxDQUFDLFNBSE07RUFLakIsaUJBQUEsR0FBb0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxXQUFaLENBQXdCLENBQUMsSUFBekIsQ0FBQSxDQUErQixDQUFDLE9BQWhDLENBQUE7QUFFcEI7T0FBQSxtREFBQTs7SUFDQyxVQUFBLEdBQWEsV0FBWSxDQUFBLFVBQUE7SUFFekIsU0FBQSxHQUFZLE1BQU0sQ0FBQyxNQUFQLENBQ1gsRUFEVyxFQUVYLFVBRlcsRUFHWDtNQUFBLE9BQUEsRUFBUyxjQUFUO0tBSFc7SUFNWixJQUFHLE1BQU0sQ0FBQyxLQUFQLEdBQWUsVUFBbEI7TUFDQyxTQUFTLENBQUMsT0FBVixDQUFrQixTQUFsQjtBQUNBLFlBRkQ7S0FBQSxNQUFBOzJCQUFBOztBQVREOztBQVZvQiJ9
