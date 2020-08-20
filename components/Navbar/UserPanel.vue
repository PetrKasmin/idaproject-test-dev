<template>
  <div class="nav-profile">
    <div class="nav-profile-item nav-profile-item--message">
      <svg class="nav-profile-item-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8.99401C1.99947 8.20621 2.15435 7.42605 2.45577 6.69819C2.75718 5.97034 3.19921 5.30909 3.75655 4.75231C4.31388 4.19553 4.97558 3.75416 5.70373 3.45348C6.43189 3.15279 7.21221 2.99869 8 3.00001H16C19.313 3.00001 22 5.69501 22 8.99401V21H8C4.687 21 2 18.305 2 15.006V8.99401ZM20 19V8.99401C19.9974 7.93451 19.5749 6.91925 18.8251 6.17063C18.0754 5.42201 17.0595 5.00106 16 5.00001H8C7.47485 4.99869 6.9546 5.10106 6.4691 5.30123C5.98359 5.50141 5.54238 5.79546 5.17076 6.16652C4.79914 6.53758 4.50443 6.97835 4.30353 7.46356C4.10262 7.94876 3.99947 8.46886 4 8.99401V15.006C4.00265 16.0655 4.42511 17.0808 5.17486 17.8294C5.9246 18.578 6.9405 18.999 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" fill="#99A7B5"/>
      </svg>
    </div>

    <div class="nav-profile-item nav-profile-item--notify">
      <svg class="nav-profile-item-icon nav-profile-icon--evenodd" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9994 8.92919C17.9998 8.96308 18 8.99702 18 9.031V18H0V9.031C0 4.043 4.03 0 9 0C9.42907 0 9.85113 0.0301334 10.2642 0.0884067C10.0921 0.696025 10 1.33726 10 2C10 2.02378 10.0001 2.04753 10.0004 2.07126C9.67364 2.0243 9.33965 2 9 2C5.134 2 2 5.148 2 9.031V16H16V9.031C16 8.99695 15.9998 8.96295 15.9993 8.92901C16.3261 8.97579 16.6602 9 17 9C17.3393 9 17.673 8.97586 17.9994 8.92919ZM10.7678 20.7678C11.2366 20.2989 11.5 19.663 11.5 19H6.5C6.5 19.663 6.76339 20.2989 7.23223 20.7678C7.70107 21.2366 8.33696 21.5 9 21.5C9.66304 21.5 10.2989 21.2366 10.7678 20.7678Z" fill="#99A7B5"/>
      </svg>
      <span class="nav-profile-item-ellipse"></span>
    </div>

    <span class="nav-profile-name"> Bessie Cooper </span>
    <img class="nav-profile-avatar" width="56" height="56" src="/avatars/avatar.png" />
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.nav-profile {
  display: flex;

  align-items: center;
  height: 100%;

  .nav-profile-item {
        
    .nav-profile-item-icon {
      vertical-align: middle;
      display: inline-block;
    }

    &.nav-profile-item--message {
      margin-right: 1rem;
    }

    &.nav-profile-item--notify {
      margin-right: 3rem;
      position: relative;

      .nav-profile-item-ellipse {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #F71D9F;
        position: absolute;
        right: 1px;
        top: 2px;
      }
    }
  }

  .nav-profile-name {
    font-size: 16px;
    font-weight: 700;
    padding: 0 1rem 0 0;
  }

  .nav-profile-avatar {
    border-radius: 50%;
  }
}
</style>
