import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    email: '',
    cpf: '',
    celular: '',
    tipoContato: 'celular',
  };
  modalTitle: string = 'Adicionar Usuário';
  formUser: FormGroup;

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UserAddComponent>,
    private fb: FormBuilder
  ) {
    // Inicialize o formulário com validadores
    this.formUser = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      celular: ["", [Validators.required, Validators.minLength(10)]],
      tipoContato: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // Lógica para adicionar um usuário
    if (this.formUser.valid) {
      // Crie um novo usuário com os dados do formulário
      const newUser: User = {
        id: 0, // O ID pode ser 0 ou outro valor padrão
        name: this.formUser.value.name,
        email: this.formUser.value.email,
        cpf: this.formUser.value.cpf,
        celular: this.formUser.value.celular,
        tipoContato: this.formUser.value.tipoContato,
      };

      this.userService.addUser(newUser).subscribe((response) => {
        this.dialogRef.close(); // Fechar o modal após a adição de usuário
      });
    }
  }

  // Fechar o modal 
  onCancel(): void {
    this.dialogRef.close();
  }
  
}
