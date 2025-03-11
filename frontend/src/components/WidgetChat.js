import React from 'react'

const WidgetChat = () => {
    return (
        <div className='widget-chat'>
            <div className='tro-ly'>
                <img class="chat-gpt-icon" alt="chat-gpt-icon" src="https://salt.tikicdn.com/ts/ta/f8/a1/bf/95b4110dc1fba3d9b48dfc6c60be4a90.png" height="32" width="32" />
                <div class="widget-chat-text">Trợ lý</div>
            </div>
            <div className='widget-chat-divider'>

            </div>
            <div className='tin-tuc'>
                <img src="https://salt.tikicdn.com/ts/ta/e1/5e/b4/2e33d86e11e2841a6a571de6084ff365.png" alt="chat-consumer" width="32" height="32" />
                <div className="widget-chat-text">Tin mới</div>
            </div>
        </div>
    )
}

export default WidgetChat