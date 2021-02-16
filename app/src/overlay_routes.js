const express = require('express'),
    io = require('./sockets'),
    router = express.Router(),
    sass = require('sass'),
    pug = require('pug'),
    { tID_sID, school_info } = require('./teams_info'),
    GENERAL_SETTINGS = {}

router.post('/settings/:setting', async (req, res) => {
    console.log(req.body)
    switch (req.params.setting.toLowerCase()) {
        case "games-today":
            GENERAL_SETTINGS["GAMES"] = req.body;
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
                    io.emitTo("overlayID", "test", "THIS IS A TEST")
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