import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public listaItens = [
    {icon: 'assets/icons/power.svg', desc: 'Jogue também offline'},
    {icon: 'assets/icons/user.svg', desc: '64 jogadores'},
    {icon: 'assets/icons/game-controller.svg', desc: 'Compatível com uso remoto'},
    {icon: 'assets/icons/vibrate.svg', desc: 'Vibração no controle'},
    {icon: 'assets/icons/kid.svg', desc: 'Permitido para menores'},
  ]

}
