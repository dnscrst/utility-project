<template>
    <div class="hamburger-menu" @click="openIcon" :class="{'is-open': isOpen}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: 'HamburgerMenu',
    props: ['isOpen'],
    methods: {
        openIcon() {
            this.$emit('action')
        }
    },
}
</script>

<style lang="scss">
.hamburger-menu {
    cursor: pointer;

    span {
        display: block;
        width: 33px;
        border-bottom: 1px solid black;
        transition: transform 0.2s ease-in-out;

        &:first-child,
        &:last-child {
            animation: close 0.2s normal forwards ease-in-out;
        }

        &:first-child {
            transform: translateY(-8px);
        }

        &:nth-child(3) {
            transform: translateY(-1px);
        }

        &:last-child {
            transform: translateY(7px);
        }

@media only screen and (min-width: 768px) {
            display: none;
        }
    }

    &.is-open {
        span {

            &:first-child,
            &:last-child {
                animation: open 0.2s normal forwards ease-in-out;
            }

            &:nth-child(2) {

                transform: rotate(-45deg);
            }

            &:nth-child(3) {
                transform: rotate(45deg);
            }
        }
    }
}

@keyframes open {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@keyframes close {
    0% {
        opacity: 0;
    }

    95% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>