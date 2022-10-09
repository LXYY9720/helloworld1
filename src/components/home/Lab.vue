<template>
    <div class='funtab'>
        <fun-tabs class="funtab" v-model="value">
            <fun-tab-item name="1" title="东南" />
            <fun-tab-item name="2" title="大学" />
            <fun-tab-item name="3" title="止于" />
            <fun-tab-item name="4" title="至善" />
            <fun-tab-item name="5" title="文创" />
            <fun-tab-item name="6" title="周边" />
        </fun-tabs>
    </div>
</template>
<script setup>
import { FunTabs, FunTabItem } from 'fun-tab';
import { ref } from 'vue'
const value = ref('1')
</script>
<style scoped>
</style>