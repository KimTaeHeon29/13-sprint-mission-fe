import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      <nav>
        <div className="navbar">
          <div className="nav-left">
            <a className="logo-container" href="/">
              <img className="logo-img" src={logoImg} alt="로고" />
              <span className="logo-text">판다마켓</span>
            </a>

            <div className="menu">
              <a href="/board">자유게시판</a>
              <a href="/">중고마켓</a>
            </div>
          </div>
          <button className="login-btn">로그인</button>
        </div>
      </nav>
    </div>
  );
}
export default App;
