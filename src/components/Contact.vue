<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button
            class="modal-button"
            @click="$emit('close')"
          >
            X
          </button>
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              action="/"
            >
              <p class="hidden">
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field">
                </label>
              </p>
              <p>
                <label>Name: <input
                  type="text"
                  name="name"
                ></label>
              </p>
              <p>
                <label>Email: <input
                  type="text"
                  name="email"
                ></label>
              </p>
              <p>
                <label>Message: <textarea name="message" /></label>
              </p>
              <div class="modal-footer">
                <p>
                  <button
                    type="submit"
                    class="modal-button"
                    @click="$emit('close')"
                  >
                    Send
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;

  input[name="name"] {
    margin-left: 2.5em;
  }
  input[name="email"] {
    margin-left: 2.75em;
  }
  textarea[name="message"] {
    margin-left: 0.5em;
  }
}

.modal-button {
  background: #6fc0be;
  color: #fff;
  float: right;
  font-size: 1em;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
