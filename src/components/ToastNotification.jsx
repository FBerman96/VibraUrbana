import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastNotification = ({ show, message, onClose, variant = 'success' }) => {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast onClose={onClose} show={show} delay={3000} autohide bg={variant}>
        <Toast.Header>
          <strong className="me-auto">
            {variant === 'success' ? 'Éxito' : 'Atención'}
          </strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
