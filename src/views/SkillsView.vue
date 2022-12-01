<template>
  <div class="navbar"></div>
  <!-- Languages -->
  <div class="section languages">
    <div class="container flex">
      <div class="card">
        <h4>Ruby</h4>
        <i class="devicon-ruby-plain"></i>
      </div>
      <div class="card">
        <h4>Javascript</h4>
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

<script></script>

<style scoped>
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
  background-color: rgb(188, 255, 254);
  color: #333;
  border-radius: 10px;
  /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); */
  padding: 20px;
  margin: 10px;
}

.card-h2 {
  background-color: rgb(255, 96, 215);
}

/* Text sizes */

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
