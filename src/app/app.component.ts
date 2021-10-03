import { not } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-List';
  textValue="";
  noTasks= false;

  data=[{
    title: "A default item",
    done: false
  },
  {
    title: "A completed task",
    done:true
  }
  ];

  AddTask(){
    if(this.textValue!== ""){
      this.noTasks=false;
      this.data.push({
        title: this.textValue,
        done:false
      });
      this.textValue="";
    }
  }

  clearData(){
    let itemsToBeRemoved: Array<number>=[];
    this.data.forEach((item) => {
      if(item.done===true){
        let index=this.data.indexOf(item);
        itemsToBeRemoved.push(index);
      }
    })
    //console.log(itemsToBeRemoved);

    for(var i = itemsToBeRemoved.length -1; i >= 0; i--){
      this.data.splice(itemsToBeRemoved[i],1);
    }      

    if(this.data.length==0)
      this.noTasks=true;
  }

}
