<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#"  @submit.prevent="Login">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      value
                      autofocus
                      v-model="email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                      v-model="password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  export default {
    name: "LoginComponent",
    setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)

      const store = useStore()
      const router = useRouter()

      const Login = async () => {
        try {
          await store.dispatch('logIn', {
            email: email.value,
            password: password.value
          })
          router.push('/')
        }
        catch (err) {
          error.value = err.message
        }
      }
      return { Login, email, password, error }
    }
  };
</script>

<style>
  .container {
    padding: 30px;
    box-shadow: 10px 10px 18px -4px rgba(0,0,0,0.43);
    background-color: #f7f7f7;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99A3BA;
    border: 1px solid #CDD9ED;
    background: #fff;
    transition: border .3s ease;
  }
  .form-control ::placeholder {
     color: #CBD1DC;
   }
  .form-control :focus {
     outline: none;
     border-color: #275EFE;
   }
  .card-header {
    font-size: 18px;
    padding-bottom: 15px;
  }
  form .form-group.row {
    padding-block: 6px;
  }
  .form-group.row .col-md-6 {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .row {
    display: flex;
  }
  .form-group.row.mb-0 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn.btn-primary {
    margin-top: 20px;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #eee;
    text-shadow: none;
    height: 36px;
    width: calc(100% + 50px);
    background: #016ABC;
  }
</style>