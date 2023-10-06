import './index.scss';

function LoadingIndicator() {
  return (
    <div className="lds-container">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingIndicator;
