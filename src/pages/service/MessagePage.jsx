import React, { useEffect } from 'react';
import Message from '@components/write/MessageList';
import axios from 'axios';

function MessagePage() {
  return (
    <>
      <Message className="view-page" />
    </>
  );
}

export default MessagePage;
