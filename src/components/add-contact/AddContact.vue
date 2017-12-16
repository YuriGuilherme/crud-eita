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
          <div class="form-group">
            <label for="">Nome</label>
            <input type="text" name="name" v-model="newContact.name" placeholder="Nome do contato" required>
          </div>
          <div class="form-group">
            <label for="">Origem do contato</label>
            <select name="origin" v-model="newContact.contact_source_id" required>
              <option value="" disabled>Selecione a origem do contato</option>
              <option v-for="contact in contact_sources" :key="contact.id" v-bind:value="contact.id">{{contact.name}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">Sobre o contato</label>
            <textarea name="about" v-model="newContact.background" cols="30" rows="10" placeholder="Conte um pouco sobre como você o conheceu"></textarea>
          </div>
          <div class="form-group">
            <label for="">Telefone</label>
            <the-mask :mask="['(##) ####-####', '(##) #####-####']" type="text" name="phone" :key="index" v-for="(phone, index) in newContact.phones" v-model="phone.number" placeholder="(11)98765-4321" />
            <button type="button" @click="AddPhoneNumber">Adicionar telefone</button>
          </div>
          <div class="form-group">
            <label for="">Email</label>
            <input type="email" name="email" :key="index" v-for="(email, index) in newContact.emails" v-model="email.address" placeholder="exemplo@email.com">
            <button type="button" @click="AddEmailAddress">Adicionar Email</button>
          </div>
          <div class="form-group">
            <button class="btn" type="submit">Salvar Contato</button>
          </div>
        </form>
        <div class="loading-data" :class="{'active': loading_contacts}">
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