
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>

        <div className="error-line"></div>

        <h2>Oops! Səhifə tapılmadı</h2>

        <p>
          Axtardığın səhifə mövcud deyil və ya ünvanı
          dəyişdirilib.
        </p>

        <Link to="/" className="home-button">
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
