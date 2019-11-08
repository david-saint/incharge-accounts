<template>
  <auth-index :loading="submitting">
    <template v-slot:title-desktop>
      Sign Up
    </template>

    <template v-slot:title-mobile>
      Create your In-Charge account
    </template>

    <template v-slot:subtitle>
      Filll in the details below to create your In-Charge account.
    </template>

    <form action="#" @submit.prevent="validateAndSubmit">
      <div class="input-group" :class="{ '--error': $v.name.$error }">
        <label for="name">Full name</label>
        <input
          id="name"
          type="text"
          autocomplete="name"
          placeholder="John Doe"
          v-model.trim="$v.name.$model">

        <small
          class="error"
          v-if="$v.name.$dirty && !$v.name.required">
          Full name is required
        </small>

        <small class="error" v-if="!$v.name.minLength">
          Name must have at least {{ $v.name.$params.minLength.min }} letters.
        </small>
      </div>

      <div class="input-group" :class="{ '--error': $v.email.$error }">
        <label for="email">E-mail address</label>
        <input
          id="email"
          type="email"
          autocomplete="email"
          v-model.trim="$v.email.$model"
          placeholder="john.doe@example.com">

        <small
          class="error"
          v-if="$v.email.$dirty && !$v.email.required">
          Email is required
        </small>

        <small class="error" v-if="!$v.email.email">
          Email must be a valid email address
        </small>
      </div>


      <div class="input-group">
        <label for="phone">Phone Number</label>
        <input
          id="phone"
          type="text"
          v-model.trim="phone"
          placeholder="090240281032">
      </div>

      <div class="input-group" :class="{ '--error': $v.password.$error }">
        <label for="password">Enter password</label>
        <input
          id="password"
          type="password"
          placeholder="***********"
          autocomplete="current-password"
          v-model.trim="$v.password.$model">

        <small
          class="error"
          v-if="$v.password.$dirty && !$v.password.required">
          Password is required.
        </small>

        <small class="error" v-if="!$v.password.minLength">
          Password must have at least {{ $v.password.$params.minLength.min }} letters.
        </small>
      </div>

      <div class="input-group -m-0">
        <button
          type="submit"
          class="btn waves-effect waves-light primary white-text">
          <material-circular-spinner
            size="tiny"
            color="white"
            v-if="submitting"
            :active="submitting" />
          <span v-else>Get Started</span>
        </button>
      </div>
    </form>

    <template v-slot:footer>
      <div class="delimeter"><span>or</span></div>
      <div class="input-group">
        <button
          class="btn waves-effect waves-light facebook--login white-text">
          get started with facebook
        </button>
      </div>
      <p>
        By joining, you agree to In-Charge's
        <a href="#" class="primary-text">Privacy Policy</a>
        &
        <a href="#" class="primary-text">Terms of use</a>
      </p>
      <p>
        Already have an account?
        <router-link to="/login" class="primary-text">
          Login
        </router-link>
      </p>
    </template>
  </auth-index>
</template>

<script>
// Import from node_modules first
import M from 'materialize-css';
import {
  required,
  minLength,
  email as emailValidator,
} from 'vuelidate/lib/validators';
// Import from files directory.
import AuthIndex from '@/components/Auth/AuthIndex.vue';
import MaterialCircularSpinner from '@/components/Loader/MaterialCircularSpinner.vue';

// export the vue component.
export default {
  name: 'auth-signup',
  components: { AuthIndex, MaterialCircularSpinner },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      submitting: false,
    };
  },
  methods: {
    async validateAndSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }
      this.submitting = true;

      try {
        const { data: { message, redirectTo } } = await this.submit();
        // alert success
        M.toast({
          html: `<span class="success">Success!</span>&nbsp;${message}.`,
        });
        // turn off the loader
        this.submitting = false;
        // redirect when done
        this.$router.push(redirectTo);
      } catch (e) {
        const { response } = e;
        this.submitting = false;

        if (response && response.status === 422) {
          const { data: { message, errors } } = response;
          if (message) {
            M.toast({
              html: `<span class="error">Whoops!</span>&nbsp;${message}`,
            });
          }
          Object.values(errors).forEach((v) => {
            v.forEach(m => M.toast({
              html: `<span class="error">Whoops!</span>&nbsp;${m}`,
            }));
          });
        } else {
          M.toast({
            html: '<span class="error">Whoops!</span>&nbsp;Something went wrong.',
          });
        }
      }

      return true;
    },
    submit() {
      const {
        name,
        email,
        phone,
        password,
      } = this;
      const redirect = this.$auth.redirect();

      return new Promise((resolve, reject) => {
        this.$auth.register({
          fetchUser: true,
          data: {
            name,
            email,
            phone,
            password,
          },
          success: () => resolve({
            data: {
              message: 'Successfully Logged in',
              redirectTo: redirect ? redirect.from : { name: 'home' },
            },
          }),
          error: e => reject(e),
        });
      });
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(6),
    },
    email: {
      required,
      email: emailValidator,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>

<style scoped lang="scss">
.input-group {
  margin: 10px 0;

  &.--error {
    input {
      border-bottom: 1px solid $error-color !important;
      &:focus {
        box-shadow: 0 1px 0 0 $error-color !important;
      }
    }
  }

  input {
    padding: 15px;
    color: #2A2A2A;
    margin: 10px 0;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #DADAED;
    font-size: 13px !important;
    &::placeholder {
      color: #dddddd;
    }
  }
  button {
    width: 100%;
    height: 44px;
    display: flex;
    margin: 14px 0;
    font-weight: 600;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    &.facebook--login {
      background-color: #42548F;
    }
  }
  small.error {
    font-size: 9px;
    color: $error-color;
  }
}
.remember-group {
  padding: 10px 0;
  font-size: 11px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  [type="checkbox"].filled-in + span:not(.lever):after{
    border-radius: 50% !important;
  }
  [type="checkbox"] + span:not(.lever) {
    font-size: 11px;
  }
  [type="checkbox"].filled-in:checked + span:not(.lever):before {
    top: 1px;
    left: 3px;
    width: 6px;
    height: 11px;
  }
}
.delimeter {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &::before {
    content: ' ';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    background-color: #E0E0E0;
    display: block;
  }
  span {
    z-index: 1;
    font-size: 12px;
    color: #585F6D;
    padding: 2px 6px;
    background-color: #fff;
    text-transform: uppercase;
  }
}
.-m-0 {margin: 0;}
</style>
