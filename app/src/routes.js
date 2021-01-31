const { checkServerIdentity } = require('tls');

const express = require('express'),
    io = require('./sockets'),
    router = express.Router(),
    ip = require('public-ip'),
    sass = require('sass'),
    pug = require('pug'),
    fs = require('fs')


router.get('/', async (req, res) => {
    res.send(pug.renderFile(`${__dirname}/main/page.pug`, {
        ip: await ip.v4(),
        style: sass.renderSync({file: `${__dirname}/main/style.scss`}).css.toString(),
    }))
});


router.get('/controller/:overlayID/', async (req, res) => {
    let files = fs.readdirSync(`${__dirname}/views/pug/`);
    let OVERLAYS = [];

    files.forEach(file => { 
        if (file.endsWith(".controller.pug")) OVERLAYS.push(file.split(".")[0]); 
    });

    res.send(pug.renderFile(`${__dirname}/views/pug/${req.params.overlayID}.controller.pug`, {
        style: sass.renderSync({file: `${__dirname}/views/scss/${req.params.overlayID}.controller.scss`}).css.toString(),
        controllerID: req.params.overlayID,
        OVERLAYS: OVERLAYS,
    }));
});

router.route('/overlay/:overlayID/:postID?')
    .get(async (req, res) => {
        res.send(pug.renderFile(`${__dirname}/views/pug/${req.params.overlayID}.overlay.pug`, {
            style: sass.renderSync({file: `${__dirname}/views/scss/${req.params.overlayID}.overlay.scss`}).css.toString(),
        }))
    })
    .post(async (req, res) => {
        if (!req.params.postID) res.send("No event specified");
        else {
            switch (req.params.overlayID.toLowerCase()) {
                case "1":
                    switch (req.params.postID.toLowerCase()) {
                        case "test":
                            io.emitTo(req.params.overlayID, "test", "THIS IS A TEST")
                                .then(() => {
                                    res.send(`Event sent`);
                                })
                                .catch(e => {
                                    res.send(`Error: "${e}"`);
                                });
                            return;
                    }
                    break;

                default:
                    return res.send(`Handel request for ${req.params.postID}`);                
            }
        }
    });


module.exports = router;