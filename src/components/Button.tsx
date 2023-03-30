export default function Button({ text, classButton }: { text: string; classButton: string }) {
  return (
    <button className={classButton} type="button">
      {text}
    </button>
  );
}
