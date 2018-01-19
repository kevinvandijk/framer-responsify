exports.responsify = (options) ->
  component = options.component
  breakpoints = options.breakpoints
  animateOptions = Object.assign({
    time: 0
    curve: Bezier.ease
  }, options.animation)

  sortedBreakpoints = Object.keys(breakpoints).sort().reverse()

  for breakpoint in sortedBreakpoints
    properties = breakpoints[breakpoint]

    animation = Object.assign(
      {},
      properties,
      options: animateOptions
    )

    if Screen.width > breakpoint
      component.animate(animation)
      break
