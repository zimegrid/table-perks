<template>
  <section class="cta-banner">
    <div class="banner-container">
      <div class="banner-content">
        <h2 class="banner-title">Make your customers<br />come back again</h2>
        <p class="banner-description">
          Build a loyal community and increase repeat business with Table Perks' powerful loyalty tools.
        </p>
        <a href="#pricing" class="btn btn-white btn-lg">See Pricing</a>
      </div>
      
      <!-- Floating decorative cards from Figma -->
      <div class="floating-cards">
        <img src="http://localhost:3845/assets/bfff9bf1c3c213620a7c7c572d66d33b45d362ba.png" alt="" class="card-1" />
        <img src="http://localhost:3845/assets/bfff9bf1c3c213620a7c7c572d66d33b45d362ba.png" alt="" class="card-2" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-banner {
  padding: 0 var(--space-64);
  margin: 80px 0;
}

.banner-container {
  background-color: var(--color-primary);
  border-radius: var(--radius-24);
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.banner-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 1152px;
}

.banner-title {
  font-size: 48px;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #FFFFFF 31.36%, rgba(255, 255, 255, 0.5) 183.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.96px;
}

.banner-description {
  font-size: 18px;
  color: #edf7fd;
  margin-bottom: 48px;
}

.floating-cards {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
}

.card-1 {
  position: absolute;
  width: 316px;
  left: -17px;
  bottom: 100px;
  transform: rotate(-3.92deg);
  border-radius: 20px;
}

.card-2 {
  position: absolute;
  width: 316px;
  right: -25px;
  top: 42px;
  transform: rotate(2.85deg);
  border-radius: 20px;
}
</style>
