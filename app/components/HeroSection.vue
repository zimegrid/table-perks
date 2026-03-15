<template>
  <section class="hero">
    <div class="hero-bg">
      <img src="http://localhost:3845/assets/779fc4bf749524c188be8487f4e43567207923ea.svg" alt="" class="gradient-bg" />
    </div>

    <div class="hero-content reveal">
      <div class="reviews">
        <div class="avatars">
          <img src="http://localhost:3845/assets/f9e963121d9548c53b94482392901117bd5f52b0.png" alt="" />
          <img src="http://localhost:3845/assets/e7eb30de9d08b8fec0c871d6e1691ca96a6bebc8.png" alt="" />
          <img src="http://localhost:3845/assets/541878896a24ced2056ba78096dc2e973a06416d.png" alt="" />
          <img src="http://localhost:3845/assets/7788a682c0c8070e6f637be692491efff0cc5b44.png" alt="" />
        </div>
        <div class="stars">
          <div class="stars-icons">
             <span v-for="i in 5" :key="i">⭐</span>
          </div>
          <p>Over <strong>100+ people</strong> joined</p>
        </div>
      </div>

      <h1 class="hero-title">
        Turn Every Visit & Customers Into<br />
        Everlasting Loyalty
      </h1>

      <p class="hero-description">
        A complete, white‑label loyalty platform that helps restaurants drive repeat business, manage rewards across branches, and understand customer behavior in real time
      </p>

      <div class="hero-btns">
        <a href="#pricing" class="btn btn-white btn-lg">See Pricing</a>
        <a href="#contact" class="btn btn-outline btn-lg">Contact Us</a>
      </div>

      <div class="dashboard-preview reveal">
        <img src="http://localhost:3845/assets/411e7789967cbdfa8476cba00b8a7de29749e34c.png" alt="Dashboard" class="main-dashboard" />
        <img src="http://localhost:3845/assets/3efc355d3c682aab5959fd06cf5a3ec03d6743ec.png" alt="" class="floating-card card-left" />
        <img src="http://localhost:3845/assets/3efc355d3c682aab5959fd06cf5a3ec03d6743ec.png" alt="" class="floating-card card-right" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: var(--color-primary);
  min-height: 900px;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 var(--radius-24) var(--radius-24);
  padding-top: 162px;
  color: white;
}

.hero-bg {
  position: absolute;
  top: 136px;
  left: 50%;
  transform: translateX(-50%);
  width: 1604px;
  height: 976px;
  z-index: 0;
  pointer-events: none;
}

.gradient-bg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
}

.reviews {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.avatars {
  display: flex;
}

.avatars img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid white;
  margin-left: -8px;
}

.avatars img:first-child {
  margin-left: 0;
}

.stars {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
}

.stars-icons {
  display: flex;
  gap: 2px;
  margin-bottom: 4px;
}

.stars p {
  color: #e8f6f2;
}

.hero-title {
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 18px;
  color: #e8f6f2;
  max-width: 800px;
  margin-bottom: 48px;
}

.hero-btns {
  display: flex;
  gap: 24px;
  margin-bottom: 80px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 14px;
}

.btn-outline {
  border: 1px solid white;
  color: white;
}

.dashboard-preview {
  position: relative;
  width: 800px;
  margin-top: 20px;
}

.main-dashboard {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.floating-card {
  position: absolute;
  width: 110px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card-left {
  left: -85px;
  top: 24px;
}

.card-right {
  right: -85px;
  top: 50px;
}
</style>
