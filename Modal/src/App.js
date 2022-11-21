import React, { useState } from 'react';
import './index.scss';


const Modal = ({ open, setOpen, children }) => {
    return (
        <div className={`overlay animated ${open ? 'show' : ''}`}>
            <div className="modal">
                <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                {children}
            </div>
        </div>
    )
}


function App() {

    const [open, setOpen] = useState(false)

    return (
        <div className="App">
            <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
            <Modal open={open} setOpen={setOpen}>
                <img src="https://64.media.tumblr.com/5d1d59e1031b30b6a16d6f060304f059/tumblr_mgff0flBC11rkfvqno1_500.gifv" />
                <h3>Mercedes</h3>
            </Modal>
        </div>
    );
}

export default App;
