<template>
  <div>
    <nav id="action-nav">
      <FilterRent />
      <AddItemRent @actionForm="actionForm" />
    </nav>

    <div v-if="form" class="modal">
      <div class="overflow" @click.prevent="actionForm(!form)">
        <div class="modal-form animation-modal" @click.stop="">
          <div class="modal-form-box">
            <h3 class="modal-form-box-title">Add new vehicle</h3>
            <svg class="modal-form-box-icon cursor" @click.prevent="actionForm(!form)" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="16" fill="#F3F4F7"/>
              <path d="M24 22.586L28.95 17.636L30.364 19.05L25.414 24L30.364 28.95L28.95 30.364L24 25.414L19.05 30.364L17.636 28.95L22.586 24L17.636 19.05L19.05 17.636L24 22.586Z" fill="#012345"/>
            </svg>
          </div>
          <div class="modal-form-img">
            <svg class="modal-form-img-icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12V15H22V17H19V20H17V17H14V15H17V12H19ZM19.008 0C19.556 0 20 0.445 20 0.993V10.342C19.3576 10.1151 18.6813 9.99944 18 10V2H2L2.001 16L11.293 6.707C11.465 6.53448 11.694 6.43073 11.9371 6.41526C12.1802 6.39979 12.4206 6.47367 12.613 6.623L12.706 6.708L16.252 10.258C15.4766 10.4943 14.7572 10.8851 14.1369 11.407C13.5167 11.9288 13.0086 12.5709 12.6432 13.2944C12.2779 14.0179 12.0628 14.808 12.0111 15.6169C11.9593 16.4258 12.0719 17.2368 12.342 18.001L0.992 18C0.728813 17.9997 0.476497 17.895 0.290489 17.7088C0.104482 17.5226 -1.33455e-07 17.2702 0 17.007V0.993C0.00183004 0.730378 0.1069 0.479017 0.292513 0.293218C0.478126 0.107418 0.72938 0.00209465 0.992 0H19.008ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#4959FF"/>
            </svg>
          </div>

          <label class="input-group">
            <input v-model="name" class="modal-form-input modal-form-name" placeholder="Name">
          </label>
          <label class="input-group">
            <input v-model="desc" class="modal-form-input modal-form-desc" placeholder="Description">
          </label>
          <label class="input-group">
            <input v-model="price" class="modal-form-input modal-form-price" placeholder="Rent price">
            <span class="modal-form-input-icon">$/h</span>
          </label>

          <button @click.prevent="addVehicle" class="modal-form-btn cursor">Complete</button>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import FilterRent from '@/components/Actionbar/FilterRent'
import AddItemRent from '@/components/Actionbar/AddItemRent'

export default {
  components: { FilterRent, AddItemRent },
  data: () => ({
    form: false,
    price: '',
    name: '',
    desc: ''
  }),
  methods: {
    addVehicle () {
      const id = "abcdefghijklmnopqrstuvwxyz";
      let newId = "";
      while (newId.length < 24) {
        newId += id[Math.floor(Math.random() * id.length)];
      }

      const objVehicle = {
        id: newId,
        name: this.name,
        type: 'custom',
        description: this.desc,
        rent: this.price,
        preview: 'https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0',
        image: 'https://loremflickr.com/900/900/airship'
      }

      this.$store.commit('addVehicle', objVehicle);

      this.price = '';
      this.name = '';
      this.desc = '';
      this.form = false;
    },
    actionForm (val) {
      this.form = this.form === val ? !val : val;

      const body = document.querySelector('body');
      if (val) {
        body.classList.add('blur');
        body.classList.add('hide');
      } else {
        body.classList.remove('blur');
        body.classList.remove('hide');
      }
    }
  }
}
</script>

<style lang="scss">
#action-nav {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2rem;
}

.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 100;

  .modal-form {
    padding: 2rem;
    width: 550px;
    background: #fff;
    position: fixed;
    right: 0;
    height: 100%;
    border-radius: 48px 0 0 48px;
    overflow: auto;

    .modal-form-box {
      display: flex;
      justify-content: space-between;
    }

    .modal-form-box-title {
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
    }

    .modal-form-img {
      width: 100%;
      height: 250px;
      background: #F3F4F7;
      border-radius: 24px;
      margin: 2rem 0;

      display: flex;
      align-items: center;

      .modal-form-img-icon {
        display: block;
        margin: 0 auto;
      }
    }

    .input-group {
      margin-bottom: 2rem;
      display: block;
      position: relative;
    }

    .modal-form-input {
      width: 100%;
      height: 56px;
      background: #F3F4F7;
      border-radius: 12px;
      border: none;
      padding: 0 1rem;
      font-weight: 300;
      font-size: 16px;
      line-height: 14px;

      &:focus {
        outline: none;
      }
    }

    .modal-form-name {

    }

    .modal-form-desc {

    }

    .modal-form-price {

    }

    .modal-form-btn {
      border: none;
      background: #4959FF;
      border-radius: 12px;
      height: 56px;
      padding: 0 2rem;
      margin: 0 auto;
      display: block;
      color: #fff;
      font-weight: 300;
      font-size: 16px;
      line-height: 14px;
      &:focus {
        outline: none;
      }
    }

    .modal-form-input-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: #99A7B5;
      font-weight: 300;
      font-size: 16px;
      line-height: 14px;
    }
  }

  .overflow {
    background: rgba(52, 79, 106, 0.32);
    backdrop-filter: blur(32px);
    width: 100%;
  }
}
</style>
