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


router.route('/overlay1/:postID?')
    .get(async (req, res) => {
        res.send(pug.renderFile(`${__dirname}/overlays/views/overlay_1.pug`, {
            style: sass.renderSync({file: `${__dirname}/overlays/scss/overlay_1.scss`}).css.toString(),
        }))
    })
    .post(async (req, res) => {
        if (!req.params.postID) res.send("No event specified");
        else {
            switch (req.params.postID.toLowerCase()) {
                case "test":
                    io.emitTo("overlay1", "test", "THIS IS A TEST")
                        .then(() => {
                            res.send(`Event sent`);
                        })
                        .catch(e => {
                            res.send(`Error: "${e}"`);
                        });
                    return;
            
                default:
                    return res.send(`Handel request for ${req.params.postID}`);
            }
        }
    });


module.exports = router;