import bgImage from '../../assets/img1.jpg';
const Login = () => {
  return (
    <div
      className="login-page"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="login-box">
        <h2 className='log'>Login </h2>
        <form className="login-form">
          <input type="text" placeholder="Enter your Username" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Click to Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
