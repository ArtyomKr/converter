import propTypes from 'prop-types';

function RemoveButton({ onClick }) {
  return (
    <button className="remove-button" onClick={onClick}>
      ✖
    </button>
  );
}

RemoveButton.propTypes = {
  onClick: propTypes.func
};

export default RemoveButton;
