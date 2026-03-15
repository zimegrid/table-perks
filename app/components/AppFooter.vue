<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="http://localhost:3845/assets/861f5e2916311579f5241839512d33e811055d61.png" alt="Table Perks" />
          </div>
          <p class="brand-desc">
            A complete, white‑label loyalty platform that helps restaurants drive repeat business, manage rewards across branches, and understand customer behavior in real time
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">How to start</a>
            <a href="#">Who Table Perks is for</a>
          </div>
          <div class="footer-column">
            <h4>Help</h4>
            <a href="#">FAQs</a>
            <a href="#">Contact us</a>
          </div>
          <div class="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© 2025 TablePerks . All rights reserved.</p>
        <div class="social-links">
          <a href="#"><img src="http://localhost:3845/assets/73163029248fd63a0f57e2d5e213d55302d6165d.svg" alt="Instagram" /></a>
          <a href="#"><img src="http://localhost:3845/assets/8890804c5ec59a25485be738bdbf67f1a2c361d6.svg" alt="X" /></a>
          <a href="#"><img src="http://localhost:3845/assets/aed48afaf7be6889ded68b0d8d951901272f96cf.svg" alt="Youtube" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: white;
  padding: 80px 0 24px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 80px;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 471px;
}

.footer-logo {
  height: 46px;
  margin-bottom: 12px;
}

.footer-logo img {
  height: 100%;
}

.brand-desc {
  color: var(--color-neutral-300);
  font-size: 16px;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 80px;
}

.footer-column h4 {
  font-size: 16px;
  color: var(--color-neutral-500);
  margin-bottom: 12px;
}

.footer-column a {
  display: block;
  font-size: 16px;
  color: var(--color-neutral-300);
  margin-bottom: 12px;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 16px;
  color: var(--color-neutral-300);
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.social-links a:hover {
  opacity: 0.8;
}
</style>
