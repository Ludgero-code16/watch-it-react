
/* This component displays my website header */
function Header() {
  return (
    <header className="site-header">
      {/* The watch.it website name */}
      <h1 className="site-logo">watch.it</h1>

      {/* Movie category navigation */}
      <nav className="site-nav" aria-label="Movie genres">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      {/* Search button shown in the wireframe */}
      <button className="search-button" type="button">
        SEARCH
      </button>
    </header>
  );
}

export default Header;
