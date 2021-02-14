<template>
  <div>
    <q-row>
      <q-col offset="4" cols="4">
        <div
          tabindex="0"
          @drop.prevent="uploadFile"
          @dragenter.prevent
          @dragover.prevent
          @dragleave.prevent
          @click="handleUploadEvent"
          @keyup.enter="handleUploadEvent"
          class="upload--field"
        >
          <!-- @click="handleUploadClick"
          @keyup.enter="handleUploadClick" -->
          Перенесите файл сюда!
        </div>
      </q-col>
    </q-row>

    <q-row class="btn--wrapper">
      <q-button
        @click="sendFiles"
        class="btn--upload"
        type="default"
        theme="secondary"
        size="medium"
        :loading="false"
        :disabled="false"
        :circle="false"
        :fullWidth="false"
      >
        Отправить
      </q-button>
    </q-row>

    <ul class="preview--list">
      <li v-if="!files.length" class="preview--item-default">
        <p>Здесь будут отображаться ваши загруженные файлы.</p>
      </li>
      <li
        v-else
        v-for="elem in files"
        :key="elem.name"
        class="preview--item"
      >
        <div v-if="elem.type.startsWith('image')" class="file--wrapper">
          <img :title="elem.name" :alt="elem.name" ref="preview">
          <span>{{elem.name}}</span>
        </div>
        <div v-else class="file--wrapper" ref="preview">
          <div class="file--common-file">
            <span class="q-icon-file"></span>
          </div>
          <span>{{elem.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FileUploader',
  data() {
    return {
      files: [],
      filesBase64: [],
    }
  },
  methods: {
    //  Отправка загруженных файлов
    sendFiles() {
      console.log('Загруженные файлы:\r\n', this.filesBase64.map((file, i) => `${i+1}. ${this.files[i].name}: ${file}`).join('\r\n'))
    },

    //  Загрузка файлов на страницу
    uploadFile({ dataTransfer, target }) {
      (dataTransfer ?? target)?.files?.forEach(file => {
        if (this.files.some(el => el.name === file.name)) {
          console.log(`Файл "${file.name}" уже загружен!`)
          return
        }

        const index = this.files.length
        this.files.push(file)
        this.showPreview(index)
      })
    },

    //  Инициация загрузки файлов при клике на поле
    handleUploadEvent() {
      let input = document.createElement('input')
      input.type = 'file'
      input.multiple = true
      input.onchange = this.uploadFile
      input.onerror = e => console.log('Error:', e)
      input.click()
    },

    //  Вывод изображений и заглушек для обычных файлов в превью
    showPreview(index) {
      const file = this.files[index],
            reader = new FileReader

      reader.addEventListener('load', () => {
        this.filesBase64.push(reader.result)
        this.$refs.preview[index].src = reader.result
      })
      this.$nextTick(() => {
        reader.readAsDataURL(file)
      })
    }
  },
}
</script>
