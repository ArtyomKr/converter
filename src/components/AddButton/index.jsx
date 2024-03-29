import propTypes from 'prop-types';
import './index.scss';

function AddButton({ children, onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      {children}
    </button>
  );
}

AddButton.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func
};

export default AddButton;
