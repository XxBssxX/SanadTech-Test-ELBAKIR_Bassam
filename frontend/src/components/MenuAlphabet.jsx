const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function AlphabetMenu({ onSelect }) {
  return (
    <div className="alphabet-menu">
      {letters.map(l => (
        <button key={l} onClick={() => onSelect(l)} className="letter-button">
          {l}
        </button>
      ))}
    </div>
  );
}
