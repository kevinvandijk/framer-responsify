flow = new FlowComponent
	backgroundColor: "white"
print Screen.width
flow.header = header
flow.showNext page

#sketch 
# HeaderHight = (status) ->
# 	if Screen.width >= 252
# 		header.animate
# 			height: 300
# 			options:
# 				time: 0
# 				curve: Bezier.ease
# 	else if Screen.width <= 251
# 		header.animate
# 			height: 30
# 			options:
# 				time: 0
# 				curve: Bezier.ease
# 
# HeaderHight()

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
