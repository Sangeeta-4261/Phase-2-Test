import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { javascriptService } from '../service2/javascript.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class javascriptComponent implements OnInit {
  
  public name : string="";
  public questionList : any = [];
  public currentQuestions:number = 3;
  public marks: number=0;
  counter=60;
  correctAnswer:number = 0;
  wrongAnswer:number = 0;
  interval$:any;
  progress:string="0";
  isOnlineTestCompleted : boolean = false;
  constructor(private javascriptService : javascriptService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions(){
    this.javascriptService.getQuestionjson()
    .subscribe(res=>{
      this.questionList = res.javascript;
      console.log(res.javascript);
    })

  }
  nextQuestions(){
    this.currentQuestions++;

  }
  previousQuestions(){
    this.currentQuestions--;

  }
  answer(currentQno:number,option:any){

    if(currentQno === this.questionList.length){
      this.isOnlineTestCompleted = true;
      this.stopCounter();
    }
    if(option.correct){
      this.marks+=1;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestions++;
        this.resetCounter();
        this.getprogressPercent();
      }, 1000);


    }else{
      setTimeout(() => {
        this.currentQuestions++;
        this.wrongAnswer++;
        this.resetCounter();
        this.getprogressPercent();
      }, 1000);
      this.marks -=0;
    }
  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter==0){
        this.currentQuestions++;
        this.counter=60;
        this.marks-=0;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;

  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.stopCounter();

  }
  resetOnlineTest(){
    this.resetCounter();
    this.getAllQuestions();
    this.marks=0;
    this.counter=60;
    this.currentQuestions=0;
    this.progress="0";
  }
  getprogressPercent(){
    this.progress = ((this.currentQuestions/this.questionList.length)*100).toString();
    return this.progress;
  }

}
