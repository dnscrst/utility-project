<template>
    <div class="container">
        <main>
        <div class="submit-form">
             <form>
                <label>
                    <input v-model="task" type="text" placeholder="Enter Task" id="input-control">
                     <button @click="submitTask">Submit</button>
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
                <td>{{task.name}}</td>
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
       methods: {
        submitTask(e) {
            if(this.task.length === 0) return;
            e.preventDefault();

            if(this.editedTask === null){
                this.tasks.push({
                name: this.task,
                status: 'To-do'
            });
            }
            else{
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
            }

            this.task = '';
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        editTask(index){
            this.task = this.tasks[index].name;
            this.editedTask = index;
        },
        changeStatus(index){
          let newIndex = this.allStatuses.indexOf(this.tasks[index].status);
          if(++newIndex > 2) newIndex = 0;
          this.tasks[index].status = this.allStatuses[newIndex];
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
                padding: 4px 20px;
                border: none;
                background-color: $light-grey;
                border-radius: 15px;
                cursor: pointer;
            }
        }
        table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            background-color: white;
            tr{
                max-width: 80%;
                &:nth-child(even){
                    background-color: lightgrey;
                }
            }
            th{
                text-align: justify;
                 background-color: black;
                 color: white;
            }
            td{
                text-align: justify;
                border: 1px solid lightgray;
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
    table{
        width: 40%;
        tr{
            max-width: 60%;
        }
    }
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
</style>