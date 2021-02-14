<template>
  <div>
    <q-row>
      <q-col offset="4" cols="4">
        <div
          tabindex="0"
          class="upload--field"
        >
          <!-- @click="handleUploadClick"
          @keyup.enter="handleUploadClick" -->
          Перенесите файл сюда!
        </div>
      </q-col>
    </q-row>

    <ul class="preview--list">
      <li class="preview--item">
        <p>Здесь будут отображаться ваши загруженные файлы.</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FileUploader',
  data() {
    return {
    }
  },
  methods: {
  },
}
