const express = require('express'),
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


router.get('/controller/:overlayID?/', async (req, res) => {
    let files = fs.readdirSync(`${__dirname}/views/pug/`);
    let OVERLAYS = [];

    files.forEach(file => { 
        if (file.endsWith(".controller.pug")) OVERLAYS.push(file.split(".")[0]); 
    });

    if (req.params.overlayID) res.send(pug.renderFile(`${__dirname}/views/pug/${req.params.overlayID}.controller.pug`, {
        style: sass.renderSync({file: `${__dirname}/views/scss/${req.params.overlayID}.controller.scss`}).css.toString(),
        controllerID: req.params.overlayID,
        OVERLAYS: OVERLAYS,
    }));
    else res.send(pug.renderFile(`${__dirname}/views/pug/${OVERLAYS[0]}.controller.pug`, {
        style: sass.renderSync({file: `${__dirname}/views/scss/${OVERLAYS[0]}.controller.scss`}).css.toString(),
        controllerID: OVERLAYS[0],
        OVERLAYS: OVERLAYS,
    }));
});


module.exports = router;