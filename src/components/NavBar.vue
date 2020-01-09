<template>
    <b-navbar class="navbar" style="width: 100%" fixed="bottom sticky">
      <b-navbar-nav justified class="flex-grow-1">
        <b-nav-item to="/home"><b-icon-house font-scale="2" class="border rounded"></b-icon-house></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav justified class="flex-grow-1">
        <b-nav-item to="/"><b-icon-search font-scale="2" class="border rounded"></b-icon-search></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav justified class="flex-grow-1">
        <b-nav-item to="/notifications"><b-icon-bell font-scale="2" class="border rounded"></b-icon-bell></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav justified class="flex-grow-1">
        <b-nav-item to="/"><b-icon-person font-scale="2" class="border rounded"></b-icon-person></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<style scoped>

.navbar {
  background-color: #ddd;
  border-top: 1px solid #aaa;
}

</style>