<template>
    <div>
        <p class="info-text">{{ vehicle.specifications_text }}</p>

        <b class="info-title">Features:</b>

        <ul class="info-details">
            <li>
                <div class="info-details-wrap">
                    <svg class="info-details-wrap-icon" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3333 18.584V21.3333H23V24H7V21.3333H13.6667V18.584C11.0889 18.2589 8.71842 17.0044 7 15.0557C5.28158 13.107 4.33338 10.5981 4.33333 8V0H25.6667V8C25.6666 10.5981 24.7184 13.107 23 15.0557C21.2816 17.0044 18.9111 18.2589 16.3333 18.584ZM0.333332 2.66667H3V8H0.333332V2.66667ZM27 2.66667H29.6667V8H27V2.66667Z" fill="#677B8F"/>
                    </svg>
                </div>

                <div class="info-details-text">
                    <h3 class="info-details-text-title">A challenge for a true champion</h3>
                    <p class="info-details-text-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </li>

            <li>
                <div class="info-details-wrap">
                    <svg class="info-details-wrap-icon" width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9413 18.752C18.4867 20.1627 21.096 23.4187 21.584 27.3333H0.416004C0.904004 23.4187 3.51334 20.1627 7.05867 18.752L11 24.6667L14.9413 18.752ZM19 0.666656V8.66666C19 13.0853 15.4187 16.6667 11 16.6667C6.58134 16.6667 3 13.0853 3 8.66666V0.666656H19ZM16.3333 8.66666H5.66667C5.66667 11.6133 8.05334 14 11 14C13.9467 14 16.3333 11.6133 16.3333 8.66666Z" fill="#677B8F"/>
                    </svg>
                </div>
                <div class="info-details-text">
                    <h3 class="info-details-text-title">Pilot's sweaty hands</h3>
                    <p class="info-details-text-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    props: ['vehicle']
}
</script>

<style lang="scss">
.info-text {
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: #677B8F;
    padding: 0 0 2rem;
}

.info-details {
    padding: 2rem 0 0;

    li {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0.5rem 0;

        .info-details-wrap {
          width: 130px;
          height: 96px;
          margin-right: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #F3F4F7;
          border-radius: 16px;

          .info-details-wrap-icon {

          }
        }

        .info-details-text {

          .info-details-text-title {
            font-weight: bold;
            font-size: 16px;
            line-height: 152%;
            color: #012345;
          }
          .info-details-text-desc {
            font-weight: 300;
            font-size: 14px;
            line-height: 146%;
            color: #677B8F;
          }
        }
    }
}

.info-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
    color: #012345;
}
</style>
