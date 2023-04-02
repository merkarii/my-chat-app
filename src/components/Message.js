import React from 'react';

const Message = ({ message }) => {
  const date = new Date(message.createdAt);

  return (
    <li>
      <span>{message.text}</span> -{' '}
      <span>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </span>
    </li>
  );
};

export default Message;