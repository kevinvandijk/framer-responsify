flow = new FlowComponent
	backgroundColor: "white"
# print Screen.width
flow.header = header
flow.showNext page

# Place this one time ontop:
{ responsify } = require('responsify')

# Next to use for every component:
# responsify(
# 	component: header
# 	breakpoints:
# 		0:
# 			height: 60
# 		376:
# 			height: 100
# )

# Option you can use animation:
responsify(
	# for example:
	animation:
		time: 0.1
	component: header
	breakpoints:
		0:
			height: 60
		376:
			height: 100
)

