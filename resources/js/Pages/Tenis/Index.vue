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
        <p>
            `sku`, `talla`, `color`, `u_disponible`, `modelo`, `precio`, `acabados_no_acabado`, `marca_idmarca`, `estilo_idestilo`
        </p>

        <div class="container">
            <div class="row justify-content-center vh-100 align-items-center">

                <div class="card " style="width: 50rem;">

                    <div class="card-body m-2">

                        <form>                           
                            <div class="col-md-4">
                                <label for="modelo" class="form-label">Modelo</label>
                                <input type="text" class="form-control" id="modelo">
                            </div>
                            <div class="col-md-4">
                                <label for="marca" class="form-label">Marca</label>
                                <input type="text" class="form-control" id="marca">
                            </div>
                            <div class="col-md-4">
                                <label for="color" class="form-label">Color</label>
                                <input type="text" class="form-control" id="color">
                            </div>
                            <div class="col-md-4">
                                <label for="talla" class="form-label">Talla</label>
                                <input type="text" class="form-control" id="talla">
                            </div>
                            <div class="col-md-4">
                                <label for="precio" class="form-label">Precio</label>
                                <input type="text" class="form-control" id="precio">
                            </div>
                            <div class="col-md-4">
                                <label for="stock" class="form-label">Stock</label>
                                <input type="text" class="form-control" id="stock">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text"> <i class="bi bi-key"></i> </span>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingInput" placeholder="">
                                    <label for="floatingInput">Contraseña</label>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col">
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck">
                                            <label class="form-check-label" for="gridCheck">
                                                Recordar
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <a href="">Olvidé mi contraseña</a>
                                </div>
                            </div>

                            <div class="d-grid gap-4 col-9 mx-auto mt-5 text-center">

                            </div>

                        </form>

                    </div>


                </div>
            </div>
        </div>
    </AppLayout>
</template>
