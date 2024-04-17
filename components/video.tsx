export default function Video({ src, alt }) {
  return (
    <div>
      <iframe
        width="250"
        height="300"
        src="https://www.youtube.com/embed/3V2gbTOyrLM"
        title="locked"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div>{alt}</div>
    </div>
  );
}
