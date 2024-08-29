export default function SelectFilter({ filterColumn, setFilterColumn }){
    return (<select
      value={filterColumn}
      onChange={e => setFilterColumn(e.target.value)}
      className="form-select mb-3"
      style={{ marginBottom: '10px', padding: '5px', width: '150px' }}
    >
      <option value="id">ID</option>
      <option value="name">Name</option>
      <option value="email">Email</option>
      <option value="score">Score</option>
      <option value="createdAt">CreatedAt</option>
    </select>
  );
}