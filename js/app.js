const app = Vue.createApp({
  data() {
    return {

    }
  },
  methods: {

  },
})

app.component('container',{
  template: `
    <iconsDiv v-for="(browser,i) in browsers" :key="i" :name="browser" />
  `,
  components: ['iconsDiv'],
  data() {
    return {
      browsers: [
        'chrome',
        'firefox',
        'safari',
        'ms edge'
      ]
    }
  },
  methods: {
    
  },
})

app.component('iconsDiv',{
  template: `
     <div>
      {{name}}
     </div>
    `,
  props: ['name'],
  computed: {
    
  },
  data() {
    return {
    }
  },
  methods: {
    
  },
})

// app.component('login-form',{
//   template: `
//     <h1>{{title}}</h1>
//     <form @submit.prevent="handleSubmit">
//       <custum-input v-for="(input,i) in inputs" :key="i" v-model="input.value" :label="input.label" :type="input.type" :req="input.required"/>
//       <button  type="submit">Submit</button>
//     </form>
//   `,
//   components: ['custom-input'],
//   data() {
//     return {
//       title: 'Login Form',
//       inputs: [
//         {
//           label: 'Email',
//           value: '',
//           type: 'email',
//           required : true
//         },
//         {
//           label: 'Password',
//           value: '',
//           type: 'password',
//           required : true
//         },
//         {
//           label: 'Name',
//           value: '',
//           type: 'text',
//           required : true
          
//         }
//       ],
//     }
//   },
//   methods: {
//     handleSubmit() {
//       console.log(this.inputs[0].value,this.inputs[1].value,this.inputs[2].value)
//     }
//   },
// })

// app.component('custum-input',{
//   template: `
//     <label>
//       {{ label }}
//       <input :type="type" v-model='inputValue' :required="req">
//     </label>  
//     `,
//   props: ['label','modelValue','type','req'],
//   computed: {
//     inputValue: {
//       get() {
//         return this.modelValue
//       },
//       set(value) {
//         this.$emit('update:modelValue', value)
//       }
//     }
//   },
//   data() {
//     return {
//       val:'',
//     }
//   },
//   methods: {
    
//   },
// })

app.mount('#app')
