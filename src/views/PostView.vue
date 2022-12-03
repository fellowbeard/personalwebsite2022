<template>
  <main role="main">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <article class="card">
            <!-- <video
              style="width: 100%; height: auto"
              ref="videoRef"
              src=""
              autoplay="autoplay"
              loop
              id="vid-size"
              muted
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video> -->
            <video
              style="width: 100%; height: auto"
              autoplay="autoplay"
              loop
              id="vid-size"
              muted
              playsinline
              webkit-playsinline
              preload="auto"
              poster="/docs/assets/img/postermemphisme.png"
            >
              <source src="/docs/assets/img/memphisme.webm" type="video/webm" />
              <source src="/docs/assets/img/memphisme.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <a href="/">
              <div class="card-body">
                <h1 class="card-title display-4">Full-Stack Software Engineer</h1>
                <p>
                  Hi, I'm Michael Beard, and I've had an exciting journey into software development.
                  <br />
                  <br />

                  Before my initiation into the tech world, I managed a brick and mortar gallery space, showcasing the
                  work of burgeoning industrial designers from New York City. Together, with a small team, we helped
                  launch their work into production with great success. The gallery expanded into three locations, and
                  included designers from the UK, France, Italy, and Spain.
                  <br />
                  <br />

                  From there, I explored my own creative impulses as a videographer and editor, directing/editing music
                  videos, and visuals for music festivals and raves.
                  <br />
                  <br />

                  Expanding my creativity to the natural world, I worked with a small farm in Hawaii, designing a large
                  greenhouse, and terraforming the surrounding land into an orchard.
                  <br />
                  <br />

                  Most recently, I attended Actualize Coding Bootcamp, where I learned the fundamentals and best
                  practices in full-stack web development in areas of project architecture, and how to effectively
                  self-teach new technologies.
                  <br />
                  <br />
                  Now, I pour my creative passion into software engineering. All of my past experience running a small
                  business, and as a visual artist, has refined my communication skills and attention to detail.
                </p>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer pt-5 pb-5 text-center"></footer>
</template>

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
