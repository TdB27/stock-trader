<template>
  <v-card elevation="3" min-width="360" max-width="360" class="card">
    <v-toolbar :color="configDefault.colorCard" dark height="100">
      <v-card-title>
        {{ stock.stock }}
        <br />
        (Preço: R$ {{ stock.price }}
        {{ stock.qntd ? " | Qtde: " + stock.qntd : "" }})
      </v-card-title>
    </v-toolbar>
    <v-card-text class="px-5 py-5">
      <div class="d-flex">
        <div class="input-group" :class="colorInput">
          <label>Quantidade </label>
          <input
            :id="'input-' + stock.id"
            type="number"
            v-model.number="qntd"
            class="form-control" />
        </div>
        <div class="btn">
          <v-btn
            large
            color="#409744"
            class="white--text"
            @click="$emit('clickButton', { stock, qntd }), (qntd = 0)"
            :disabled="btnDisabled">
            {{ buttonDescription }}
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    stock: Object,
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
      let price = value * this.stock.price;

      if (
        value <= 0 ||
        (this.stock?.qntd && value > this.stock.qntd) ||
        price > this.$store.state.balance
      ) {
        this.btnDisabled = true;
        return;
      }

      this.btnDisabled = false;
    },
  },
  computed: {
    colorInput() {
      if (this.qntd < 0 || (this.stock?.qntd && this.qntd > this.stock.qntd)) {
        return "unlaw";
      }

      return "";
    },
    buttonDescription() {
      let price = this.qntd * this.stock.price;
      if (
        (this.stock?.qntd && this.qntd > this.stock.qntd) ||
        price > this.$store.state.balance
      )
        return "Insuficiente";
      return this.configDefault.buttonDescription;
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
