const LoginPage = () => {
	return (
		<div className="login-page" style={{ position: "relative", zIndex: 1 }}>
			<div className="left-login-panel">
				<h1>Aura Drip</h1>

        <span className="login-main-text">Your Wardrobe,</span>
        <h3 className="login-sub-text">curated by us</h3>

        <p className="login-text">Your personal wardrobe space where you can organize your pieces,
        discover new outfit ideas, and plan what to wear with confidence every
        single day. </p>

        <div className="prompt-tip-chips">
          <span>Outfit generation from your own clothes</span>
          <span>Weather-aware styling suggestions</span>
          <span>Organize by category, color, and vibe</span>
        </div>
			</div>
			<div className="right-login-panel">
        <h2>Signup</h2>
      </div>
		</div>
	);
};

export default LoginPage;
