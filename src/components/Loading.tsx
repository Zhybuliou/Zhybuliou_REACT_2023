import GIF from '../data/loader';

export default function Loading() {
  return (
    <div>
      <h2>Loading....</h2>
      <div
        className="loader"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${GIF})`,
        }}
      />
    </div>
  );
}
