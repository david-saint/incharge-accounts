<template>
  <auth-index :loading="submitting">
    <template v-slot:title-desktop>
      Reset Password
    </template>

    <template v-slot:title-mobile>
      Enter a new password
    </template>

    <template v-slot:subtitle>
      Please enter a new password for your In-Charge account.
    </template>

    <form action="#" @submit.prevent="validateAndSubmit">
      <div class="input-group">
        <label for="email">E-mail address</label>
        <input
          id="email"
          type="email"
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

      <div class="input-group" :class="{ '--error': $v.password.$error }">
        <label for="password">Enter new password</label>
        <input
          id="password"
          type="password"
          placeholder="***********"
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
      <div class="input-group" :class="{ '--error': $v.confirmPassword.$error }">
        <label for="confirm-password">Confirm new password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="***********"
          v-model.trim="$v.confirmPassword.$model">

        <small class="error" v-if="!$v.confirmPassword.sameAsPassword">
          Passwords must be identical.
        </small>
      </div>
      <div class="input-group">
        <button class="btn waves-effect waves-light primary white-text" type="submit">Next</button>
      </div>
    </form>
  </auth-index>
</template>

<script>
// Import from node_modules first
import M from 'materialize-css';
import {
  sameAs,
  required,
  minLength,
  email as emailValidator,
} from 'vuelidate/lib/validators';
// Import from files directory.
import { BASE_API } from '@/config';
import AuthIndex from '@/components/Auth/AuthIndex.vue';

// export the vue component.
export default {
  name: 'auth-reset',
  components: { AuthIndex },
  data() {
    return {
      email: '',
      password: '',
      submitting: false,
      confirmPassword: '',
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
        M.toast({
          html: `<span class="success">Success!</span>&nbsp;${message}.`,
        });
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
      const { email, password, confirmPassword } = this;
      return this.$http
        .post(`${BASE_API}/user/password/reset`, {
          email,
          password,
          password_confirmation: confirmPassword,
          token: this.$route.params.token,
        });
    },
  },
  validations: {
    email: {
      required,
      email: emailValidator,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    confirmPassword: {
      sameAsPassword: sameAs('password'),
    },
  },
};
</script>

<style scoped lang="scss">
.input-group {
  margin: 15px 0;

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
    font-size: 14px !important;
    &::placeholder {
      color: #dddddd;
    }
  }
  button {
    margin: 14px 0;
    width: 100%;
    height: 44px;
    font-weight: 600;
    border-radius: 4px;
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
  padding: 10px;
  font-size: 13px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  [type="checkbox"].filled-in + span:not(.lever):after{
    border-radius: 50% !important;
  }
  [type="checkbox"] + span:not(.lever) {
    font-size: 12px;
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
</style>
