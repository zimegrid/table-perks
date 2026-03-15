<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <!-- Using the logo image from Figma context -->
        <img src="http://localhost:3845/assets/2377bb67c78ca52dec03ef5477de4727981b46b4.png" alt="Table Perks" />
      </div>
      
      <div class="nav-links">
        <a href="#company" class="nav-link">Company</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#pricing" class="nav-link">Pricing</a>
        <a href="#resources" class="nav-link">Resources</a>
      </div>
      
      <div class="nav-actions">
        <a href="#login" class="btn btn-login">Log In</a>
        <a href="#register" class="btn btn-register">Register</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 122px;
  display: flex;
  align-items: center;
  z-index: 100;
  padding: 0 var(--space-64);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo img {
  height: 48px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  gap: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 8px 32px;
  border-radius: 100px;
}

.nav-link {
  color: white;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 1;
}

.nav-actions {
  display: flex;
  gap: 12px;
}

.btn-login {
  background: white;
  color: #02327e;
  font-size: 14px;
  padding: 10px 24px;
}

.btn-register {
  background: transparent;
  color: white;
  border: 1px solid white;
  font-size: 14px;
  padding: 10px 24px;
}

.btn-register:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
