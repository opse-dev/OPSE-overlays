const express = require('express'),
    io = require('./sockets'),
    router = express.Router(),
    sass = require('sass'),
    pug = require('pug'),
    { tID_sID, school_info } = require('./teams_info'),
    GENERAL_SETTINGS = {}

router.post('/settings/:setting', async (req, res) => {
    switch (req.params.setting.toLowerCase()) {
        case "games-today":
            GENERAL_SETTINGS["GAMES"] = req.body;
            io.emit('UPDATE_GENERAL_SETTINGS', GENERAL_SETTINGS);
            break;
    }

    res.end("UPDATED");
});

router.route('/overlayID/:postID?')
    .get(async (req, res) => {
        res.send(pug.renderFile(`${__dirname}/views/pug/overlayID.overlay.pug`, {
            style: sass.renderSync({file: `${__dirname}/views/scss/overlayID.overlay.scss`}).css.toString(),
            GENERAL_SETTINGS: GENERAL_SETTINGS,
            SCHOOL_INFO: school_info,
        }))
    })
    .post(async (req, res) => {
        if (!req.params.postID) res.send("No event specified");
        else {
            switch (req.params.postID.toLowerCase()) {
                case "test":
                    return io.emitTo("overlayID", "test", "THIS IS A TEST")
                        .then(() => { res.send(`Event sent`) })
                        .catch(e => { res.send(`Error: "${e}"`) });

                default:
                    return res.send(`Handel request for ${req.params.postID}`);                
            }
        }
    });


router.route('/Lower-Third/:postID?')
    .get(async (req, res) => {
        res.send(pug.renderFile(`${__dirname}/views/pug/Lower-Third.overlay.pug`, {
            style: sass.renderSync({file: `${__dirname}/views/scss/Lower-Third.overlay.scss`}).css.toString(),
        }))
    })
    .post(async (req, res) => {
        if (!req.params.postID) res.send("No event specified");
        else {
            switch (req.params.postID.toLowerCase()) {
                case "visibility":
                    return io.emitTo("Lower-Third", "visibility", req.body.value)
                        .then(() => { res.send(`Event sent`) })
                        .catch(e => { res.send(`Error: "${e}"`) });
                case "update":
                    return io.emitTo("Lower-Third", "update", req.body)
                        .then(() => { res.send(`Event sent`) })
                        .catch(e => { res.send(`Error: "${e}"`) });
    
                default:
                    return res.send(`Handel request for ${req.params.postID}`);                
            }
        }
    });

module.exports = router;