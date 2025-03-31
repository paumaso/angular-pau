import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulari!: FormGroup; // Declaración del FormGroup
  carregant = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicialización del FormGroup
    this.formulari = this.fb.group({
      usuari: ['', Validators.required],
      contrasenya: ['', Validators.required]
    });
  }

  acces(): void {
    if (this.formulari.valid) {
      console.log('Formulario válido:', this.formulari.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}