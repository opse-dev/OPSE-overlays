# OPSE OVERLAYS SERVER

## Instructions

* Install dependencies in both `app` and `dist` directories.
* Run the `make` script in the `dist` directory to create a compiler file (used to build the app).
* To package the app into an exe, run the `build` script in the `app` directory (this may take a few minutes based on your PC specs).

<br>

## Creating a new overlay

### Step 1

Create a `.pug` file in `/src/overlays/views` with the following format

```pug
extends _layout

append main
    //- ALL THE CONTENTS OF THE BODY

    //- EXAMPLE
    .component.fill.b-x.brs-tr(style="top: 10%; left: 20%;")
        p#test TEST

append scripts
    script.
        //- register overlay - IMPORANT
        register(location.href.split("/")[3]);

        //- listening for events
        listen(eventName, data => {
            //- handel event
        });

        //- EXAMPLE
        listen('test', data => {
            $('#test').html(data);
        });
```

### Step 2

Create a `.scss` file in `/src/overlays/scss` with the following format

```scss
@import './essentials';

// ANY STYLES FOR THE OVERLAY
```

### Step 3

Setup routes for your overlay in `routes.js`

```js
// replace {overlayID} with the ID of the overlay
router.route('/{overlayID}/:postID?')
    .get(async (req, res) => {
        res.send(pug.renderFile(`${__dirname}/overlays/views/{overlay.pug}`, {
            style: sass.renderSync({file: `${__dirname}/overlays/scss/{overlay.scss}`}).css.toString(),
        }))
    })
    .post(async (req, res) => {
        if (!req.params.postID) res.send("No event specified");
        else {
            switch (req.params.postID.toLowerCase()) {
                case "test":
                    // emitting an event to {overlayID}
                    io.emitTo({overlayID}, "test", "THIS IS A TEST")
                        .then(() => { res.send(`Event sent`) })
                        .catch(e => { res.send(`Error: "${e}"`) });
            
                default:
                    return res.send(`Handel request for ${req.params.postID}`);
            }
        }
    });
```

<br>

## CSS Docs

### Component

Any component on the overlay should have `.component` as the parent class

```pug
.component(style="top: topOffset; left: leftOffset; ...")
    // content of the div
```

You can fill a component by adding the `.fill` class to the component

```pug
.component.fill(style="top: topOffset; left: leftOffset; ...")
    // content of the div
```

### Borders

Borders can be applied to components by adding the `.b` class to the component.

* `.b` - Borders on all sides
* `.b-x` - Borders only on left and right
* `.b-y` - Borders only on top and bottom
* `.b-t` - Borders only on top
* `.b-r` - Borders only on right
* `.b-b` - Borders only on bottom
* `.b-l` - Borders only on left

### Borders Radius

A border-radius can be applied to components by adding the `.br` class to the component.

* `.br` - Radius on all corners
* `.br-tl` - Radius only on top-left corner
* `.br-tr` - Radius only on top-right corner
* `.br-bl` - Radius only on bottom-left corner
* `.br-br` - Radius only on bottom-right corner

Adding the `.brs` class will apply a smaller border radius

* `.brs` - Radius on all corners
* `.brs-tl` - Radius only on top-left corner
* `.brs-tr` - Radius only on top-right corner
* `.brs-bl` - Radius only on bottom-left corner
* `.brs-br` - Radius only on bottom-right corner
