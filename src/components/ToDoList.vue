<template>
    <div class="container">
        <main>
        <div class="submit-form">
             <form>
                <label>
                    <input v-model="task" 
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
                <th>#</th>
                <th>#</th>
            </tr>
            <tr v-for="(task,index) in tasks" :key="index">
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
        return{
            task: '',
            editedTask: null,
            allStatuses: ['To-do', 'In-progress', 'Finished'],
            tasks: []
        }
       },
      // computed: {
      //   tasks() {
      //       return
      //   }
      // },
      methods: {
        submitTask() {
          //   if(this.task.length === 0) return;
          //   if(this.editedTask === null){
          //
          //       this.tasks.push({
          //       name: this.task,
          //       status: 'To-do'
          //     }
          //    );
          //   }
          //   else{
          //       this.tasks[this.editedTask].name = this.task;
          //       this.editedTask = null;
          //   }
          //
          //   this.task = '';
          //
          // this.$store.dispatch('addList', {list: this.tasks})
          this.$store.dispatch('getList')
          // this.$store.commit('SET_LIST')
          this.tasks = this.$store.state.list.tasks
          console.log(this.tasks)

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
@media only screen and (min-width: 0) {
    .container{
        width: 100%;
        .submit-form{
            width: 100%;
            text-align: center;
            input{
                max-width: 35%
            }
            button{
                margin: 0 9px;
                color: white;
                background-color: rgb(27, 214, 255);
                padding: 5px 15px;
                border-radius: 33px;
                border: none;
                cursor: pointer;
            }
        }
        table {
            table-layout: auto;
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 0 5px rgb(27, 214, 255);
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
                max-width: 100%;
                
            }
        }
        .table-form{
            padding-top: 25px;
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
              width: 30%;
              tr{
                  max-width: 45%;
              }
          }
      }
  }
}
</style>