export default function Checkbox({ text }) {
  return (
    <div style={{ display: "flex", gap: "10px", paddingTop: "5px" }}>
      <input type="checkbox" id="demoCheckbox" name="checkbox" value="0" />
      <div>{text}</div>
    </div>
  );
}
