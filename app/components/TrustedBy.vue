<template>
  <section class="trusted-by reveal">
    <div class="container">
      <p class="trusted-text">Trusted by Over 1,000 Company Worldwide</p>
      <div class="logos-grid">
        <img src="http://localhost:3845/assets/9488b0901e023edfb935d0b4ede770a91e5dd93f.svg" alt="Partner Logo" />
        <img src="http://localhost:3845/assets/79262a5f97a25ad2de87dd558eca2098b86aa9eb.svg" alt="Partner Logo" />
        <img src="http://localhost:3845/assets/86264efac44b41371cc5c25d4dd63af7ca413d30.svg" alt="Partner Logo" />
        <img src="http://localhost:3845/assets/91083202dc955a7cc9dcc13789d417de8613bcc9.svg" alt="Partner Logo" />
        <img src="http://localhost:3845/assets/88b5a798e275ef33e4e8aaa77033b6053e5c8ee2.svg" alt="Partner Logo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.trusted-by {
  padding: 40px 0;
  background: white;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trusted-text {
  font-weight: 600;
  font-size: 18px;
  color: var(--color-neutral-300);
  margin-bottom: 24px;
}

.logos-grid {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 20px 0;
}

.logos-grid img {
  height: 40px;
  object-fit: contain;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.logos-grid img:hover {
  opacity: 1;
}
</style>
