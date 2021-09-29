<template>
    <editor 
      @focusout="getcntnt($event.target.innerHTML)"
      :init=" {
        height: 500,
        menubar: true,
        skin: 'oxide-dark',
        content_css: 'dark',
        language: 'sv_SE',
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
                 alignleft aligncenter alignright alignjustify | \
                 bullist numlist outdent indent | removeformat | help'
      } "
    />
</template>

<script>
  // import { onUpdated } from '@vue/runtime-core'
  import Editor from '@tinymce/tinymce-vue'

  export default {
    name: 'TinyTxt',
    components: {
      'editor': Editor
    },
    props: {
      getcntnt: Function
    },
  }
</script>

<style>
  .tox-notifications-container {
    display: none;
  }

  .tox-statusbar__branding > a[aria-label="Powered by Tiny"] {
    font-size: 0;
  }
  .tox-statusbar__branding > a:after {
    content: 'Tiny';
    font-size: 12px;
  }

</style>
