const peer = new Peer(); // Create a new Peer instance 
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

// Function to start the local video stream
function startLocalStream() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            localVideo.srcObject = stream;
            
            // Listen for incoming calls and answer them
            peer.on('call', call => {
                // Answer the call with our stream
                call.answer(stream);
                
                // When receiving the remote stream
                call.on('stream', remoteStream => {
                    remoteVideo.srcObject = remoteStream;
                });
            });
        })
        .catch(err => {
            console.error('Failed to get local stream', err);
        });
}

// Start local stream when Peer is open
peer.on('open', id => {
    console.log(`Peer ID is ${id}`);
    startLocalStream();
});

// Connect to another peer
function connectToPeer(peerId) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            const call = peer.call(peerId, stream);
            
            call.on('stream', remoteStream => {
                remoteVideo.srcObject = remoteStream;
            });
        })
        .catch(err => {
            console.error('Failed to get local stream for call', err);
        });
}

// Example of connecting to another peer (replace 'peer-id-of-other-peer' with an actual ID)
const otherPeerId = prompt('Enter peer ID to connect to:');
connectToPeer(otherPeerId);
