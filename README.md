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
    p TEST

    +simple-container(0.2, 0.3)
        p MIXIN


append scripts
    script.
        //- REGISTER THE OVERLAY BY EMITING THE FOLLOWING EVENT (replace {overlayID} with a string to identify this overlay)
        socket.emit('register-overlay', overlayID)

        //- EXAMPLE EVENT
        socket.on(event, data => {
            console.log(data)
        })
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
        res.send(pug.renderFile('./src/overlays/views/{overlay.pug}', {
            style: sass.renderSync({file: `./src/overlays/scss/{overlay.scss}`}).css.toString(),
        }))
    })
    .post(async (req, res) => {
        if (!req.params.postID) res.send("No event specified");
        else {
            switch (req.params.postID.toLowerCase()) {
                case "test":
                    // emitting an event to {overlayID}
                    io.emitTo(overlayID, eventName, eventBody);
                    return res.send(`Handel request for ${req.params.postID}`);
            
                default:
                    return res.send(`Handel request for ${req.params.postID}`);
            }
        }
    });
```