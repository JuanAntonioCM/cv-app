import React from 'react';
import Alert from '@material-ui/lab/Alert';

function Notification({ status }) {
  let message = '';
  switch (status) {
    case 'warning':
      message = 'Rellena todos los campos!';
      break;
    case 'error':
      message = 'Ocurrió un error, vuelve a intentarlo!';
      break;
    case 'success':
      message = 'Se guardó correctamente!';
      break;

    default:
      message = '';
      break;
  }
  return <Alert severity={status}>{message}</Alert>;
}

export default Notification;
