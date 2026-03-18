import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecundaryButton } from "../../_components/secundary-button/secundary-button";
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";

@Component({
  selector: 'app-certificados',
  imports: [ ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados {

}
