import React from 'react';

function capitalize(word) {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function Alert(props) {
  if (!props.alert || !props.alert.msg || !props.alert.Type) {
    // Return null or handle the case where alert is not valid
    return null;
  }

  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.Type)}</strong> {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
