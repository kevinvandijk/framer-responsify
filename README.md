
# Framer responsify module

A simple module to change component styles based on screen width breakpoints.

## Installation

Add the responsify.coffee file to the modules folder of your Framer myProject

## Usage

```coffeescript
# Include the module:

{ responsify } = require('responsify')

# Example:
responsify(
  component: nameOfYourComponent
  breakpoints:
    0:
      height: 30
    # If the viewport is bigger or equal to 250px:
    250:
      height: 300
)
```

You can also adjust the animation properties if you want animation:

```coffeescript
responsify(
  animation:
    time: 30
  component: nameOfYourComponent
  breakpoints:
    0:
      height: 30
    250:
      height: 300
)
```

## Authors

* Kevin van Dijk
* Folkert Paulides
