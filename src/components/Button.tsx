export default function Button({
  text,
  classButton,
  onClick,
}: {
  text: string;
  classButton: string;
  onClick: () => void;
}) {
  return (
    <button className={classButton} type="button" onClick={onClick}>
      {text}
    </button>
  );
}
