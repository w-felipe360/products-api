import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={ {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      } }
    >
      <div
        style={ {
          padding: 20,
          background: '#fff',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          maxWidth: '500px',
          maxHeight: '80%',
          overflowY: 'auto',
        } }
      >
        <button
          onClick={ onClose }
          style={ {
            alignSelf: 'flex-end',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          } }
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
