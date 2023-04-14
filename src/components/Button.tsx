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
    <button className={classButton} type="button" data-testid="button" onClick={onClick}>
      {text}
    </button>
  );
}
