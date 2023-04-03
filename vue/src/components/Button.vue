<template>
    <button @click="$emit('test-click')"><slot></slot></button>
</template>

<script>
    export default {
        name:"Button",
    }
    
</script>

