<template>
    <div>
        <v-card class="mx-auto text-center" max-width="368">
            <v-card-item>
                <v-card-title>
                    Communal Door Control
                </v-card-title>
            </v-card-item>

            <v-card-item>
                <v-icon icon="mdi-door-open" size="150" color="success"></v-icon>
            </v-card-item>

            <v-card-actions>
                <v-btn
                    :loading="loading"
                    :disabled="loading"
                    variant="outlined"
                    @click="sendDoorOpen()"
                    block
                >
                Open
                </v-btn>
            </v-card-actions>
        </v-card>
        
    </div>
</template>

<style>

</style>

<script setup lang="ts">
    import axios from 'axios'
    import { ref } from 'vue'
    
    const loading = ref(false)
    
    function sendDoorOpen() {
        loading.value = true
        setTimeout(() => (loading.value = false), 4000)
        axios({
            method: "post",
            url: import.meta.env.VITE_WEBHOOK,
            headers: {
                "content-type": "application/json"
            }
        })
        .then(console.log)
        .catch(console.log)
    }
</script>