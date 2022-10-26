<template>
    <div class="container">
        <main>
        <div class="submit-form">
             <form>
                <label>
                    <input v-model="name"
                           type="text" 
                           placeholder="Enter Task" 
                           id="input-control">
                     <button type="button"
                             @click="submitTask">
                       Submit
                     </button>
                </label>
             </form>
        </div>
        <div class="table-form">
          <table>
            <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr v-for="(task,index) in tasksList" :key="index">
                <td>{{task.task}}</td>
                <td><span @click="changeStatus(index)">
                          {{task.status}}
                    </span></td>
                <td>
                    <div @click="editTask(index)">
                        <span class="fa fa-pen"></span>
                    </div>
                </td>
                <td>
                    <div @click="deleteTask(index)">
                        <span class="fa fa-trash"></span>
                    </div>
                </td>
            </tr>
          </table>
        </div>
        </main>
    </div>
</template>

<script>
    export default {
      name: 'ToDoList',
      data() {
        return {
            name: '',
            list: {
              task: '',
              date: '',
              status: 'to do'
            },
            editedTask: null,
            tasks: [],
            allStatuses: ['to do', 'in progress', 'finished'],
        }
       },
      created() {
        this.$store.dispatch('getList')
      },
      computed: {
        tasksList() {
            return this.$store.getters.rightTasks
        }
      },
      methods: {
        submitTask() {
            if(this.name.length !== 0) {
              this.list.task = this.name
              this.$store.dispatch('addTask', {task: this.list})
              this.$store.dispatch('getList')
            }
            else return
            this.name = '';
        },
        deleteTask(index){
            // this.$confirm("You won't be able to revert this",
            //               "Are you sure?",
            //                'warning',
            //                ).then(()=>{
            //                 this.tasks.splice(index, 1);
            //                })
        },
        editTask(index){

            // this.task = this.tasks[index].name;
            // this.editedTask = index;
        },
        changeStatus(index){
          // let newIndex = this.allStatuses.indexOf(this.tasks[index].status);
          // if(++newIndex > 2) newIndex = 0;
          // this.tasks[index].status = this.allStatuses[newIndex];

        },
       }
    }
</script>

<style lang="scss">
  @import '../styles/vars.scss';
  @import '../styles/base-classes.scss';

  @media only screen and (min-width: 0) {
      .container{
          width: 100%;
          .submit-form{
              width: 100%;
              text-align: center;
              input{
                width: 700px;
                border: 2px solid $dark-blue;
                padding: 8px 12px;
                background-color: rgba(79, 178, 145, 1);
              }
              button{
                margin: 0;
                padding: 8px 12px;
                color: white;
                background-color: $dark-blue;
                cursor: pointer;
                border: 2px solid $dark-blue;
              }
          }
          table {
            table-layout: auto;
            margin: 0 auto;
            border-collapse: collapse;
            background-color: white;
            border: 2px solid $dark-blue;
              tr{
                max-width: 80%;
                padding: 7px 20px;
              }
              th{
                text-align: justify;
                color: black;
                padding: 7px 15px;
                border-bottom: 1px solid black;
              }
              td{
                text-align: justify;
                padding: 7px 15px;
                border-bottom: 1px solid $light-grey;
                width: 100%;
              }
          }
          .table-form{
            padding-top: 25px;
            width: 700px;
            margin: 0 auto;
          }
      }
  }

  @media only screen and (min-width: 768px){
   .container{
      width: 100%;
      input{
          width: 200px;
      }
    }
  @media only screen and (min-width: 1140px) {
        .container{
            width: 100%;
            input{
                width: 250px;
            }
            table{
                width: 700px;
                tr{
                    max-width: 45%;
                }
            }
        }
    }
  }
</style>