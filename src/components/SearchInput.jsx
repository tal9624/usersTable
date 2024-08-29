export default function  SearchInput({ searchTerm, setSearchTerm }) {
    return (<input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="form-control mb-3"
      style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
    />
  );
}