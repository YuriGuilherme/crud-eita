<template>
  <section class="contacts">
    <header>
      <h2>Contatos</h2>
    </header>
    
    <section class="card">
      <div class="card-header">
        <div class="title">
          <span>Contatos</span>
        </div>
        <div class="add-new-contact">
          <router-link :to="'/new'">
            <i class="fa fa-plus-circle"></i>
            <span>Novo Contato</span>
          </router-link>
        </div>
      </div>
      <div class="card-content" v-if="contacts">
        <div class="filter-tags" v-if="contacts.length != 0">
          <div class="title">
            <span>Tags</span>
          </div>

          <ul>
            <li @click="changeFilterTag('starred')" :class="{'active': filterTags['starred']}">Starred</li>
            <li @click="changeFilterTag('notStarred')" :class="{'active': filterTags['notStarred']}">Not Starred</li>
          </ul>
        </div>
        
        <ul class="list">
          <div class="search-contact">
            <input class="form-control" placeholder="Pesquisar contato" type="text" v-model="searchText" >
          </div>
          <li class="contact" v-for="contact in filteredList">
            <div class="contact-starred">
              <i class="fa" :class="contact.starred? 'fa-star': 'fa-star-o'"></i>
            </div>
            <div class="contact-informations">
              <div class="contact-name">
                <span>{{contact.name}}</span>
              </div>
              <div class="contact-date">
                <span>{{contact.created_at | formatDate}}</span>
              </div>
              <div class="contact-contacts">
                <div class="phone-list">
                  <span>Telefones:</span>
                  <ul>
                    <li v-for="phone in contact.phones">
                      <span>({{phone.code}}) {{ phone.number | formatPhoneNumber}}</span>
                    </li>
                  </ul>
                </div>
                <div class="email-list">
                  <span>Emails:</span>
                  <ul class="">
                    <li v-for="email in contact.emails">
                      <span>{{email.address}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="loading-data" :class="{'active': isLoadingData}">
          <div class="loading-icon">
            <i class="fa fa-circle-o-notch"></i>
          </div>
        </div>
      </div>
      <div class="contact-add-new" v-if="contacts.length == 0">
        <h3>Você ainda não possui contatos cadastrados</h3>
        <span>Deseja cadastrar um novo contato?</span>
        <button class="btn btn-primary" title="cadastrar contato">Cadastrar novo contato</button>
      </div>
    </section>
  
  </section>
</template>

<script src="./ContactList.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" src="./ContactList.sass" scoped></style>