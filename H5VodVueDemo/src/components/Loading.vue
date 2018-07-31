<template>
    <div class="az-loading">
        <i v-for="(color, index) in colorList" :style="{backgroundColor: color}"></i>
    </div>
</template>
<script>
    export default {
        props: {
            colorList: {
                type: Array
            }
        }
    }
</script>
<style lang="scss">
    .az-loading {
        text-align: center;
        i {
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid #fff;
            margin: 0 6px;
            &:nth-child(1) {
                animation: azloading 1.4s linear .48s infinite;
            }
            &:nth-child(2) {
                animation: azloading 1.4s linear .36s infinite;                
            }
            &:nth-child(3) {
                animation: azloading 1.4s linear .24s infinite;                
            }
            &:nth-child(4) {
                animation: azloading 1.4s linear .12s infinite;                
            }
            &:nth-child(5) {
                animation: azloading 1.4s linear infinite;                
            }
        }
    }
    @keyframes azloading {
        0% {transform: translateY(0)}
        42% {transform: translateY(45px)}
        66% {transform: translateY(0)}
        100% {transform: translateY(0)}
    }
</style>