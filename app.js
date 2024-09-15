/*const peer = new Peer(); // Create a new Peer instance
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

// Function to start the local video stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        localVideo.srcObject = stream;

        // Handle incoming calls
        peer.on('call', call => {
            console.log('Incoming call from', call.peer);
            call.answer(stream); // Answer the call with the local stream
            call.on('stream', remoteStream => {
                remoteVideo.srcObject = remoteStream;
            });
        });
    })
    .catch(err => {
        console.error('Failed to get local media:', err);
    });

// Function to connect to another peer
function connectToPeer(peerId) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            const call = peer.call(peerId, stream);
            call.on('stream', remoteStream => {
                remoteVideo.srcObject = remoteStream;
            });
        })
        .catch(err => {
            console.error('Failed to get local media for call:', err);
        });
}

// Prompt for peer ID to connect
const peerIdToConnect = prompt('Enter the peer ID to connect to:');
if (peerIdToConnect) {
    connectToPeer(peerIdToConnect);
}
*/
const peerId = 'huin349ij2o3deif3wef'; // Your predefined Peer ID
const peer = new Peer(peerId); // Initialize Peer with specific ID
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

// Function to start the local video stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        localVideo.srcObject = stream;

        // Handle incoming calls
        peer.on('call', call => {
            console.log('Incoming call from', call.peer);
            call.answer(stream); // Answer the call with the local stream
            call.on('stream', remoteStream => {
                remoteVideo.srcObject = remoteStream;
            });
        });
    })
    .catch(err => {
        console.error('Failed to get local media:', err);
    });

// Function to connect to another peer
function connectToPeer(peerId) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            const call = peer.call(peerId, stream);
            call.on('stream', remoteStream => {
                remoteVideo.srcObject = remoteStream;
            });
        })
        .catch(err => {
            console.error('Failed to get local media for call:', err);
        });
}

// Prompt for peer ID to connect
const peerIdToConnect = prompt('Enter the peer ID to connect to:');
if (peerIdToConnect) {
    connectToPeer(peerIdToConnect);
}
