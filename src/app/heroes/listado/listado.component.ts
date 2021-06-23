import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['SpiderMan', 'IronMan','Hulk','Thor', 'Capitán América'];
  //heroeBorrado: string | undefined = '';
  heroeBorrado: string = '';

  borrarHeroe(): void{
    //this.heroes.splice(0,1);
    //this.heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
  }

}
