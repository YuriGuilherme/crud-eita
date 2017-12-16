<template>
  <section>
    <header>
      <button class="btn" @click="closeContacInformations()">Fechar</button>
    </header>
      
    <section class="contact-info" v-if="contact.name">
      <div class="contact-info-header">
        <div class="contact-name">
          <span>{{contact.name}}</span>
        </div>
        <div class="contact-origin">
          <span>{{contact.contact_source.name}}</span>
        </div>
      </div>
      <div class="contact-info-content">
        <div class="contact-contacts">
          <label class="main">Contato</label>
          <div class="contact-description">
            <label>Criado em:</label>
            <span>{{contact.created_at | formatDate}}</span>
          </div>
          <div class="contact-phones" v-show="contact.phones.length != 0">
            <label>Telefones</label>
            <span v-for="(phone, index) in contact.phones" :key="index">({{phone.code}}) {{phone.number}}</span>
          </div>
          <div class="contact-emails" v-show="contact.emails.length != 0">
            <label for="">Emails</label>
            <span v-for="(email, index) in contact.emails" :key="index">{{email.address}}</span>
          </div>
        </div>
      </div>
        <div class="contact-info-about">
          <label class="main">Observações</label>
          <span>{{contact.background || 'Nenhuma observação cadastrada.'}}</span>
        </div>
    </section>
  </section>
</template>

<script src="./ShowContactInformation.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" src="./ShowContactInformation.sass" scoped></style>