import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

/* Esse componte que vai dizer que essa classe a baixo é um component */
@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'] /* o styleUrl = um array de styles por isso usa-se [ ] */
    
})
export class StarComponent implements OnChanges{
   @Input()
   rating: number = 0;
   starWidth: number;

    ngOnChanges(): void { /* o ngOnChenge é um recurso HTTP  do Angular*/
       this.starWidth = this.rating * 74 / 6;
   }
}