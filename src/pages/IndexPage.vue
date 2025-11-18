<template>
  <q-page class="row items-center justify-evenly">
    <q-form @submit="onSubmit" class="row q-gutter-md">
      <q-input outlined v-model="NewUser.name" label="Nome" class="col-md-12 col-sm-12 col-lg-12">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="NewUser.surname"
        label="Sobrenome"
        class="col-md-12 col-sm-12 col-lg-12"
        :rules="[]"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        type="number"
        outlined
        v-model="NewUser.age"
        label="Idade"
        class="col-md-12 col-sm-12 col-lg-12"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        type="number"
        outlined
        v-model="NewUser.email"
        label="Email"
        class="col-md-12 col-sm-12 col-lg-12"
      >
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="NewUser.cpf"
        label="CPF"
        mask="###.###.###-##"
        unmasked-value
        class="col-md-12 col-sm-12 col-lg-12"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <div class="col-12">
        <q-btn
        label="ENVIAR"
        type="submit"
        color="primary"
        class="float-right" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';

interface form {
  name: string;
  surname: string;
  age: number | null;
  cpf: number | null;
  email: string;
  password: string;
}
const NewUser = ref<form>({
  name: '',
  surname: '',
  age: null,
  cpf: null,
  email: '',
  password: '',
});

function onSubmit() {
  console.log('formulário enviado');
}

const meta = ref<Meta>({
  totalCount: 1200,
});
</script>
