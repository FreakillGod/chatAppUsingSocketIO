import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App =()=>{
    return(
        <ChatEngine 
        height='100vh'
        projectID='5695891d-c063-4371-8cc8-43a779933322'
        userName='vikashpatel'
        userSecret='123456'  
        renderChatFeed={(chatAppProps)=>{
            return <ChatFeed {...chatAppProps} />
        }}      
        />
    )
}

export default App;