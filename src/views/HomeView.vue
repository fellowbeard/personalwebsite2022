<template>
  <div class="home">
    <main role="main">
      <section class="mt-4 mb-5">
        <div class="container-fluid">
          <div class="row">
            <div class="card-columns">
              <div class="vid-size">
                <a href="/post">
                  <div class="card-pin card-video">
                    <video style="width: 100%; height: auto" autoplay="autoplay" loop id="vid-size" muted>
                      <source src="/docs/assets/img/memphisme.webm" type="video/webm" />
                      <source src="/docs/assets/img/memphisme.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div class="overlay">
                      <h2 class="card-title title">About Me</h2>
                    </div>
                  </div>
                </a>
              </div>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRbhdIxlSdVrzH5QRQXfwHhiTstxLdQp5wMrBledvWIM2vawusGYipWJ3q-IRKlwTmE8qhCOrLZU1W4/pub"
              >
                <div class="card card-pin">
                  <img class="card-img" src="/docs/assets/img/resumememphis.png" alt="Card image" />
                  <div class="overlay">
                    <h2 class="card-title title">Resum&eacute;</h2>
                  </div>
                </div>
              </a>
              <a href="/skills">
                <div class="card card-pin">
                  <img class="card-img" src="/docs/assets/img/skillsmemphis.png" alt="Card image" />
                  <div class="overlay">
                    <h2 class="card-title title">Developer Skills</h2>
                  </div>
                </div>
              </a>
              <a href="mailto:virgovibe@gmail.com">
                <div class="card card-pin">
                  <img class="card-img" src="/docs/assets/img/email.png" alt="Card image" />
                  <div class="overlay">
                    <h2 class="card-title title">Contact</h2>
                  </div>
                </div>
              </a>
              <a href="https://github.com/fellowbeard">
                <div class="card card-pin">
                  <img class="card-img" src="/docs/assets/img/githubmemphis.png" alt="Card image" />
                  <div class="overlay">
                    <h2 class="card-title title">Github</h2>
                  </div>
                </div>
              </a>
              <a href="/video">
                <div class="card card-pin">
                  <img class="card-img" src="/docs/assets/img/videomemphis.png" alt="Card image" />
                  <div class="overlay">
                    <h2 class="card-title title">Video Work</h2>
                  </div>
                </div>
              </a>
              <a href="https://plantfab.netlify.app/">
                <div class="card card-pin">
                  <img class="card-img" src="/docs/assets/img/plantfabmemphis.png" alt="Card image" />
                  <div class="overlay">
                    <h2 class="card-title title">PlantFab</h2>
                  </div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/michaelbeardy/">
                <div class="card card-pin">
                  <img class="card-img" src="/docs/assets/img/linkedinmemphis.png" alt="Card image" />
                  <div class="overlay">
                    <h2 class="card-title title">LinkedIn</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <footer class="footer pt-5 pb-5 text-center"></footer>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
  // mounted: function () {
  //   this.$refs.videoRef.src = "/docs/assets/img/memphisme.mp4";
  //   this.$refs.videoRef.play();
  // },
};
</script>
