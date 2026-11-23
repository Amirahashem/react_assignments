function Panel({ title = "Information", children }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default Panel;