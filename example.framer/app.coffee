flow = new FlowComponent
	backgroundColor: "white"
# print Screen.width
flow.header = header
flow.showNext page



# Place this one time ontop:
{ responsify, createBreakpoints } = require('responsify')

# Create breakpoint sets like this:
createBreakpoints(
	name: 'height'
	breakpoints:
		0:
			height: 160
		376:
			height: 100
)

createBreakpoints(
	name: 'width'
	breakpoints:
		400:
			width: 10
)

# Combine breakpoint sets and apply them to multiple components like this:
# Optionally you can use animation
responsify(
	# for example:
	animation:
		time: 0.1
	components: [header, flow]
	breakpoints: ['width', 'height']
)

# If you only want to change one component for example:
responsify(
	# for example:
	component: header
	breakpoint: 'width'
)