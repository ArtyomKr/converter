import propTypes from 'prop-types';
import './index.scss';

function Selector({ items, isOpened, onClick }) {
  if (isOpened)
    return (
      <div className="selector">
        <ul className="selector__list">
          {items.map((item) => (
            <li
              key={item}
              onClick={onClick}
              data-name={item}
              className="selector__item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
}

Selector.propTypes = {
  items: propTypes.array.isRequired,
  isOpened: propTypes.bool.isRequired,
  onClick: propTypes.func
};

export default Selector;
