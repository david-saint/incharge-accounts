<template>
  <auth-index :loading="submitting">
    <template v-slot:title-desktop>
      Forgot Password
    </template>

    <template v-slot:title-mobile>
      Enter the email to retrieve password
    </template>

    <template v-slot:subtitle>
      Fill in the email address of the account you wish to retrieve password for.
    </template>

    <form action="#" @submit.prevent="validateAndSubmit">
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

      <div class="input-group -m-0">
        <button
          type="submit"
          class="btn waves-effect waves-light primary white-text">
          <material-circular-spinner
            size="tiny"
            color="white"
            v-if="submitting"
            :active="submitting" />
          <span v-else>Get Retrieval Link</span>
        </button>
      </div>
    </form>

    <template v-slot:footer>
      <div class="delimeter"><span>or</span></div>
      <p>
        Don't have an account?
        <router-link to="/signup" class="primary-text">
          Sign Up Now
        </router-link>
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
  email as emailValidator,
} from 'vuelidate/lib/validators';
// Import from files directory.
import { BASE_API } from '@/config';
import AuthIndex from '@/components/Auth/AuthIndex.vue';
import MaterialCircularSpinner from '@/components/Loader/MaterialCircularSpinner.vue';

// export the vue component.
export default {
  name: 'auth-login',
  components: { AuthIndex, MaterialCircularSpinner },
  data() {
    return {
      email: '',
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
        const { data: { message } } = await this.submit();
        // alert success
        M.toast({
          html: `<span class="success">Success!</span>&nbsp;${message}.`,
        });
        // turn off the loader
        this.submitting = false;
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
      const { email } = this;
      return this.$http
        .post(`${BASE_API}/user/password/email`, {
          email,
          token: this.$route.params.token,
        });
    },
  },
  validations: {
    email: {
      required,
      email: emailValidator,
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
