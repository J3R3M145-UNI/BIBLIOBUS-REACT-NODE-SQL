/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const ToastCmp = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Oculta el Toast después de 3000 milisegundos (3 segundos)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show ? 'show' : 'hide'}`}>
      <div id="liveToast" className={`toast`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Mensaje</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShow(false)}></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
}

export default ToastCmp;