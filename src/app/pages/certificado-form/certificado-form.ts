import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecundaryButton, FormsModule,
    CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React', 'Vue'];

   campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }
}
