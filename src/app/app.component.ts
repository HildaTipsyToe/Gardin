import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'implementDiffrentProjects';
  @ViewChild('BackStage') track!: ElementRef

  ngAfterViewInit(): void{

    // console.log(this.track.nativeElement.dataset.OpenClose);
    this.track.nativeElement.dataset.OpenClose = false;
    console.log(this.track.nativeElement.dataset.OpenClose);
    
    
  }

  public Pull(){
    console.log("HEj");
    console.log(this.track.nativeElement.dataset.OpenClose + " Hej Jimmy");
    
    if(this.track.nativeElement.dataset.OpenClose === "false"){
      document.getElementById('BackStage')!.style.zIndex = `2`;
      this.track.nativeElement.dataset.OpenClose = true 
    }
    else if(this.track.nativeElement.dataset.OpenClose === "true"){
      document.getElementById('BackStage')!.style.zIndex = `1`;
      this.track.nativeElement.dataset.OpenClose = false 
    }
    
    // if(document.getElementById(`BackStagde`)!.dataset[`OpenClose`])
    // console.log(document.getElementById(`BackStagde`)!.dataset[`OpenClose`]);    
    //   document.getElementById(`BackStagde`)!.style.zIndex = `1`
    
    
    
  }
 
  
}

