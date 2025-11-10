import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  // @Input() fruitnumber = 0; // war ein Zwischenbeispiel
  // @Input('testNumber') fruitnumber = 0; // andere Möglichkeit, entspr. fruitlist.component.html 

  @Input()fruit = { // als default Fall hierher verschoben
      name: "Apfel",
      img: "apple.png",
      description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
      genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
      stars: 2.3,
      reviews: [{ name: "Kevin W.", text: "ist lecker" }, { name: "Arne P.", text: "nicht so meins" }],
    };

   @Output()fruitname = new EventEmitter<string>();
  // @Output('banaba')fruitname = new EventEmitter<string>(); // andere Schreibweise, muss entsprechend in "fruitlist.component.html" auch angepasst werden.
   
  // mit dieser Funktion wird der Fruchname ausgelogt, wenn man auf den Sendebutton klickt. In Zusammenhang mit der Funktion in "fruitlist.component.ts"
  emitName() { // funktion in "singlefruit.component.html" auf den Button zum abschicken der Nachricht eingefügt
    this.fruitname.emit(this.fruit.name)
  }


}
