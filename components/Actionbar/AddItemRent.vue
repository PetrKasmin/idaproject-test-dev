<template>

  <div class="add-item">
    Add new
    <span class="add-item-btn cursor">
      <svg class="add-item-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#FCFCFC"/>
      </svg>
    </span>
  </div>

</template>

<script>

export default {

}
</script>

<style lang="scss">
.add-item {
  color: #4959FF;
  font-weight: 600;
  font-size: 24px;

  display: flex;

  flex-wrap: wrap;
  align-items: center;
  height: 100%;

  .add-item-btn {
    background: #4959FF;
    border-radius: 16px;
    width: 48px;
    height: 48px;
    line-height: 42px;
    margin-left: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    .add-item-icon {

    }
  }
}
</style>
