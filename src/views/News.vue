<template lang="">
  <div class="container">
    <div class="header">
      <h1>ข่าวประชาสัมพันธ์</h1>
    </div>
    <div class="news_layer">
      <div v-for="(item, index) in new_item" :key="item.id" class="mx-2 my-3">
        
          <b-card class="card-news">
          <b-card-title>
            {{ item.title }}
          </b-card-title>
          <b-card-img
            src="https://picsum.photos/600/300/?image=25"
            alt="Image"
            class="rounded-0 image-card"
          >
          </b-card-img>
          <b-card-text>
            {{ item.sub_title }}
          </b-card-text>
          <!-- user btn -->
          <div v-if="role == 'user'">
            <b-button
            @click="show_modal(item)"
            variant="primary"
            v-b-modal="item.id"
            >View Detail</b-button>
          </div>
          <!-- admin btn -->
          <div v-if="role == 'admin'" class="w-100">
            <b-button
            variant="warning"
            v-b-modal="item.id"
            class="mx-1 float-start"
            >Edit</b-button>
            <b-button 
            variant="danger"
            v-b-modal="item.id"
            class="mx-1 float-start"
            >Delete
            </b-button>
          </div>
        </b-card>
        
        <!-- modal -->
        <b-modal scrollable v-bind:id="item.id" centered v-if="role == 'user'">
          <template #modal-header="{ close }">
            <div class="w-100">
              <h2 class="float-start">{{ item.title }}</h2>
              <b-button class="float-end" @click="close()">Close</b-button>
            </div>
          </template>
          <b-img
            src="https://picsum.photos/300/150/?image=41"
            fluid-grow
            alt="Fluid-grow image"
          ></b-img>
          <p class="my-4">{{ item.desc }}</p>
          <template #modal-footer="{ close }">
            <b-button variant="danger" @click="close()">Close</b-button>
            <b-button
              v-if="OpenModal2"
              @click="modal2(), close()"
              variant="success"
              v-b-modal="'modal' + item.id"
              >Go to Form</b-button
            >
          </template>
        </b-modal>
        <!-- modal 2 -->
        <b-modal v-bind:id="'modal' + item.id" title="Second Modal" centered>
          <template #modal-header="{ close }">
            <div class="w-100">
              <h2 class="float-start my-1">Form</h2>
              <b-button class="float-end" @click="close()">Close</b-button>
            </div>
          </template>

          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-default">Name:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input
                id="input-default"
                placeholder="Enter your name"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-default">Objective:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input
                id="input-default"
                placeholder="Enter your name"
              ></b-form-input>
            </b-col>
          </b-row><b-row class="my-1">
            <b-col sm="2">
              <label for="input-default">File:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input
                id="input-small"
                placeholder="Enter your name"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-modal>

        <!-- modal for Admin Edit -->
        <b-modal scrollable v-bind:id="item.id" centered v-if="role == 'admin'">
          <template #modal-header="{ close }">
            <div class="w-100">
              <h2 class="float-start">{{ item.title }}</h2>
              <b-button class="float-end" @click="close()">Close</b-button>
            </div>
          </template>
          <b-img
            src="https://picsum.photos/300/150/?image=41"
            fluid-grow
            alt="Fluid-grow image"
          ></b-img>
          <p class="my-4">{{ item.desc }}</p>
          <template #modal-footer="{ close }">
            <b-button variant="danger" @click="close()">Close</b-button>
            <b-button
              v-if="OpenModal2"
              @click="modal2(), close()"
              variant="success"
              v-b-modal="'modal' + item.id"
              >Go to Form</b-button
            >
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      OpenClose: false,
      OpenModal2: false,
      id_detail: "",
      word: "Hello",
      role:'user',
      new_item: [
        {
          id: "aaa",
          title: "Lorem ipsum",
          sub_title: "aaaaa",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          show_m: false,
          form: false,
        },
        {
          id: "bbb",
          title: "dolor sit amet",
          sub_title:
            "olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id. Velit euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis sed odio morbi. Felis donec et odio pellentesque diam volutpat commodo sed. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. ",
          desc: "olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id. Velit euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis sed odio morbi. Felis donec et odio pellentesque diam volutpat commodo sed. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. ",
          show_m: false,
          form: true,
        },
        {
          id: "cc",
          title: "adstg adw",
          sub_title: "cccc",
          desc: "olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id. Velit euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis sed odio morbi. Felis donec et odio pellentesque diam volutpat commodo sed. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. ",
          show_m: false,
          form: true,
        },
      ],
      detail_item: [],
    };
  },
  methods: {
    show_modal(num) {
      this.OpenClose = true;
      this.id_detail = num.id;
      this.detail_item = [num];
      if (num.form) {
        this.OpenModal2 = true;
      }
    },
    modal2() {
      // this.OpenClose = !this.OpenClose;
      this.OpenClose = false;
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
}
.news_layer {
  display: flex;
  flex-wrap: wrap;
}

/* .new_modal {
    width: 15vw;
    display: flex;
    height: auto;
    margin: 10px;
    flex-direction: column;
    text-align: left;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 5px 5px 15px;
} */

.image {
  width: 100%;
  height: auto;
}

/* .image-card {
} */
.card-news {
  /* background-color: rgba(44, 51, 51, 0.5); */
  max-width: 300px;
}

.modal-news {
  background-color: red;
}

.img-modal {
  width: 50%;
}

/* .close-btn{
  text-align: center;
  margin-left: 0%;
} */
</style>
