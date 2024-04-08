<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Agregar Producto
            </h2>
        </template>

        <div class="container">
            <div class="row justify-content-center vh-100 align-items-center">

                
            </div>
        </div>
    </AppLayout>
</template>

<script>
export default {
    data() {
        return {
            form: {
                modelo: '',
                marca: '',
                color: '',
                talla: '',
                precio: '',
                stock: '',
                estilo: '',
            }
        }
    },
    methods: {
        crearTenis() {
            this.$inertia.post('/tenis', this.form);
        }
    }
}
</script>
