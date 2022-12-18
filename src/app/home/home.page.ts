import { Component, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IonButton, IonImg, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('img1') img1: any;
  @ViewChild('button1') button1: any;
  @ViewChild('button2') button2: any;
  @ViewChild('button3') button3: any;
  @ViewChild('button4') button4: any;

  @ViewChild('button5') button5: any;
  @ViewChild('button6') button6: any;
  @ViewChild('button7') button7: any;
  @ViewChild('button8') button8: any;

  @ViewChild('button9') button9: any;
  @ViewChild('button10') button10: any;
  @ViewChild('button11') button11: any;
  @ViewChild('button12') button12: any;

  @ViewChild('button13') button13: any;
  @ViewChild('button14') button14: any;
  @ViewChild('button15') button15: any;
  @ViewChild('button16') button16: any;

  @ViewChild('button17') button17: any;
  @ViewChild('button18') button18: any;
  @ViewChild('button19') button19: any;
  @ViewChild('button20') button20: any;

  @ViewChild('button21') button21: any;
  @ViewChild('button22') button22: any;
  @ViewChild('button23') button23: any;

  public palavra: string;
  public palavraOculta: string;
  public arrayPalavra: Array<string>=[];
  public arrayPalavraOculta: Array<string>=[];
  public contErro: number;
  public venceu: any;
  public gameIniciado: any;

  constructor(private toast: ToastController) {
    this.palavra ='';
    this.palavraOculta = '';
    this.contErro = 0;
    this.gameIniciado = false;
  }

  jogar(){
    let letra = '';
    this.gameIniciado = true;
    this.palavra = this.palavra.toLowerCase();
    for (let i=0; i < this.palavra.length; i++){
      letra = this.palavra.substring(i, i+1);
      this.arrayPalavra.push(letra);
      this.palavraOculta += '?';
      this.arrayPalavraOculta.push('?');

    }

  }

  pesquisarLetra(botao:IonButton, letra:string){
    botao.disabled = true;
    let achou = false;
    this.palavraOculta = '';
    for (let i =0; i < this.arrayPalavra.length; i++){
      if(letra == this.arrayPalavra[i]){
        this.arrayPalavraOculta[i] = letra;

        achou = true;
      }
      if(this.ganhou() == false){
        this.presentToast("Voce Ganhou!!");
        this.reiniciar();
      }
    }
        for (let j = 0; j < this.arrayPalavraOculta.length; j++){
            this.palavraOculta += this.arrayPalavraOculta[j];

        }
      if(achou == false){
        this.contErro++;
        this.erro(this.contErro);
        if(this.contErro == 6){
          this.presentToast("Você foi enforcado.......");
          this.reiniciar();
        }
      }

   }

   ganhou(){
    let ganho = false;
    for(let i = 0; i < this.arrayPalavraOculta.length; i++){
      if(this.arrayPalavraOculta[i] == '?'){
        return  true;
      }

    }
    return  false;



   }


  erro(erro: number){
        let arrayEndereco = [ "../../assets/icon/forca-img-2.png", "../../assets/icon/forca-img-3.png", "../../assets/icon/forca-img-4.png", "../../assets/icon/forca-img-5.png", "../../assets/icon/forca-img-6.png", "../../assets/icon/forca-img-7.png"]
        this.img1.src = arrayEndereco[erro-1];
}

async presentToast(mens:string) {
  const toast = await this.toast.create({
    message: mens,
    duration: 2000,
    position: 'bottom'
  });

  await toast.present();
}

reiniciar(){
  this.button1.disabled = false;
  this.button2.disabled = false;
  this.button3.disabled = false;
  this.button4.disabled = false;
  this.button5.disabled = false;
  this.button6.disabled = false;
  this.button7.disabled = false;
  this.button8.disabled = false;
  this.button9.disabled = false;
  this.button10.disabled = false;
  this.button11.disabled = false;
  this.button12.disabled = false;
  this.button13.disabled = false;
  this.button14.disabled = false;
  this.button15.disabled = false;
  this.button16.disabled = false;
  this.button17.disabled = false;
  this.button18.disabled = false;
  this.button19.disabled = false;
  this.button20.disabled = false;
  this.button21.disabled = false;
  this.button22.disabled = false;
  this.button23.disabled = false;
  this.img1.src = "../../assets/icon/forca-img-1.png"
  this.arrayPalavra = [];
  this.arrayPalavraOculta = [];
  this.palavra = '';
  this.palavraOculta = '';
  this.gameIniciado = false;
  this.contErro = 0;
}

}
