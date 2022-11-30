<template>
  <div class="navbar"></div>
  <!-- Languages -->
  <!-- <a href="/"> -->
  <div class="section languages">
    <!-- <div class="card card-h2">
    <h2 class="md text-center my-2">
      Skills
    </h2>
    </div> -->

    <div class="container flex">
      <div class="card">
        <h4>Javascript</h4>
        <i class="devicon-ruby-plain"></i>
      </div>
      <div class="card">
        <h4>Ruby</h4>
        <i class="devicon-javascript-plain"></i>
      </div>
      <div class="card">
        <h4>Rails</h4>
        <i class="devicon-rails-plain"></i>
      </div>
      <div class="card">
        <h4>Git</h4>
        <i class="devicon-git-plain"></i>
      </div>
      <div class="card">
        <h4>Github</h4>
        <i class="devicon-github-original"></i>
      </div>
      <div class="card">
        <h4>VueJS</h4>
        <i class="devicon-vuejs-plain"></i>
      </div>
      <div class="card">
        <h4>PostgreSQL</h4>
        <i class="devicon-postgresql-plain"></i>
      </div>
      <div class="card">
        <h4>CSS</h4>
        <i class="devicon-css3-plain"></i>
      </div>
      <div class="card">
        <h4>HTML</h4>
        <i class="devicon-html5-plain"></i>
      </div>
      <div class="card">
        <h4>Bootstrap</h4>
        <i class="devicon-bootstrap-plain"></i>
      </div>
    </div>
  </div>

  <footer class="footer pt-5 pb-5 text-center"></footer>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap'); */

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #333;
}

h1,
h2 {
  color: white;
  text-shadow: 1px 1px #a90084;
  font-weight: 800;
  line-height: 1.2;
  margin: 100px;
}

p {
  margin: 10px 0;
}

img {
  width: 100%;
}

/* Navbar */

.navbar {
  background-color: transparent;
  color: #fff;
  height: 70px;
}

.navbar a {
  color: #fff;
  padding: 10px;
  margin: 0 5px;
}

.navbar a:hover {
  border-bottom: 2px #fff solid;
}
.navbar .flex {
  justify-content: space-between;
}

.navbar ul {
  display: flex;
}

/* Showcase */
.showcase {
  height: 400px;
  background-color: var(--primary-color);
  color: #fff;
  position: relative;
}

.showcase h1 {
  font-size: 40px;
}

.showcase p {
  margin: 20px 0;
}

.showcase .grid {
  grid-template-columns: 55% 45%;
  gap: 30px;
  overflow: visible;
}

.showcase-form {
  position: relative;
  top: 60px;
  height: 350px;
  width: 400px;
  padding: 40px;
  z-index: 100;
}

.showcase-form .form-control {
  margin: 30px 0;
}

.showcase-form input[type="text"],
.showcase-form input[type="email"] {
  border: 0;
  border-bottom: 1px solid #b4becb;
  width: 100%;
  padding: 3px;
  font-size: 16px;
}

.showcase-form input:focus {
  outline: none;
}

.showcase::before,
.showcase::after {
  content: "";
  position: absolute;
  height: 100px;
  bottom: -70px;
  right: 0;
  left: 0;
  background: white;
  transform: skewY(-3deg);
  -webkit-transform: skewY(-3deg);
  -moz-transform: skewY(-3deg);
  -ms-transform: skewY(-3deg);
}

/* Stats */

.stats {
  padding-top: 100px;
}

.stats-heading {
  max-width: 500px;
  margin: auto;
}

.stats .grid h3 {
  font-size: 35px;
}

.stats .grid p {
  font-size: 20px;
  font-weight: bold;
}

/* Cli */

.cli .grid {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2/ 1fr);
}

.cli .grid > *:first-child {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

/* Cloud */
.cloud .grid {
  grid-template-columns: 4fr 3fr;
}

/* Languages */

.languages .flex {
  flex-wrap: wrap;
}

.languages .card {
  text-align: center;
  margin: 2px 2px;
  transition: transform 0.2s ease-in;
}

.languages .card {
  font-size: 20px;
  margin-bottom: 10px;
}

/* .languages .card:hover {
  transform: scale(1.1);
} */

/* Footer */

.footer .social a {
  margin: 0 10px;
}

/* Tablets and under */

@media (max-width: 768px) {
  .grid,
  .showcase .grid,
  .stats .grid,
  .cli .grid,
  .cloud .grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .showcase {
    height: auto;
  }

  .showcase-text {
    text-align: center;
    margin-top: 40px;
  }

  .showcase-form {
    justify-self: center;
    margin: auto;
  }

  .cli .grid > *:first-child {
    grid-column: 1;
    grid-row: 1;
  }
}

/* Mobile */

@media (max-width: 500px) {
  .navbar {
    height: 100px;
  }

  .navbar .flex {
    flex-direction: column;
  }

  .navbar ul {
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
/* Utilities */

.container {
  max-width: 1100px;
  margin: 0 auto;
  overflow: auto;
  padding: 0 40px;
}

.card {
  background-color: white;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px;
}

.card-h2 {
  background-color: rgb(255, 96, 215);
}

.btn {
  display: inline-block;
  padding: 10px 30px;
  cursor: pointer;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
}

.btn-outline {
  background: transparent;
  border: 1px white solid;
}

.btn:hover {
  transform: scale(0.98);
}

/* Backgrounds & colored buttons */

.bg-primary,
.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
}
.bg-secondary,
.btn-secondary {
  background-color: var(--secondary-color);
  color: #fff;
}
.bg-dark,
.btn-dark {
  background-color: var(--dark-color);
  color: #fff;
}
.bg-light,
.btn-light {
  background-color: var(--light-color);
  color: #333;
}

.bg-primary a,
.btn-primary a,
.bg-secondary a,
.btn-secondary a,
.bg-dark a,
.btn-dark a {
  color: #fff;
}
/* tText sizes */

.lead {
  font-size: 20px;
}

.sm {
  font-size: 1rem;
}

.md {
  font-size: 2rem;
}

.lg {
  font-size: 3rem;
}

.xl {
  font-size: 4rem;
}

.text-center {
  text-align: center;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* Margin */

.my-1 {
  margin: 1rem 0;
}
.my-2 {
  margin: 1.5rem 0;
}
.my-3 {
  margin: 2rem 0;
}
.my-4 {
  margin: 3rem 0;
}
.my-5 {
  margin: 4rem 0;
}
.m-1 {
  margin: 1rem;
}
.m-2 {
  margin: 1.5rem;
}
.m-3 {
  margin: 2rem;
}
.m-4 {
  margin: 3rem;
}
.m-5 {
  margin: 4rem;
}
/* Padding */

.py-1 {
  padding: 1rem 0;
}
.py-2 {
  padding: 1.5rem 0;
}
.py-3 {
  padding: 2rem 0;
}
.py-4 {
  padding: 3rem 0;
}
.py-5 {
  padding: 4rem 0;
}
.p-1 {
  padding: 1rem;
}
.p-2 {
  padding: 1.5rem;
}
.p-3 {
  padding: 2rem;
}
.p-4 {
  padding: 3rem;
}
.p-5 {
  padding: 4rem;
}
</style>
