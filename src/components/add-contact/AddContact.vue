<template>
  <section class="contacts">
    <header>
      <h2>Cadastrar contato</h2>
    </header>
    
    <section class="card">
      <div class="card-header">
        <div class="title">
          <span>Dados do contato</span>
        </div>
      </div>
      <div class="card-content">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group" :class="{'has-error': errors.has('name')}">
            <label for="name">Nome</label>
            <input type="text" name="name" v-model="newContact.name" v-validate="'required|min:3'" placeholder="Nome do contato">
            <i v-show="errors.has('name')" class="fa fa-warning"></i>
            <span v-show="errors.has('name')" class="help is-danger">Este campo é obrigatorio!</span>
          </div>
          <div class="form-group" :class="{'has-error': errors.has('origin')}">
            <label for="origin">Origem do contato</label>
            <select name="origin" v-model="newContact.contact_source_id" v-validate="'required'">
              <option value="" disabled>Selecione a origem do contato</option>
              <option v-for="contact in contactSources" :key="contact.id" v-bind:value="contact.id">{{contact.name}}</option>
            </select>
            <i v-show="errors.has('origin')" class="fa fa-warning"></i>
            <span v-show="errors.has('origin')" class="help is-danger">Este campo é obrigatorio!</span>
          </div>
          <div class="form-group">
            <label for="about">Sobre o contato</label>
            <textarea name="about" v-model="newContact.background" cols="30" rows="10" placeholder="Conte um pouco sobre como você o conheceu"></textarea>
          </div>
          <div class="form-group">
            <label for="phone">Telefone</label>
            <the-mask :mask="['(##) ####-####', '(##) #####-####']" type="text" name="phone" :key="index" v-for="(phone, index) in newContact.phones" v-model="phone.number" placeholder="(11)98765-4321" />
            <button type="button" @click="addPhoneNumber">Adicionar telefone</button>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" :key="index" v-for="(email, index) in newContact.emails" v-model="email.address" placeholder="exemplo@email.com">
            <button type="button" @click="addEmailAddress">Adicionar Email</button>
          </div>
          <div class="form-group">
            <button class="btn" type="submit">Salvar Contato</button>
          </div>
        </form>
        <div class="loading-data" :class="{'active': isSendingContact}">
          <div class="loading-icon">
            <i class="fa fa-circle-o-notch"></i>
          </div>
        </div>
      </div>
    </section>
  
  </section>
</template>

<script src="./AddContact.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" src="./AddContact.sass" scoped></style>