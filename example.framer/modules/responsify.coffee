storedBreakpoints = {}

exports.responsify = (options) ->
  if options.component && options.components
    throw new Error('Specify either `component` or `components`. Not both.')

  componentOrComponents = options.component || options.components
  components = if Array.isArray(componentOrComponents) then componentOrComponents else [componentOrComponents]

  breakpointOrBreakpoints = options.breakpoint || options.breakpoints
  breakpointNames = if Array.isArray(breakpointOrBreakpoints) then breakpointOrBreakpoints else [breakpointOrBreakpoints]

  animateOptions = Object.assign({
    time: 0
    curve: Bezier.ease
  }, options.animation)

  for name in breakpointNames
    sortedBreakpoints = Object.keys(storedBreakpoints[name] || {}).sort().reverse()

    for breakpoint in sortedBreakpoints
      properties = storedBreakpoints[name][breakpoint]

      animation = Object.assign(
        {},
        properties,
        options: animateOptions
      )

      if Screen.width >= breakpoint
        for component in components
          print animation
          component.animate(animation)

        break

exports.createBreakpoints = (options) ->
  name = options.name
  storedBreakpoints[name] = options.breakpoints
