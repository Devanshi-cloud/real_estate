import { useState } from 'react';
import './chat.scss'

function Chat(){
  const [chat,setChat] = useState(true);
  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
              <img src="./image.jpeg" alt="" />
              <span>Vinay Poonia</span>
              <p>
                Hare Krishna, How can I help you...?
              </p>
            </div>
            <div className="message">
              <img src="./image.jpeg" alt="" />
              <span>Vinay Poonia</span>
              <p>
                Hare Krishna, How can I help you...?
              </p>
            </div>
            <div className="message">
              <img src="./image.jpeg" alt="" />
              <span>Vinay Poonia</span>
              <p>
                Hare Krishna, How can I help you...?
              </p>
            </div>
            <div className="message">
              <img src="./transition.gif" alt="" />
              <span>Devanshi Jaiswal</span>
              <p>
                Hare Krishna! the flat is amazing!
              </p>
            </div>
            <div className="message">
              <img src="./transition.gif" alt="" />
              <span>Devanshi Jaiswal</span>
              <p>
                price of house??
              </p>
            </div>
        </div>
        {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img 
              src="./image.jpeg" 
              alt="" 
              />
              Vinay Poonia
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Let's figure out how to get you your dream home!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Let's figure out how to get you your dream home!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Let's figure out how to get you your dream home!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Let's figure out how to get you your dream home!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Let's figure out how to get you your dream home!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Let's figure out how to get you your dream home!</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
        )}
    </div>
  )
}

export default Chat