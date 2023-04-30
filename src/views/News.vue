<template lang="">
  <div class="container">
    <div class="header">
      <h1>ข่าวประชาสัมพันธ์</h1>
      <!-- create news -->
      <div v-if="role == 'admin'">
            <b-button
              variant="primary"
              v-b-modal.newscreate
              >Create News</b-button
            >
      </div>
      <!-- modal news -->
      <b-modal
      id="newscreate"
      
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Title"
          label-for="Title-input"
          invalid-feedback="Title is required"
          :state="TitleState"
        >
          <b-form-input
            id="title-input"
            v-model="title"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Sub_title"
          label-for="Sub_title-input"
          invalid-feedback="Sub_title is required"
          :state="Sub_titleState"
        >
          <b-form-input
            id="sub_title-input"
            v-model="sub_title"
            :state="Sub_titleState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Description"
          label-for="Description-input"
          invalid-feedback="Description is required"
          :state="DescriptionState"
        >
          <b-form-input
            id="desc-input"
            v-model="desc"
            :state="DescriptionState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
          id="checkbox-1"
          v-model="have_form"
          name="checkbox-1"
          value="yes"
          unchecked-value="no"
        >
          Form
        </b-form-checkbox>
        <!-- <b-form-file
          v-model="pic"
          @change="onFile"
          placeholder="Choose a file or drop it here..."
          
        ></b-form-file> -->
        <input type="file" @change="onFileSelected">
      </form>
      <template #modal-footer="{ close }">
            <b-button variant="danger" @click="close()">Close</b-button>
            <b-button variant="success" @click="create_news(), close()">Submit</b-button>
      </template>
    </b-modal>
    </div>
    <div class="news_layer ">
      <div v-for="(item, index) in test_item" :key="item._id" class="me-3 my-3">
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
            <p>
              <span
                class="pointer"
                v-if="!id_text.includes('show' + item._id)"
                @click="show_text(item)"
                >{{ item.desc_short }}...</span
              >
              <span v-if="id_text.includes('show' + item._id)">
                {{item.desc}}
              </span>
            </p>
            <p
              class="pointer"
              style="color: blue"
              @click="show_text(item)"
              v-if="!id_text.includes('show' + item._id)"
            >
              read more
            </p>
            <p
              class="pointer"
              style="color: blue"
              @click="Hide_text(item)"
              v-if="id_text.includes('show' + item._id)"
            >
              Hide
            </p>
          </b-card-text>
          <!-- user btn -->
          <div v-if="role == 'user'">
            <b-button
              @click="show_modal(item)"
              variant="primary"
              v-b-modal="item._id"
              >View Detail</b-button
            >
          </div>
          <!-- admin btn -->
          <div v-if="role == 'admin'" class="w-100">
            <b-button
              variant="warning"
              v-b-modal="item._id"
              class="me-1 float-start"
              >Edit</b-button
            >
            <b-button
              variant="danger"
              v-b-modal="'del' + item._id"
              class="me-1 float-start"
              >Delete
            </b-button>
          </div>
        </b-card>

        <!-- modal -->
        <b-modal scrollable v-bind:id="item._id" centered v-if="role == 'user'">
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
              v-b-modal="'modal' + item._id"
              >Go to Form</b-button
            >
          </template>
        </b-modal>
        
        <!-- modal 2 -->
        <b-modal v-bind:id="'modal' + item._id" title="Second Modal" centered>
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
            </b-col> </b-row
          ><b-row class="my-1">
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
        <b-modal scrollable v-bind:id="item._id" centered v-if="role == 'admin'">
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
          ></b-img><br><br>
          <b-input-group>
            <b-form-textarea v-model="item.desc" rows="6"></b-form-textarea>
          </b-input-group>
          <template #modal-footer="{ close }">
            <b-button variant="success" @click="close()">Save</b-button>
            <b-button variant="danger" @click="close()">Close</b-button>
          </template>
        </b-modal>
        <!-- modal for Admin Delete -->
        <b-modal scrollable v-bind:id="'del' + item._id" centered v-if="role == 'admin'">
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
          ></b-img><br><br>
          
          <p>{{item.desc}}</p>
          <template #modal-footer="{ close }">
            <b-button variant="success" @click="delete_news(item),close()">Confirm</b-button>
            <b-button variant="danger" @click="close()">Cancle</b-button>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      OpenClose: false,
      OpenModal2: false,
      role: "admin",
      id_text: [],
      new_item: [
        {
          id: "111",
          title: "Lorem ipsum",
          sub_title: "aaaaa",
          desc_short: "",
          desc: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          show_m: false,
          form: false,
        },
        {
          id: "222",
          title: "dolor sit amet",
          sub_title: "bbbbb",
          desc_short: "",
          desc: "olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id. Velit euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis sed odio morbi. Felis donec et odio pellentesque diam volutpat commodo sed. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. ",
          show_m: false,
          form: true,
        },
        {
          id: "333",
          title: "adstg adw",
          sub_title: "cccc",
          desc_short: "",
          desc: "olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id. Velit euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis sed odio morbi. Felis donec et odio pellentesque diam volutpat commodo sed. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. ",
          show_m: false,
          form: true,
        },
        {
          id: "444",
          title: "adstg adw",
          sub_title: "cccc",
          desc_short: "",
          desc: "olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id. Velit euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis sed odio morbi. Felis donec et odio pellentesque diam volutpat commodo sed. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. ",
          show_m: false,
          form: true,
        },
        {
          id: "555",
          title: "adstg adw",
          sub_title: "cccc",
          desc_short: "",
          desc: "olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id. Velit euismod in pellentesque massa placerat duis ultricies. Urna molestie at elementum eu facilisis sed odio morbi. Felis donec et odio pellentesque diam volutpat commodo sed. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. ",
          show_m: false,
          form: true,
        },
      ],
      detail_item: [],
      test_data: [],
      test_item: [],
      title: '',
      sub_title: '',
      desc: '',
      have_form: false,
      selectedFile: null,

    };
  },

  mounted() {
    // this.id = this._uid

    axios
      .get('http://localhost:5000/getAllNews')
      .then((response) => {
        console.log(response)
        // this.test_data = response.data
        this.test_item = response.data.data

        for (const element of this.test_item) {
          for (let i = 0; i < 100; i++) {
            element.desc_short += element.desc[i];
          }
          // let box = element.desc.substring(100);
          // element.desc = box;
        }
      })


  },

  methods: {
    show_modal(num) {
      this.OpenClose = true;

      this.detail_item = [num];
      if (num.form) {
        this.OpenModal2 = true;
      }
    },
    modal2() {
      // this.OpenClose = !this.OpenClose;
      this.OpenClose = false;
    },
    show_text(item) {
      this.id_text.push("show" + item._id);
    },
    Hide_text(item) {
      // if(!this.dots){
      //   this.dots = true
      //   this.more_text = false
      // }
      for (const [index, value] of this.id_text.entries()) {
        if (value == "show" + item._id) {
          this.id_text.splice(index, 1);
        }
      }
    },
    onFileSelected(event){
      console.log(event.target.files[0])
      this.selectedFile = event.target.files[0]
    },
    create_news() {
      
      axios
    .post('http://localhost:5000/news', {
          title:this.title,
          sub_title: this.sub_title,
          desc: this.desc,
          desc_short: "",
          img: '',
          form: this.have_form,
          show_m: false
    })
    .then((response) => {
      console.log(response)
      this.title = "";
      this.sub_title = '';
      this.desc = "";
      this.img = '';
      this.have_form = false;
    }).catch((error) => {
      this.error = error.response.data;
    })
    },
    delete_news(item){
      const id = item._id
      axios.delete('http://localhost:5000/news/delete/'+ id)
      .then((response) => console.log(response, "this is id", id))
      .catch((error) =>{
        this.error = error.response.data;
      })
    },
    
  },

};
</script>

<style scoped>
.header {
  text-align: center;
  display: inline;
}

.container {
  /* border: 2px solid red; */

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

.pointer {
  cursor: pointer;
}

/* .close-btn{
  text-align: center;
  margin-left: 0%;
} */
</style>
