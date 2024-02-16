import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001'; // Adjust this to your Socket.io server URL
const socket = io(ENDPOINT);

function ChatComponent({ userId, defaultRoom }) { // Add 'userId' and 'defaultRoom' as props if needed
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [room, setRoom] = useState(defaultRoom || 'General'); // Default room can be adjusted
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Join the default or a specific room
        socket.emit('joinRoom', { userId, room });

        socket.on('message', (message) => {
            setMessages((msgs) => [...msgs, message]);
        });

        return () => {
            socket.emit('leaveRoom', { userId, room });
            socket.off('message');
        };
    }, [userId, room]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleRoomChange = (e) => {
        const newRoom = e.target.value;
        socket.emit('leaveRoom', { userId, room }); // Leave the current room
        socket.emit('joinRoom', { userId, room: newRoom }); // Join the new room
        setRoom(newRoom); // Update state
        setMessages([]); // Clear messages in UI when changing rooms
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', { userId, message, room });
            setMessage('');
        }
    };

    return (
        <div>
            <div className="room-selection">
                <label>Change Room:</label>
                <select value={room} onChange={handleRoomChange}>
                    <option value="General">General</option>
                    <option value="Tech">Tech</option>
                    <option value="Fun">Fun</option>
                    {/* Add more rooms as needed */}
                </select>
            </div>
            <div className="chat-dashboard">
        <div className="chat-container">
            <div className="room-selection">
                {/* Room selection content */}
            </div>
            <div className="chat-box">
                {/* Chat box content */}
            </div>
            <form onSubmit={sendMessage}>
                {/* Form content */}
            </form>
        </div>
    </div>
            <div className="chat-box">
                {messages.map((msg, i) => (
                    <div key={i} className="message">{msg}</div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    placeholder="Type a message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatComponent;
