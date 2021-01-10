let io = null;
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
    init: (newIO) => {
        if (!io && init(newIO)) return "Sockets Initialised";
        else "Error while Initialising sockets";
    },

    emit: (evtName, body) => {
        if (!io) return "IO not Initialised";
        io.emit(evtName, body);
    },

    emitTo: (overlayName, evtName, body) => {
        if (!io) return "IO not Initialised";
        io.to(overlayName).emit(evtName, body);
    },
}