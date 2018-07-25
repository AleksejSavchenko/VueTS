<template>
    <div>Hello {{ number }}</div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data() {
            return {
                number: 0
            }
        },
        mounted() {
            window.setInterval(() => {
                this.number++
            }, 1000)
        }
    })
</script>