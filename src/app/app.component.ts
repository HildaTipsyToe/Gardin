import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'implementDiffrentProjects';

  Pull(){
    console.log("hj")
    document.getElementById('BackStagde')!.style.zIndex = "z-index:2";
    console.log( document.getElementById('BackStagde')!.style.zIndex = `z-index:2`);
    console.log( document.getElementById('BackStagde')!.style.zIndex);
    
    
  }
  
}

