<template>
  <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <div class="row row-flex">
          <div class="col s4">
            <div class="summary">Showing {{filteredItems.length}} items</div>
          </div>
          <div class="input-field col s7 offset-s1">
            <button class="suffix" @click="search=''"><img src='img/clear.png' alt="Reset Search" title="Reset" /></button>
            <input v-model="search" type="text">
            <label>Search</label>
          </div>
        </div>
        <ul class="collection router-list">
          <li class="collection-item avatar" v-for="item in filteredItems" :key="item.name">
            <a :href="`https://${item.ip}/ng/page/p/user/guest/list/`" class="collection-item" target="_blank">
            <img src="img/forticlient.png" alt="" class="tile">
            <div>
              <div class="router-title">{{item.name}}</div>
              <p class="location">{{item.location}}</p>
            </div>
            <div class="secondary-content green-text text-darken-2">
              {{item.ip}}
            </div>
            </a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:null,
      list:[
        {name:"IT Building", location:"102 St. Vincent, Port of Spain", ip: "172.0.0.1"},
        {name:"Hall of Justice", location:"Knox Street, Port of Spain", ip: "172.16.71.1"},
        {name:"San Fernando Old Magistrate", location:"San Fernando", ip: "10.22.0.1"},
        {name:"San Fernando", location:"San Fernando", ip: "10.1.0.1"},
        {name:"Family Court", location:"San Fernando", ip: "10.3.0.1"},
        {name:"Port of Spain Magistrates Court", location:"St. George West, Port of Spain", ip: "10.4.0.1"},
        {name:"Arouca", location:"Arouca", ip: "10.35.0.1"},
        {name:"Port of Spain Prison", location:"Port of Spain", ip: "10.33.0.1"},
        {name:"Tobago", location:"Tobago", ip: "10.2.0.1"},
        {name:"Kings Court", location:"Frederick Street, Port of Spain", ip: "10.16.0.1"},
        {name:"Seecharan Building", location:"Duke Street, Port of Spain", ip: "10.18.0.1"},
        {name:"HR/Accounts Building", location:"Corner Pembroke Street and Duke Street, Port of Spain", ip: "10.17.0.1"},
        {name:"FCD Fyzabad", location:"Corner Pembroke Street and Duke Street, Port of Spain", ip: "192.168.151.1"},
        {name:"FCD Children Court Building", location:"Corner Pembroke Street and Duke Street, Port of Spain", ip: "192.168.152.1"},
        {name:"Tradezone", location:"Corner Pembroke Street and Duke Street, Port of Spain", ip: "10.15.0.1"},
        {name:"Tunapuna Regional Complex", location:"Tunapuna", ip: "10.20.0.1"},
        {name:"Arima Magistrates", location:"Arima", ip: "10.6.0.1"},
        {name:"Sangre Grande", location:"Sangre Grande", ip: "10.7.0.1"},
        {name:"Chaguanas", location:"Chaguanas", ip: "10.11.0.1"},
        {name:"Tobago - Prison", location:"Tobago", ip: "10.32.0.1"},
        {name:"Couva", location:"Couva", ip: "10.12.0.1"},
        {name:"Point Fortin", location:"Point Fortin", ip: "10.14.0.1"},
        {name:"Siparia", location:"Siparia", ip: "10.19.0.1"},
        {name:"Princes Town", location:"Princes Town", ip: "10.13.0.1"},
        {name:"Rio Claro", location:"Rio Claro", ip: "10.9.0.1"},
        {name:"Mayaro", location:"Mayaro", ip: "10.8.0.1"},
        {name:"Pembroke Court", location:"Pembroke Street, Port of Spain", ip: "10.23.0.1"},
        {name:"Thomas and Sons", location:"Corner Duke and Pembroke Street, Port of Spain", ip: "10.26.0.1"},
        {name:"Family Court Tobago", location:"Tobago", ip: "10.27.0.2"},
      ]
    }
  },
  computed:{
    filteredItems: function() {
      if(!this.search)
        return this.list
      else
        return this.list.filter(item => {
          return item.name.toUpperCase().includes(this.search.toUpperCase());
        });
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-flex {
  display:flex;
  align-items:center;
}
.summary {font-size:1.1em; letter-spacing:1px;}
.router-list li {display:flex; align-items:center}
.router-list li a.collection-item .router-title {color:#5e7b86; transition:.5s; font-weight:bold; font-size:1.2em; text-transform:uppercase;}
.router-list li a.collection-item .tile {
  width: 50px;
  height: 50px;
  padding: 10px;
  background:#dbdbdb;
  transition:.5s;
  position: absolute;
  overflow: hidden;
  left: 15px;
  display: inline-block;
  vertical-align: middle;
}
.router-list li a.collection-item:hover .tile {
  background:#008b10;
}
.router-list a.collection-item:hover .router-title {color:#003845}
.router-list a .location {color:#aaa; letter-spacing:1px; }
.router-list a.collection-item:not(.active):hover {background:inherit}
.router-list .secondary-content {font-size:.7em; letter-spacing:2px}

.input-field .suffix {
    position: absolute;
    font-size: 2rem;
    padding: 2px 10px 5px;
    -webkit-transition: color .2s;
    transition: color .2s;
    right:0;
    top: .5rem;
}
.input-field .suffix ~ input, .input-field .suffix ~ textarea, .input-field .suffix ~ label, .input-field .suffix ~ .validate ~ label, .input-field .suffix ~ .helper-text, .input-field .suffix ~ .autocomplete-content
{
  margin-right: 3rem;
  width: calc(100% - 3rem);
}
button.suffix {cursor:pointer; background:#e1e1e1; border:none; border-radius:25px; transition:.5s;}
button.suffix:hover {box-shadow:0 1px 3px rgba(0,0,0,0.1)}

@media only screen and (max-width: 600px)  {
  .router-list li.collection-item.avatar {
    padding-left:0;
  }
  .router-list li.collection-item.avatar .tile {
    display:none;
  }
  .container {width:95%;}
}
</style>
