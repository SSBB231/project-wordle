import { KEYS } from '../../constants';

function Keyboard({ letters }) {
  return (
    <div className="keyboard">
      {KEYS.map((key) => (
        <p key={key} className={`cell ${letters[key]}`}>
          {key}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
