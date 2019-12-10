<template>
  <div class="about">
    <q-header elevated class="bg-grey">
        <q-toolbar>
        <q-btn @click="$router.push({ name: 'Home', params: { userId: '123' } })" flat round dense icon="arrow_back" class="q-mr-sm" />
        <q-space ></q-space>
        <q-toolbar inset>
            <q-toolbar-title>
                <strong>Edmonton</strong><br>
                <small>test</small>
            </q-toolbar-title>
        </q-toolbar>
        <q-btn flat round dense icon="more_vert" />
        </q-toolbar>
    </q-header>
  </div>
</template>
