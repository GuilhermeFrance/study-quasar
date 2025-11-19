<template>
  <q-page class="row items-center justify-evenly">
    <q-form @submit="onSubmit" class="row q-gutter-md" ref="myForm">
      <q-input
        outlined
        v-model="NewUser.name"
        label="Nome"
        class="col-md-8 col-sm-8 col-lg-8"
        :rules="[(val) => (val && val.length > 0) || 'Este campo eh obrigatorio']"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="NewUser.surname"
        label="Sobrenome"
        class="col-md-8 col-sm-8 col-lg-8"
        :rules="[(val) => (val && val.length > 0) || 'Este campo eh obrigatorio']"
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
        class="col-md-8 col-sm-8 col-lg-8"
        :rules="[
          (val) => (val && val !== null) || 'Este campo eh obrigatorio',
          (val) => (val > 0 && val < 100) || 'Insira uma idade valida',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="NewUser.email"
        label="Email"
        class="col-md-8 col-sm-8 col-lg-8"
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo eh obrigatorio',
          (val) => val.length > 7 || 'Insira um email valido',
        ]"
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
        class="col-md-8 col-sm-8 col-lg-8"
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo eh obrigatorio',
          (val) => (val && val.length === 11) || 'Insira um CPF valido',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        outlined
        v-model="NewUser.password"
        label="Senha"
        type="password"
        class="col-md-8 col-sm-8 col-lg-8"
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo eh obrigatorio',
          (val) => val.length > 8 || 'Insira uma senha valida (min. 8 caracteres)',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="password" />
        </template>
      </q-input>

      <q-select
        outlined
        v-model="NewUser.badge"
        :options="BadgeOptions"
        option-label="name"
        option-value="key"
        label="Badge/Função"
        map-options
        class="col-md-8 col-sm-8 col-lg-8"
        emit-value
        :rules="[(val) => (val && val.length > 0) || 'Este campo eh obrigatorio']"
      >
        <template v-slot:prepend>
          <q-icon name="badge" />
        </template>
      </q-select>
      <q-option-group
        label="Sexo"
        :options="SexOptions"
        option-label="name"
        option-value="key"
        type="radio"
        v-model="NewUser.sex"
        class="col-md-8 col-sm-8 collg-8"
      >
      </q-option-group>
      <div class="col-8">
        <q-btn label="ENVIAR" type="submit" color="primary" class="float-right" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { Notify } from 'quasar';

const myForm = ref<HTMLFormElement | null>(null);

const BadgeOptions = ref<object[]>([
  { key: 'admin', name: 'Admin' },
  { key: 'manager', name: 'Manager' },
  { key: 'requester', name: 'Requester' },
  { key: 'employee', name: 'Employee' },
]);

const SexOptions = ref<object[]>([
  { key: 'M', name: 'Masculino' },
  { key: 'F', name: 'Feminino' },
  { key: 'NI', name: 'Nao informado' },
]);

interface form {
  name: string;
  surname: string;
  age: number | null;
  cpf: number | null;
  email: string;
  password: string;
  badge: string;
  sex: string;
}
const NewUser = ref<form>({
  name: '',
  surname: '',
  age: null,
  cpf: null,
  email: '',
  password: '',
  badge: '',
  sex: 'NI',
});

function onSubmit() {
  Notify.create({
    message: 'Cadastro realizado com sucesso',
    color: 'positive',
    icon: 'check_circle',
  });
  resetForm();
}

function resetForm() {
  if (myForm.value) {
    myForm.value.reset();
  }
  NewUser.value = {
    name: '',
    surname: '',
    age: null,
    cpf: null,
    email: '',
    password: '',
    badge: '',
    sex: 'NI',
  };
}

const meta = ref<Meta>({
  totalCount: 1200,
});
</script>
