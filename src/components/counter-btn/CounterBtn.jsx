import cn from './CounterBtn.module.css';

const CounterBtn = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className={cn.counterControls}>
      <button 
        type="button" 
        onClick={onDecrease} 
        className={cn.counterBtn}
        disabled={value <= 1}
      >
        -
      </button>
      <p className={cn.counterValue}>
        {value}
      </p>
      <button 
        type="button" 
        onClick={onIncrease} 
        className={cn.counterBtn}
        disabled={value >= 100}
      >
        +
      </button>
    </div>
  );
};

export default CounterBtn;
