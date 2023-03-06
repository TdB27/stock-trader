<template>
  <v-card elevation="3" min-width="360" max-width="360" class="card">
    <v-toolbar color="#409744" dark>
      <v-card-title>
        {{ acao.nameAction }} (Preço: R$ {{ acao.value }})
      </v-card-title>
    </v-toolbar>
    <v-card-text class="px-5 py-5">
      <v-row>
        <div class="input-group" :class="colorInput">
          <label>Quantidade </label>
          <input
            :id="'input-' + acao.id"
            type="number"
            v-model.number="qntd"
            @keyup="takeQntdAcoes"
            class="form-control" />
        </div>
        <div class="btn">
          <v-btn
            large
            color="#409744"
            class="white--text"
            :disabled="btnDisabled">
            Comprar
          </v-btn>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    acao: Object,
    rulesAditional: Boolean,
  },
  data() {
    return {
      qntd: 0,
      colorInput: "",
      btnDisabled: true,
    };
  },
  methods: {
    takeQntdAcoes() {
      if (this.qntd > 0) this.btnDisabled = false;
      else this.btnDisabled = true;

      if (this.qntd < 0) return (this.colorInput = "unlaw");
      else if (this.qntd >= 0) return (this.colorInput = "");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 8px;
}

.input-group {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  &:focus-within {
    label {
      color: blue;
    }

    input {
      border-bottom: 1px solid blue;
    }
  }

  &.unlaw {
    label {
      color: red;
    }

    input {
      border-bottom: 1px solid red;
    }
  }

  input {
    outline: none;
    border-bottom: 1px solid #b3b3b3;
    font-weight: 900;
  }
}

.btn {
  width: 25%;
}
</style>
