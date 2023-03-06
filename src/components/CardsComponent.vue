<template>
  <v-card elevation="3" min-width="360" max-width="360" class="card">
    <v-toolbar :color="configDefault.colorCard" dark height="100">
      <v-card-title>
        {{ acao.nameAction }}
        <br />
        (Preço: R$ {{ acao.value }}
        {{ acao.qntdAcoes ? " | Qtde: " + acao.qntdAcoes : "" }})
      </v-card-title>
    </v-toolbar>
    <v-card-text class="px-5 py-5">
      <div class="d-flex">
        <div class="input-group" :class="colorInput">
          <label>Quantidade </label>
          <input
            :id="'input-' + acao.id"
            type="number"
            v-model.number="qntd"
            class="form-control" />
        </div>
        <div class="btn">
          <v-btn
            large
            color="#409744"
            class="white--text"
            @click="$emit('clickButton', { acao, qntd })"
            :disabled="btnDisabled">
            {{ configDefault.buttonDescription }}
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    acao: Object,
    configDefault: Object,
    rulesAditional: Boolean,
  },
  data() {
    return {
      qntd: 0,
      btnDisabled: true,
    };
  },
  watch: {
    qntd(value) {
      if (value <= 0 || (this.acao?.qntdAcoes && value > this.acao.qntdAcoes)) {
        this.btnDisabled = true;
        return;
      }

      this.btnDisabled = false;
    },
  },
  computed: {
    colorInput() {
      if (
        this.qntd < 0 ||
        (this.acao?.qntdAcoes && this.qntd > this.acao.qntdAcoes)
      ) {
        return "unlaw";
      }

      return "";
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
