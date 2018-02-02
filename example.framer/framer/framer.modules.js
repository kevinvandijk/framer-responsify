require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"responsify":[function(require,module,exports){
var storedBreakpoints;

storedBreakpoints = {};

exports.responsify = function(options) {
  var animateOptions, animation, breakpoint, breakpointNames, breakpointOrBreakpoints, component, componentOrComponents, components, i, len, name, properties, results, sortedBreakpoints;
  if (options.component && options.components) {
    throw new Error('Specify either `component` or `components`. Not both.');
  }
  componentOrComponents = options.component || options.components;
  components = Array.isArray(componentOrComponents) ? componentOrComponents : [componentOrComponents];
  breakpointOrBreakpoints = options.breakpoint || options.breakpoints;
  breakpointNames = Array.isArray(breakpointOrBreakpoints) ? breakpointOrBreakpoints : [breakpointOrBreakpoints];
  animateOptions = Object.assign({
    time: 0,
    curve: Bezier.ease
  }, options.animation);
  results = [];
  for (i = 0, len = breakpointNames.length; i < len; i++) {
    name = breakpointNames[i];
    sortedBreakpoints = Object.keys(storedBreakpoints[name] || {}).sort().reverse();
    results.push((function() {
      var j, k, len1, len2, results1;
      results1 = [];
      for (j = 0, len1 = sortedBreakpoints.length; j < len1; j++) {
        breakpoint = sortedBreakpoints[j];
        properties = storedBreakpoints[name][breakpoint];
        animation = Object.assign({}, properties, {
          options: animateOptions
        });
        if (Screen.width >= breakpoint) {
          for (k = 0, len2 = components.length; k < len2; k++) {
            component = components[k];
            print(animation);
            component.animate(animation);
          }
          break;
        } else {
          results1.push(void 0);
        }
      }
      return results1;
    })());
  }
  return results;
};

exports.createBreakpoints = function(options) {
  var name;
  name = options.name;
  return storedBreakpoints[name] = options.breakpoints;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2tldmluL2NvZGUvZnJhbWVyLXJlc3BvbnNpZnkvZXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9yZXNwb25zaWZ5LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2tldmluL2NvZGUvZnJhbWVyLXJlc3BvbnNpZnkvZXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInN0b3JlZEJyZWFrcG9pbnRzID0ge31cblxuZXhwb3J0cy5yZXNwb25zaWZ5ID0gKG9wdGlvbnMpIC0+XG4gIGlmIG9wdGlvbnMuY29tcG9uZW50ICYmIG9wdGlvbnMuY29tcG9uZW50c1xuICAgIHRocm93IG5ldyBFcnJvcignU3BlY2lmeSBlaXRoZXIgYGNvbXBvbmVudGAgb3IgYGNvbXBvbmVudHNgLiBOb3QgYm90aC4nKVxuXG4gIGNvbXBvbmVudE9yQ29tcG9uZW50cyA9IG9wdGlvbnMuY29tcG9uZW50IHx8IG9wdGlvbnMuY29tcG9uZW50c1xuICBjb21wb25lbnRzID0gaWYgQXJyYXkuaXNBcnJheShjb21wb25lbnRPckNvbXBvbmVudHMpIHRoZW4gY29tcG9uZW50T3JDb21wb25lbnRzIGVsc2UgW2NvbXBvbmVudE9yQ29tcG9uZW50c11cblxuICBicmVha3BvaW50T3JCcmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludCB8fCBvcHRpb25zLmJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnROYW1lcyA9IGlmIEFycmF5LmlzQXJyYXkoYnJlYWtwb2ludE9yQnJlYWtwb2ludHMpIHRoZW4gYnJlYWtwb2ludE9yQnJlYWtwb2ludHMgZWxzZSBbYnJlYWtwb2ludE9yQnJlYWtwb2ludHNdXG5cbiAgYW5pbWF0ZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICB0aW1lOiAwXG4gICAgY3VydmU6IEJlemllci5lYXNlXG4gIH0sIG9wdGlvbnMuYW5pbWF0aW9uKVxuXG4gIGZvciBuYW1lIGluIGJyZWFrcG9pbnROYW1lc1xuICAgIHNvcnRlZEJyZWFrcG9pbnRzID0gT2JqZWN0LmtleXMoc3RvcmVkQnJlYWtwb2ludHNbbmFtZV0gfHwge30pLnNvcnQoKS5yZXZlcnNlKClcblxuICAgIGZvciBicmVha3BvaW50IGluIHNvcnRlZEJyZWFrcG9pbnRzXG4gICAgICBwcm9wZXJ0aWVzID0gc3RvcmVkQnJlYWtwb2ludHNbbmFtZV1bYnJlYWtwb2ludF1cblxuICAgICAgYW5pbWF0aW9uID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIG9wdGlvbnM6IGFuaW1hdGVPcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIFNjcmVlbi53aWR0aCA+PSBicmVha3BvaW50XG4gICAgICAgIGZvciBjb21wb25lbnQgaW4gY29tcG9uZW50c1xuICAgICAgICAgIHByaW50IGFuaW1hdGlvblxuICAgICAgICAgIGNvbXBvbmVudC5hbmltYXRlKGFuaW1hdGlvbilcblxuICAgICAgICBicmVha1xuXG5leHBvcnRzLmNyZWF0ZUJyZWFrcG9pbnRzID0gKG9wdGlvbnMpIC0+XG4gIG5hbWUgPSBvcHRpb25zLm5hbWVcbiAgc3RvcmVkQnJlYWtwb2ludHNbbmFtZV0gPSBvcHRpb25zLmJyZWFrcG9pbnRzXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURJQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQOzs7O0FEVGxCLElBQUE7O0FBQUEsaUJBQUEsR0FBb0I7O0FBRXBCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUMsT0FBRDtBQUNuQixNQUFBO0VBQUEsSUFBRyxPQUFPLENBQUMsU0FBUixJQUFxQixPQUFPLENBQUMsVUFBaEM7QUFDRSxVQUFVLElBQUEsS0FBQSxDQUFNLHVEQUFOLEVBRFo7O0VBR0EscUJBQUEsR0FBd0IsT0FBTyxDQUFDLFNBQVIsSUFBcUIsT0FBTyxDQUFDO0VBQ3JELFVBQUEsR0FBZ0IsS0FBSyxDQUFDLE9BQU4sQ0FBYyxxQkFBZCxDQUFILEdBQTZDLHFCQUE3QyxHQUF3RSxDQUFDLHFCQUFEO0VBRXJGLHVCQUFBLEdBQTBCLE9BQU8sQ0FBQyxVQUFSLElBQXNCLE9BQU8sQ0FBQztFQUN4RCxlQUFBLEdBQXFCLEtBQUssQ0FBQyxPQUFOLENBQWMsdUJBQWQsQ0FBSCxHQUErQyx1QkFBL0MsR0FBNEUsQ0FBQyx1QkFBRDtFQUU5RixjQUFBLEdBQWlCLE1BQU0sQ0FBQyxNQUFQLENBQWM7SUFDN0IsSUFBQSxFQUFNLENBRHVCO0lBRTdCLEtBQUEsRUFBTyxNQUFNLENBQUMsSUFGZTtHQUFkLEVBR2QsT0FBTyxDQUFDLFNBSE07QUFLakI7T0FBQSxpREFBQTs7SUFDRSxpQkFBQSxHQUFvQixNQUFNLENBQUMsSUFBUCxDQUFZLGlCQUFrQixDQUFBLElBQUEsQ0FBbEIsSUFBMkIsRUFBdkMsQ0FBMEMsQ0FBQyxJQUEzQyxDQUFBLENBQWlELENBQUMsT0FBbEQsQ0FBQTs7O0FBRXBCO1dBQUEscURBQUE7O1FBQ0UsVUFBQSxHQUFhLGlCQUFrQixDQUFBLElBQUEsQ0FBTSxDQUFBLFVBQUE7UUFFckMsU0FBQSxHQUFZLE1BQU0sQ0FBQyxNQUFQLENBQ1YsRUFEVSxFQUVWLFVBRlUsRUFHVjtVQUFBLE9BQUEsRUFBUyxjQUFUO1NBSFU7UUFNWixJQUFHLE1BQU0sQ0FBQyxLQUFQLElBQWdCLFVBQW5CO0FBQ0UsZUFBQSw4Q0FBQTs7WUFDRSxLQUFBLENBQU0sU0FBTjtZQUNBLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFNBQWxCO0FBRkY7QUFJQSxnQkFMRjtTQUFBLE1BQUE7Z0NBQUE7O0FBVEY7OztBQUhGOztBQWZtQjs7QUFrQ3JCLE9BQU8sQ0FBQyxpQkFBUixHQUE0QixTQUFDLE9BQUQ7QUFDMUIsTUFBQTtFQUFBLElBQUEsR0FBTyxPQUFPLENBQUM7U0FDZixpQkFBa0IsQ0FBQSxJQUFBLENBQWxCLEdBQTBCLE9BQU8sQ0FBQztBQUZSIn0=
