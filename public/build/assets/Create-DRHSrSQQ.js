import{o as i,c as d,w as a,a as o,i as n,l as e,E as r}from"./app-D1vjoV9q.js";import{_ as m}from"./AppLayout-HwJlFk7G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c=o("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Agregar Producto ",-1),f={class:"container"},p={class:"row justify-content-center vh-100 align-items-center"},u={class:"card",style:{width:"50rem"}},_={class:"card-body m-2"},b={class:"row"},h={class:"col-md-4"},v=o("label",{for:"modelo",class:"form-label"},"Modelo",-1),y={class:"col-md-4"},g=o("label",{for:"marca",class:"form-label"},"Marca",-1),k={class:"col-md-4"},V=o("label",{for:"color",class:"form-label"},"Color",-1),w={class:"col-md-4"},U=o("label",{for:"talla",class:"form-label"},"Talla",-1),T={class:"col-md-4"},M=o("label",{for:"precio",class:"form-label"},"Precio",-1),B={class:"col-md-4"},C=o("label",{for:"stock",class:"form-label"},"Stock",-1),j={class:"col-md-4"},A=o("label",{for:"estilo",class:"form-label"},"Estilo",-1),D=o("div",{class:"d-grid gap-4 col-9 mx-auto mt-5 text-center"},[o("button",{type:"submit",class:"btn btn-primary"},"Agregar")],-1),E={data(){return{form:{modelo:"",marca:"",color:"",talla:"",precio:"",stock:"",estilo:""}}},methods:{crearTenis(){this.$inertia.post("/tenis",this.form)}}},O=Object.assign(E,{__name:"Create",setup(P){return(t,s)=>(i(),d(m,{title:"Dashboard"},{header:a(()=>[c]),default:a(()=>[o("div",f,[o("div",p,[o("div",u,[o("div",_,[o("form",{action:"/tenis",onSubmit:s[7]||(s[7]=n((...l)=>t.crearTenis&&t.crearTenis(...l),["prevent"]))},[o("div",b,[o("div",h,[v,e(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=l=>t.form.modelo=l),class:"form-control",id:"modelo"},null,512),[[r,t.form.modelo]])]),o("div",y,[g,e(o("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=l=>t.form.marca=l),class:"form-control",id:"marca"},null,512),[[r,t.form.marca]])]),o("div",k,[V,e(o("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=l=>t.form.color=l),class:"form-control",id:"color"},null,512),[[r,t.form.color]])]),o("div",w,[U,e(o("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=l=>t.form.talla=l),class:"form-control",id:"talla"},null,512),[[r,t.form.talla]])]),o("div",T,[M,e(o("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=l=>t.form.precio=l),class:"form-control",id:"precio"},null,512),[[r,t.form.precio]])]),o("div",B,[C,e(o("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=l=>t.form.stock=l),class:"form-control",id:"stock"},null,512),[[r,t.form.stock]])]),o("div",j,[A,e(o("input",{type:"text","onUpdate:modelValue":s[6]||(s[6]=l=>t.form.estilo=l),class:"form-control",id:"estilo"},null,512),[[r,t.form.estilo]])])]),D],32)])])])])]),_:1}))}});export{O as default};