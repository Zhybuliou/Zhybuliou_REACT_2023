export default function FormSelect() {
  return (
    <div>
      <label className="select-input" htmlFor="select">
        Department:
        <select name="select" id="select">
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Development">Development</option>
        </select>
      </label>
    </div>
  );
}
