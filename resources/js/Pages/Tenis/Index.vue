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

                <div class="card " style="width: 50rem;">

                    <div class="card-body m-2">

                        <form action="/tenis" @submit.prevent="crearTenis">
                            <div class="row ">
                                <div class="col-md-4">
                                    <label for="modelo" class="form-label">Modelo</label>
                                    <input type="text" v-model="form.modelo" class="form-control" id="modelo">
                                </div>
                                <div class="col-md-4">
                                    <label for="marca" class="form-label">Marca</label>
                                    <input type="text" v-model="form.marca" class="form-control" id="marca">
                                </div>
                                <div class="col-md-4">
                                    <label for="color" class="form-label">Color</label>
                                    <input type="text" v-model="form.color" class="form-control" id="color">
                                </div>
                                <div class="col-md-4">
                                    <label for="talla" class="form-label">Talla</label>
                                    <input type="text" v-model="form.talla" class="form-control" id="talla">
                                </div>
                                <div class="col-md-4">
                                    <label for="precio" class="form-label">Precio</label>
                                    <input type="text" v-model="form.precio" class="form-control" id="precio">
                                </div>
                                <div class="col-md-4">
                                    <label for="stock" class="form-label">Stock</label>
                                    <input type="text" v-model="form.stock" class="form-control" id="stock">
                                </div>
                                <div class="col-md-4">
                                    <label for="estilo" class="form-label">Estilo</label>
                                    <input type="text" v-model="form.estilo" class="form-control" id="estilo">
                                </div>
                            </div>

                            <div class="d-grid gap-4 col-9 mx-auto mt-5 text-center">
                                <button type="submit" class="btn btn-primary">Agregar</button>
                            </div>

                        </form>

                    </div>


                </div>
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
