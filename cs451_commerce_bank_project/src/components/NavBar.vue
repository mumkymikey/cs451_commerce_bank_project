<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Commerce Bank</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/notification-rules" class="nav-link"> Rules </router-link>
          <router-link to="/transactions" class="nav-link">
            Transactions
          </router-link>
        </div>
      </div>
      <router-link to="/" class="nav-link"> Logout </router-link>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
