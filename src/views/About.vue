<template>
  <div class="about">
      <div class="jumbotron mt-3">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4">
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
      </div>
      <div class="text-center m-5">
          <h2>Our Services</h2>
      </div>
      <div class="row">
          <div class="col-lg-6">
              <ul class="list-unstyled">
                  <li class="media">
                      <img class="mr-3" src="../assets/demo.jpg" alt=" image" height="50px">
                      <div class="media-body">
                          <h5 class="mt-0 mb-1">List-based media object</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                  </li>
                  <li class="media my-4">
                      <img class="mr-3" src="../assets/demo.jpg" alt="image" height="50px">
                      <div class="media-body">
                          <h5 class="mt-0 mb-1">List-based media object</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                  </li>
                  <li class="media">
                      <img class="mr-3" src="../assets/demo.jpg" alt="image" height="50px">
                      <div class="media-body">
                          <h5 class="mt-0 mb-1">List-based media object</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                  </li>
              </ul>
          </div>
          <div class="col-lg-6">
              <ul class="list-unstyled">
                  <li class="media">
                      <img class="mr-3" src="../assets/demo.jpg" alt=" image" height="50px">
                      <div class="media-body">
                          <h5 class="mt-0 mb-1">List-based media object</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                  </li>
                  <li class="media my-4">
                      <img class="mr-3" src="../assets/demo.jpg" alt="image" height="50px">
                      <div class="media-body">
                          <h5 class="mt-0 mb-1">List-based media object</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                  </li>
                  <li class="media">
                      <img class="mr-3" src="../assets/demo.jpg" alt="image" height="50px">
                      <div class="media-body">
                          <h5 class="mt-0 mb-1">List-based media object</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div class="text-center m-5">
          <h2>Card Section</h2>
      </div>
      <div class="card-group">
          <div class="card p-3">
              <img class="card-img-top" src="https://picsum.photos/600/300/?image=25" alt="image">
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
          <div class="card p-3">
              <img class="card-img-top" src="https://picsum.photos/600/300/?image=25" alt="image">
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
          <div class="card p-3">
              <img class="card-img-top" src="https://picsum.photos/600/300/?image=25" alt="image">
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
              </div>
          </div>
      </div>
  </div>
</template>
<script>


export default {
    components: {
        name: 'About',
    },
    mounted() {
        if (localStorage.token) {
            this.token = localStorage.token;
        }
    },
    data(){
        return{
            token:'',
        }
    },
}
</script>