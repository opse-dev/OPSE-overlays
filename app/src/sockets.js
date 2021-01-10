let io = null;

/**
 * Initialises the handelers for incoming socket events.
 * @param {io} newIO The IO for the socket connections.
 */
let init = (newIO) => {
    try {
        io = newIO;

        io.on('connection', (socket) => {
            console.log(`  -> ${socket.id} connected`);
            socket.on('register-overlay', (overlay) => { socket.join(overlay) });
            socket.on('disconnect', () => { console.log(`  <- ${socket.id} disconnected`) });
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
        if (!io && init(newIO)) return "Sockets Initialised";
        else "Error while Initialising sockets";
    },

    /**
     * Sends an event to all active overlays
     * @param {string} evtName The name of the event to trigger
     * @param {string} body (optional) Any body to send along with the event
     */
    emit: (evtName, body) => {
        if (!io) return "IO not Initialised";
        io.emit(evtName, body);
    },


    /**
     * Sends an event to athe specified overlay
     * @param {string} overlayID The id of the overlay to send event to
     * @param {string} evtName The name of the event to trigger
     * @param {string} body (optional) Any body to send along with the event
     */
    emitTo: (overlayID, evtName, body) => {
        if (!io) return "IO not Initialised";
        io.to(overlayID).emit(evtName, body);
    },
}