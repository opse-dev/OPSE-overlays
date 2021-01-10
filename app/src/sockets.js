const main = require('../main');
let io = null;

/**
 * Initialises the handelers for incoming socket events.
 * @param {io} newIO The IO for the socket connections.
 */
let init = (newIO) => {
    try {
        io = newIO;

        io.on('connection', (socket) => {
            // console.log(`  -> ${socket.id} connected`);
            // socket.on('disconnect', () => { console.log(`  <- ${socket.id} disconnected`) });

            socket.on('register-overlay', (overlay) => { socket.join(overlay) });

            socket.on('minimain', () => { main.minimizeMain() });
            socket.on('quitapp', () => { main.quit() });
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    } 
};

module.exports = {
    /**
     * Initialises the handelers for incoming socket events.
     * @param {io} newIO The IO for the socket connections.
     */
    init: (newIO) => {
        return new Promise((resolve, reject) => {
            if (!io && init(newIO)) resolve();
            else reject("Error while initialising sockets.");
        });
    },

    /**
     * Sends an event to all active overlays
     * @param {string} evtName The name of the event to trigger
     * @param {string} body (optional) Any body to send along with the event
     */
    emit: (evtName, body) => {
        return new Promise((resolve, reject) => {
            if (!io) reject("Sockets not initialised");
            else {
                io.emit(evtName, body);
                resolve();
            }
        });
    },


    /**
     * Sends an event to athe specified overlay
     * @param {string} overlayID The id of the overlay to send event to
     * @param {string} evtName The name of the event to trigger
     * @param {string} body (optional) Any body to send along with the event
     */
    emitTo: (overlayID, evtName, body) => {
        return new Promise((resolve, reject) => {
            if (!io) reject("Sockets not initialised");
            else {
                io.to(overlayID).emit(evtName, body);
                resolve();
            }
        });
    },
}